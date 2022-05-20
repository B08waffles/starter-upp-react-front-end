import React from "react";
import { Navbar, Container } from "react-bootstrap";

function Footer() {
  return (
    <Navbar bg="dark" expand="lg"  variant="dark" className="text-center">
      <Container style={{justifyContent: 'center', justifyItems: 'center'}}>
        <footer
          className="bg-white order-last footer" id="rumpleboop"
          style={{
            backgroundColor:
              "linear-gradient(rgb(30,40,51), var(--bs-gray-800)), rgb(30, 40, 51)",
              alignContent: "center",
              justifyContent: "center",
              justifySelf: "center"
          }}
        >
          <div className="container my-auto" id="rumpledoop">
            <div className="text-center my-auto copyright">
              <span>
                Copyleft © STARTER UPP 2022 | Property of Kane Studios Pty Ltd |
                GNU Public License v2.0 | <a href="/legislation">Privacy Policy</a>
              </span>
            </div>
          </div>
        </footer>
      </Container>
    </Navbar>
  );
}

export default Footer;
