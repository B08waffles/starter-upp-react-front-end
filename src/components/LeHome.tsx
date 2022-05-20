import {faHome, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {Col, Container, Image, Row} from 'react-bootstrap';
import {VictoryAxis, VictoryBar,VictoryPie, VictoryChart, VictoryStack, VictoryTheme, VictoryLine, VictoryContainer} from 'victory';
function LeHome() {
  return (
    <>
      <div>
        <h1 className="text-center">
          <FontAwesomeIcon icon={faHome} /> Home
        </h1>
        <h2 className="text-center"><b>Welcome to the next generation of capitlisation systems</b></h2>
        <br />
        <p className="text-center">
          Here you can <a href="/register">create an account</a>, <a href="/addcompany">add your company</a>,{' '}
          <a href="/addtransaction">add transactions</a> for your company and others can do the same! This allows small
          companies and start-ups to easily track things like company ownership, employee's hours worked, money invested,
          total company worth and more, presented in both card/table formats and dynamically rendered charts. If you need help, please click on the <a href = "/help"><FontAwesomeIcon icon={faQuestionCircle}/></a> icon for more information.
          <br/> <a href="/register">Sign up</a> today!
        </p>
      <Row>
        {/* <Col className="text-center"> <Image src={require('../../public/images/kanestudioslogo.png')} style={{minWidth: '250px'}}  /> 
        </Col> */}
        <Col className="text-center"><Image src={require('../../public/images/logo.png')} style={{maxWidth: '450px'}} /></Col>
      </Row>
        {/* <Container className="align-center text-center">
         {' '}
        </Container>
        <p className="text-center">Presents...</p>
        <Container className="align-center text-center">
          <Image src={require('../../public/images/logo.png')} style={{maxWidth: '250px'}} />
        </Container> */}
       
       <br /><br /><br />

        {/* <p className="text-center">Powered by the silk of this particular Golden Orb Weaver Spider...</p>
        <Container className="align-center text-center">
          <Image src={require('../../public/images/goldenorb.png')} style={{maxWidth: '400px'}} />{' '}
        </Container> */}
      </div>
      <br />
      <br />
    </>
  );
}

export default LeHome;
