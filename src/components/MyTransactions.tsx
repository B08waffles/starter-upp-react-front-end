import { faCalendarAlt, faCalendarCheck, faCheck, faCheckCircle, faCreditCardAlt, faEdit, faMoneyBills, faSchool, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Card, Container, Button, Alert, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TransactionDataService from '../services/transaction'
import LoadingSpinner from './LoadingSpinner';

const MyTransactions = (props: { token: string }) => {
  const [transactions, setTransactions] = useState([]);
  const logcheck = localStorage.getItem("user");
  const user = logcheck
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = React.useState(false);
  useEffect(() => {
    retrieveMyTransactions();
  }, [token]);

  const retrieveMyTransactions = () => {
    setIsLoading(true)
    TransactionDataService.getMyTransactions(token, user)
      .then((response) => {
        //console.table(response.data)
        setTransactions(response.data);
        console.table(transactions);
        setIsLoading(false)
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false)
      });
  };

  return (
    <>
      {logcheck == null || logcheck === "" ? (
        <Alert variant="warning">
          You are not logged in. Please <Link to={"/login"}>login</Link> to see
          this page.
        </Alert>
      ) : (
        <div>
          {isLoading ? <LoadingSpinner /> :
          <>
          <h1 className='text-center'><FontAwesomeIcon icon={faCreditCardAlt} /> My Transactions</h1><br/>
          {transactions.map((transaction) => {
            return (
              <Card
                className="text-center mb-3"
                key={transaction.id}
                bg="dark"
                border="secondary"
                text="light"
                
              >
                <Card.Header
                  style={{ backgroundColor: "ThreeDDarkShadow" }} className="ThreeBlindMice"
                ></Card.Header>
                <Card.Body>
                  <div>
                    <Card.Header>
                      <Card.Title>
                        <b>Transaction ID:</b> {transaction.id}
                      </Card.Title>
                    </Card.Header>
                    <br />
                    <ListGroupItem>
                      <Card.Text>
                       <FontAwesomeIcon icon={faMoneyBills} /> <b>Amount:</b> {transaction.amount}
                      </Card.Text>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Card.Text>
                       <FontAwesomeIcon icon={faCheckCircle} /> <b>Approved:</b> {transaction.approved.toString()}
                      </Card.Text>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Card.Text>
                       <FontAwesomeIcon icon={faUserAlt} /> <b>User:</b> {transaction.associated_user}
                      </Card.Text>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Card.Text>
                       <FontAwesomeIcon icon={faSchool} /> <b>Company:</b> {transaction.associated_company}
                      </Card.Text>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Card.Text className="contrib">
                       <FontAwesomeIcon icon={faEdit} /> <b>Type of contribution:</b>{" "}
                        {transaction.type_of_contribution}
                      </Card.Text>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Card.Text>
                       <FontAwesomeIcon icon={faCalendarAlt} /> <b> Last updated:</b>{" "}
                        {moment(transaction.last_updated_date).format(
                          "Do MMMM YYYY"
                        )}
                      </Card.Text>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Card.Text>
                       <FontAwesomeIcon icon={faCalendarCheck} /> <b> Date created:</b>{" "}
                        {moment(transaction.created_date).format(
                          "Do MMMM YYYY"
                        )}
                      </Card.Text>
                    </ListGroupItem>
                  </div>
                  <Link
                    to={{
                      pathname: "/transactions/" + transaction.id,
                      //   state: {
                      //       currentCompany: transaction
                      //   }
                    }}
                  >
                    <br></br>
                    <Button variant="outline-info" className="me-2">
                      Edit
                    </Button>
                  </Link>
                  <Button variant="outline-danger">Delete</Button>
                </Card.Body>
              </Card>
            );
      })}</>}
        </div>
      )}
    </>
  );
};// const TransactionsList = props => {
//     const [transactions, setTransactions] = useState([]);

//     return (
//         <Container>
//             {transactions.map((transaction) => {
//                 return (
//                     <Card key={transaction.id} className="mb-3">
//                         <Card.Body>
//                             <div>
//                                 <Card.Title>{transaction.id}</Card.Title>
//                                 <Card.Text><b>Amount:</b> {transaction.amount}</Card.Text>
                                
//                             </div>
//                             <Link to={{
//                                 pathname: '/transactions/' + transaction.id
//                             }}
//                         </Card.Body>
//                     </Card>
//                 )
//             })}
//         </Container>
//     )
// }



export default MyTransactions