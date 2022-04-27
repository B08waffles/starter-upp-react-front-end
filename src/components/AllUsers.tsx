import { faCalendarAlt, faList, faUser, faUserAlt, faUserCircle, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Card, Button, Alert, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserDataService from "../services/users";
import LoadingSpinner from "./LoadingSpinner";

const AllUsers = (props: { token: any }) => {
  const [users, setUsers] = useState([]);
  const logcheck = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = React.useState(false)
  useEffect(() => {
    retrieveUsers();
  }, [props.token]);

  const retrieveUsers = () => {
    setIsLoading(true)
    UserDataService.getAll(token)

      .then((response) => {
        //console.table(response.data)
        setUsers(response.data);
        console.table(users);
        setIsLoading(false)
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false)
      });
  };

  return (
    <><h1 className='text-center'><FontAwesomeIcon icon={faList} /> All Users</h1><br/>
      
      {logcheck == null || logcheck === "" ? (
       <> <Alert variant="warning">
          You are not logged in. Please <Link to={"/login"}>login</Link> to see
          this page.
        </Alert> 
        <br style={{marginBottom: "40em"}}/>

        </>
        
      ) : (
      <>  
      {isLoading ? <LoadingSpinner/> :
      <>
      
          {users.map((user) => {
            return (
              <Card className="text-center mb-3" key={user.id} bg='dark' border='secondary' text='light' >
                <Card.Header style={{backgroundColor: "ThreeDDarkShadow"}} className="ThreeBlindMice"></Card.Header>
                <Card.Body>
                  <div>
                    <Card.Header>
                    <Card.Title>
                      <b>User ID:</b> {user.id}
                    </Card.Title>
                    </Card.Header>
                    <br />
                    <ListGroupItem>
                    <Card.Text>
                    <FontAwesomeIcon icon={faUserAlt} /> <b>Username:</b> {user.username}
                    </Card.Text></ListGroupItem>
                    <ListGroupItem><Card.Text>
                     <FontAwesomeIcon icon={faUserCog} /> <b>Is superuser:</b>{" "}
                      {user.is_superuser.toString()}
                    </Card.Text></ListGroupItem>
                    <ListGroupItem><Card.Text>
                    <FontAwesomeIcon icon={faUserCircle} /> <b>First name:</b> {user.first_name}
                    </Card.Text></ListGroupItem>
                    <ListGroupItem><Card.Text>
                    <FontAwesomeIcon icon={faUserCircle} /> <b>Last name:</b> {user.last_name}
                    </Card.Text></ListGroupItem>

                    <ListGroupItem><Card.Text>
                    <FontAwesomeIcon icon={faCalendarAlt} /> <b>Date joined:</b>{" "}
                      {moment(user.date_joined).format(
                        "Do MMMM YYYY"
                      )}
                    </Card.Text></ListGroupItem>
                  </div>
                  <Link
                    to={{
                      pathname: "/users/" + user.id,
                      //   state: {
                      //       currentCompany: user
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
        <br/>
      <br/>
      <br/>
    </>} </> )}
    </>
  );
};

export default AllUsers;
