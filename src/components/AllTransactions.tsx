import {
  faCalendarAlt,
  faCalendarCheck,
  faCheckCircle,
  faEdit,
  faList12,
  faMoneyBills,
  faQuestionCircle,
  faSchool,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Alert, Button, Card, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import TransactionDataService from "../services/transaction";
import LoadingSpinner from "./LoadingSpinner";

const AllTransactions = (props: { token: string }) => {
  const [transactions, setTransactions] = useState([]);
  const logcheck = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = React.useState(false);
  useEffect(() => {
    retrieveTransactions();
  }, [token]);

  const retrieveTransactions = () => {
    setIsLoading(true);
    TransactionDataService.getAll(token)
      .then((response) => {
        //console.table(response.data)
        setTransactions(response.data);
        console.table(transactions);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <><aside><a href = "/help"><FontAwesomeIcon icon={faQuestionCircle}/></a></aside>
          <h1 className="text-center">
            <FontAwesomeIcon icon={faList12} /> All Contributions
          </h1>
          <br />
          {logcheck == null || logcheck === "" ? (<>
            <Alert variant="warning">
              You are not logged in. Please <Link to={"/login"}>login</Link> to
              see this page.
            </Alert>
            <br style={{marginBottom: "40em"}}/>
            </>
          ) : (
            <div>
              {transactions.map((transaction) => {
                return (
                  <Card
                    className="text-center mb-3"
                    key={transaction.id}
                    bg="dark"
                    border="secondary"
                    text="light"
                  >
                    <Card.Header className="ThreeBlindMice"
                      style={{ backgroundColor: "ThreeDDarkShadow" }}
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
                            <FontAwesomeIcon icon={faMoneyBills} />{" "}
                            <b>Amount:</b> {transaction.amount}
                          </Card.Text>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Card.Text>
                            <FontAwesomeIcon icon={faCheckCircle} />{" "}
                            <b>Approved:</b> {transaction.approved.toString()}
                          </Card.Text>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Card.Text>
                            <FontAwesomeIcon icon={faUserAlt} /> <b>User:</b>{" "}
                            {transaction.associated_user}
                          </Card.Text>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Card.Text>
                            <FontAwesomeIcon icon={faSchool} /> <b>Company:</b>{" "}
                            {transaction.associated_company}
                          </Card.Text>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Card.Text className="contrib">
                            <FontAwesomeIcon icon={faEdit} />{" "}
                            <b>Type of contribution:</b>{" "}
                            {transaction.type_of_contribution}
                          </Card.Text>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Card.Text>
                            <FontAwesomeIcon icon={faCalendarAlt} />{" "}
                            <b> Last updated:</b>{" "}
                            {moment(transaction.last_updated_date).format(
                              "Do MMMM YYYY"
                            )}
                          </Card.Text>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Card.Text>
                            <FontAwesomeIcon icon={faCalendarCheck} />{" "}
                            <b> Date created:</b>{" "}
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
              })}
         
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AllTransactions;
