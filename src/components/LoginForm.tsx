import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm(props: {
  login: (arg0: { username: string; password: string }) => void;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e: { target: { value: any } }) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangePassword = (e: { target: { value: any } }) => {
    const password = e.target.value;
    setPassword(password);
  };
  const refreshpage = () => {
    window.location.reload();
  };
  let navigate = useNavigate();
  function login() {
    props.login({ username: username, password: password });
    navigate("/home");
    return;
  }

  return (
    <div>
      
      <Card className="mb-3 text-center" bg="dark" border="secondary" text="light" body>
        <Form  onSubmit={login}>
          <h1 className="text-center">Login</h1>
          <br></br>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              style={{textAlign: "center"}}
              value={username}
              onChange={onChangeUsername}
              required
              onSubmit={login}
              pattern=".{4,55}" title="Four or more characters"
            />
            <Form.Text className="text-muted">
              Please enter your username.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              style={{textAlign: "center"}}
              onChange={onChangePassword}
              required
              onSubmit={login}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,55}"
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
            <Form.Text className="text-muted">Forgot your password?</Form.Text>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group> */}
          <br/>
          <Container className="align-center text-center">
          <Button variant="primary" type="submit" style={{minWidth: "22em"}}>
            Submit
          </Button></Container>
        </Form>
      </Card>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default LoginForm;
