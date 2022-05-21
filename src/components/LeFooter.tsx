import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="text-center" >
      <Container style={{justifyContent: 'center', justifyItems: 'center'}}>
        <footer
          className="bg-white footer"
          id="rumpleboop"
          >
          <div className="container my-auto" id="rumpledoop">
            <div className="text-center my-auto copyright">
              <span>
                Copyleft © STARTER UPP 2022 | Property of Kane Studios Pty Ltd | <a href="/license"> GNU Public License v2.0</a>  | <a href="/legislation"> Privacy Policy</a>
              </span>
            </div>
          </div>
        </footer>
      </Container>
    </Navbar>
  );
}

export default Footer;
