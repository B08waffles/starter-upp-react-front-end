import {faHandHolding} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {Col, Container, Row, Card, Accordion} from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

export default function Helper() {
  return (
    <><aside><a href="/legislation">Privacy Policy</a></aside>
      <h1 className="text-center">
        <FontAwesomeIcon icon={faHandHolding} /> Helpful Information
      </h1>
      <br />
      <Container fluid>
        <Row className="text-center">
          <Col>
            <h2 id="beans">For Employers</h2>
            <p className="rice">
              This application intends to replace/substitute spreadsheets for dynamically rendered tables, cards and
              charts to keep track of company ownership, total worth and more. All stakeholders associated with your
              company may input their transactions as either money invested or hours work and this data will be
              represented in a multitude of ways, automatically.
            </p>
          </Col>
          <Col>
            <h2 id="beans">For Employees</h2>
            <p className="rice">
              This application allows you to make a "transaction" for your associated company and view the resulting
              totals of yor own contribitions and in relation to all other stakeholders associated with your
              company/companies. You may choose to input "money invested" or "hours worked" type transactions and we
              will do the rest of the calculations for you!
            </p>
          </Col>
        </Row>
      </Container>
      <br />
      <Container fluid>
      <p className="text-center">Regardless of the type of user you are, here is how to use this application:</p>
      <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Step 1. Create Account</Accordion.Header>
    <Accordion.Body>
    Create an account for yourself by inputting a username and password. Usernames must be unique and
                contain at least 3 characters of any type. Passwords must be 8 characters long and contain at least 1
                capital, 1 special character and 1 number The email, first name and last name fields are optional but
                are welcomed additions if you choose to add them as the more data we have to work with the more ways we
                can show that data back to you.
                <br />
                <br />
                You can sign up <a href="/register">here.</a>
                <br />
                If you already have an account, please <a href="/login">login.</a>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Step 2. Create Company</Accordion.Header>
    <Accordion.Body>
    If you already have your company in our database you can skip this step, otherwise:
                <br />
                <br />
                Create a Company by inputting a name and slogan for your business. Company names must be at least 3
                characters long and Company slogans must have at least 5 characters. Additionaly, the name of the
                company must be unique.
                <br />
                <br />
                You can create a Company <a href="/addcompany">here.</a>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Step 3. Create Transaction</Accordion.Header>
    <Accordion.Body>
    You can create a Transaction by selecting from the drop down menu your chosen company, choosing a type
                of contribition and inputting an amount. Your username is automatically assigned to the transaction as a
                logged in user.
                <br/><br/>
                You can create a transaction <a href="/addtransaction">here.</a>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Step 4. View the data</Accordion.Header>
    <Accordion.Body>
    Finally, the whole point of this application will become apparent when you view the various charts,
                tables and cards that are presented based on your data and the data of others for a given company.
                
                You can view the data by clicking on the hamburger menu on the top right of the screen and following the provided links.
                
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        {/* <Row className="text-center">
          <p className="text-center">Regardless of the type of user you are, here is how to use this application:</p>
          <Col>
            <Card>
              <Card.Header>Step 1. Create Account</Card.Header>
              <Card.Body>
                Create an account for yourself by inputting a username and password. Usernames must be unique and
                contain at least 3 characters of any type. Passwords must be 8 characters long and contain at least 1
                capital, 1 special character and 1 number The email, first name and last name fields are optional but
                are welcomed additions if you choose to add them as the more data we have to work with the more ways we
                can show that data back to you.
                <br />
                <br />
                You can sign up <a href="/register">here.</a>
                <br />
                If you already have an account, please <a href="/login">login.</a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Step 2. Create Company</Card.Header>
              <Card.Body>
                If you already have your company in our database you can skip this step, otherwise:
                <br />
                <br />
                Create a Company by inputting a name and slogan for your business. Company names must be at least 3
                characters long and Company slogans must have at least 5 characters. Additionaly, the name of the
                company must be unique.
                <br />
                <br />
                You can create a Company <a href="/addcompany">here.</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row className="text-center">
          <Col>
            <Card>
              <Card.Header>Step 3. Create Transaction</Card.Header>
              <Card.Body>
                You can create a Transaction by selecting from the drop down menu your chosen company, choosing a type
                of contribition and inputting an amount. Your username is automatically assigned to the transaction as a
                logged in user.
                <br/><br/>
                You can create a transaction <a href="/addtransaction">here.</a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Step 4. View the data</Card.Header>
              <Card.Body>
                Finally, the whole point of this application will become apparent when you view the various charts,
                tables and cards that are presented based on your data and the data of others for a given company.
                
                You can view the data by clicking on the hamburger menu on the top right of the screen and following the provided links.
                
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </Container>
<br/><br/>
      <h1 className="text-center">Something not right?</h1>
      <p className="rice" style={{textAlign: "center"}}>In the case that something is not working as expected, please don't hesitate to contact the administrater at b08waffles@protonmail.com</p>
    </>
  );
}
