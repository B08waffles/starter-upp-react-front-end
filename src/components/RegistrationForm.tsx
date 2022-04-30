import { faEnvelope, faEyeSlash, faPaperPlane, faUserAlt, faUserCircle, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import UserDataService from "../services/users";

const RegistrationForm = (props: {
  signup: (arg0: {
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    email: string;
  }) => void;
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");

  // const logcheck = localStorage.getItem("user");
  // const token = JSON.stringify(localStorage.getItem("token"));

  const onChangeUsername = (e: { target: { value: any } }) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e: { target: { value: any } }) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangeFirstname = (e: { target: { value: any } }) => {
    const firstname = e.target.value;
    setFirstname(firstname);
  };

  const onChangeLastname = (e: { target: { value: any } }) => {
    const lastname = e.target.value;
    setLastname(lastname);
  };

  const onChangePassword = (e: { target: { value: any } }) => {
    const password = e.target.value;
    setPassword(password);
  };

  const signup = () => {
    props.signup({
      username: username,
      password: password,
      email: email,
      first_name: firstname,
      last_name: lastname,
    });
    //navigate('/home');
  };
  // const addUser = () => {
  //   var data = JSON.stringify({
  //         username: username,
  //         email: email,
  //         first_name: firstname,
  //         last_name: lastname,
  //         password: password
  //       });
  //   UserDataService.createUser(data)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((e) => {
  //       console.log(data);
  //       console.log(e);
  //     });
  // };
  return (
    <div>
      <Card className="mb-3 text-center" bg="dark" border="secondary" text="light" body>
        <Form  onSubmit={signup}>
          <h1 className="text-center">
          <FontAwesomeIcon icon={faUserEdit} /> Registration</h1>
          <br></br>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label><FontAwesomeIcon icon={faUserAlt} /> Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              style={{textAlign: "center"}}
              onChange={onChangeUsername}
              pattern=".{4,}"
              title="Four or more characters"
              required
            />
            <Form.Text className="text-muted">
              Must be a unique username.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><FontAwesomeIcon icon={faEnvelope} /> Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              style={{textAlign: "center"}}
              onChange={onChangeEmail}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              title="Must be a valid email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label> <FontAwesomeIcon icon={faUserCircle} /> First Name - optional</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name (optional)"
              value={firstname}
              style={{textAlign: "center"}}
              onChange={onChangeFirstname}
              pattern="[A-Za-z]{,25}"
            />
            <Form.Text className="text-muted">Optional field</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label> <FontAwesomeIcon icon={faUserCircle} /> Last Name - optional</Form.Label>
            <Form.Control
              type="textt"
              placeholder="Enter last name (optional)"
              value={lastname}
              style={{textAlign: "center"}}
              onChange={onChangeLastname}
              pattern="[A-Za-z]{,25}"
            />
            <Form.Text className="text-muted">Optional field</Form.Text>
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>

          <Form.Control type="password" placeholder="Enter Password" />
          <Form.Text className="text-muted">
            Must have 8 characters with at least 1 capital and 1 special
            character
          </Form.Text>
        </Form.Group> */}

          <Form.Group className="mb-3 text-center" controlId="formBasicConfirmPassword">
            <Form.Label> <FontAwesomeIcon icon={faEyeSlash} /> Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={password}
              style={{textAlign: "center"}}
              onChange={onChangePassword}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
            <Form.Text className="text-muted">
              Must be a strong password
            </Form.Text>
          </Form.Group>
          <br />
          <Container className="align-center text-center">
          <Button variant="primary" type="submit" className="text-center"
          style={{minWidth: "15em"}}>
           <FontAwesomeIcon icon={faPaperPlane} /> Submit
          </Button></Container>
        </Form>
      </Card>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default RegistrationForm;
