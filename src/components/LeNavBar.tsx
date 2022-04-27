import React from "react";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faCreditCard, faHome, faList, faList12, faListAlt, faPencil, faPencilAlt, faSun, faUser, faUserAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons";

function LeNavBar() {
  const logcheck = localStorage.getItem("user");
  const refreshpage = () => {
    window.location.reload();
  };
  let navigate = useNavigate();
  function logout() {
    localStorage.setItem("user", "");
    localStorage.setItem("token", "");
    navigate("/home");
    refreshpage();
    return;
  }

  return (
    <div>
      <Navbar
        bg="dark"
        expand="sl"
        collapseOnSelect
        variant="dark"
        className="text-center"
      >
        <Container>
          <Image
            src={require("../../public/images/logo.png")}
            style={{ maxWidth: "80px" }}
          />
          <Navbar.Brand as={Link} to="/">
            ***STARTER UPP***
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link as={Link} to="/" className="nav-link" active={false}>
                <FontAwesomeIcon icon={faHome} /> Home
                </Nav.Link>
              </LinkContainer>
              { logcheck ? ( <>
              <LinkContainer to="/addtransaction">
                <Nav.Link as={Link} to="/addtransaction" active={false}>
                  <FontAwesomeIcon icon={faPencil} /> Add Transaction
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/addcompany">
                <Nav.Link as={Link} to="/addcompany" active={false}>
                  <FontAwesomeIcon icon={faPencilAlt} /> Add Company
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/mytransactions">
                <Nav.Link as={Link} to="/mytransactions" active={false}>
                  <FontAwesomeIcon icon={faCreditCard} /> My Transactions
                </Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="/mycompanies">
                <Nav.Link as={Link} to="/mycompanies" active={false}>
                  My Companies
                </Nav.Link>
              </LinkContainer> */}
              <LinkContainer to="/allusers">
                <Nav.Link as={Link} to="/allusers" active={false}>
                  <FontAwesomeIcon icon={faList} /> All Users
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/alltransactions">
                <Nav.Link as={Link} to="/alltransactions" active={false}>
                <FontAwesomeIcon icon={faList12} /> All Transactions
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/allcompanies">
                <Nav.Link as={Link} to="/allcompanies" active={false}>
                <FontAwesomeIcon icon={faListAlt} /> All Companies
                </Nav.Link>
              </LinkContainer>
              
              </>) : (
                <>
                </>
              )}
              

              <NavDropdown.Divider />
              <LinkContainer to="/settings">
                <Nav.Link href="/settings" active={false}>
                <FontAwesomeIcon icon={faSun} /> Settings
                </Nav.Link>
              </LinkContainer>
              {logcheck ? (
                <Link className="nav-link" onClick={logout} to={"/home"}>
                <FontAwesomeIcon icon={faUser} /> Logout ({logcheck})
                </Link>
              ) : (
                <>
                  <LinkContainer to="login">
                    <Nav.Link as={Link} to="/login" active={false}>
                    <FontAwesomeIcon icon={faUserAlt} /> Login
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/register">
                    <Nav.Link as={Link} to="/register" active={false}>
                    <FontAwesomeIcon icon={faUserEdit} /> Sign up
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default LeNavBar;