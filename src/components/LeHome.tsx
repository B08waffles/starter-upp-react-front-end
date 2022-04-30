import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Image } from "react-bootstrap";

function LeHome() {
  return (
    <>
    <div>
      <h1 className="text-center"><FontAwesomeIcon icon={faHome} /> Home</h1>
      <h2 className="text-center">Welcome to Starter Upp - Capitalisation System</h2>
      <p className="text-center">
        Here you can <a href="/register">create an account</a>,{" "}
        <a href="/addcompany">add your company</a>,{" "}
        <a href="/addtransaction">add transactions</a> for your company and
        others can do the same! This allows small companies and start-ups to
        easily track things like member ownership and potential company/user
        value. <a href="/register">Sign up</a> today!
      </p>
      
      <Container className="align-center text-center">
        <Image
          src={require("../../public/images/kanestudioslogo.png")}
          style={{ minWidth: "250px" }}
        />{" "}
       
        
      </Container>
      <p className="text-center">Presents...</p>
      <Container className="align-center text-center">
      <Image
          src={require("../../public/images/logo.png")}
          style={{ maxWidth: "250px" }}
        /></Container>
        <br/>
        <p className="text-center">Powered by the silk of this particular Golden Orb Weaver Spider...</p>
        <Container className="align-center text-center"> 
      <Image
        src={require("../../public/images/goldenorb.png")}
        style={{ maxWidth: "400px" }}
      />{" "}
     </Container>
      
    </div>
    <br/>
    <br/>
    </>
  );
}

export default LeHome;
