import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Image} from 'react-bootstrap';

import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faAdd,
  faChartBar,
  faChartPie,
  faCreditCard,
  faHome,
  faList,
  faList12,
  faListAlt,
  faPencil,
  faPencilAlt,
  faPlusCircle,
  faSun,
  faUser,
  faUserAlt,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import {LinkContainer} from 'react-router-bootstrap';

function LeNavBar() {
  const logcheck = localStorage.getItem('user');
  const refreshpage = () => {
    window.location.reload();
  };
  let navigate = useNavigate();
  function logout() {
    localStorage.setItem('user', '');
    localStorage.setItem('token', '');
    navigate('/home');
    refreshpage();
    return;
  }

  return (
    <div className="iAmTheNavBar">
      
      <Navbar bg="dark" expand="sl" collapseOnSelect variant="dark" className="text-center">
        <Container>
          <Image src={require('../../public/images/logo.png')} style={{maxWidth: '80px'}} />
          
          <Navbar.Brand as={Link} to="/">
            <b>STARTER UPP</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link as={Link} to="/" className="nav-link" active={false}>
                  <FontAwesomeIcon icon={faHome} /> Home
                </Nav.Link>
              </LinkContainer>

              {logcheck ? (
                <>
                  <LinkContainer to="/addtransaction">
                    <Nav.Link as={Link} to="/addtransaction" active={false}>
                      <FontAwesomeIcon icon={faPlusCircle} /> Add Transaction
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/addcompany">
                    <Nav.Link as={Link} to="/addcompany" active={false}>
                      <FontAwesomeIcon icon={faPencilAlt} /> Create Company
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/mytransactions">
                    <Nav.Link as={Link} to="/mytransactions" active={false}>
                      <FontAwesomeIcon icon={faCreditCard} /> My Contributions
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/charts">
                    <Nav.Link as={Link} to="/" className="nav-link" active={false}>
                      <FontAwesomeIcon icon={faChartBar} />  My Transactions
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/companyownership">
                    <Nav.Link as={Link} to="/companyownership" active={false}>
                      <FontAwesomeIcon icon={faChartPie} /> Company Ownership
                    </Nav.Link>
                  </LinkContainer>
                  {/* <LinkContainer to="/mycompanies">
                <Nav.Link as={Link} to="/mycompanies" active={false}>
                  My Companies
                </Nav.Link>
              </LinkContainer> */}
                  <LinkContainer to="/allusers">
                    <Nav.Link as={Link} to="/allusers" active={false}>
                      <FontAwesomeIcon icon={faList} /> Users
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/alltransactions">
                    <Nav.Link as={Link} to="/alltransactions" active={false}>
                      <FontAwesomeIcon icon={faList12} /> Transactions
                    </Nav.Link>
                  </LinkContainer>
                  
                  <LinkContainer to="/allcompanies">
                    <Nav.Link as={Link} to="/allcompanies" active={false}>
                      <FontAwesomeIcon icon={faListAlt} /> Companies
                    </Nav.Link>
                  </LinkContainer>
                </>
              ) : (
                <></>
              )}

              <NavDropdown.Divider />
              <LinkContainer to="/settings">
                <Nav.Link href="/settings" active={false}>
                  <FontAwesomeIcon icon={faSun} /> Settings
                </Nav.Link>
              </LinkContainer>
              {logcheck ? (
                <Link className="nav-link" onClick={logout} to={'/home'}>
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
