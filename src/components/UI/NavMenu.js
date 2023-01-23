import React, { useEffect } from "react"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import * as ROUTES from '../constants/routes'
import logo from '../../assets/img/logo.png'
import { Dna } from 'react-loader-spinner'
import { signOut } from "firebase/auth"
import { auth } from "../../services/fb_commands"
import { useAuthState } from "react-firebase-hooks/auth"

const NavMenu = (props) => {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
      if (loading) {
        <Dna
          visible={true}
          height="90"
          width="90"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
        return;
      }
    }, [user, loading]);

  const logout = () => {
      signOut(auth);
  };
  return (
    <>
    {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
      <Navbar
        key={expand}
        fixed="top"
        expand="lg"
        expand={expand} 
        className="mb-3"
        style={{
          maxHeight: '75px',
          backgroundColor: '#94633b',
          borderBottom: '3px solid #000'
        }}
      >
          <Navbar.Brand
              href={ROUTES.HOME}
              style={{
                color: 'white'
              }}>
              <img src={logo} width={75} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                GWS
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link style={{color:'white'}} href={ROUTES.HOME}>
                Home
              </Nav.Link>
              <Nav.Link style={{color:'white'}} href={ROUTES.ABOUT}>
                About
              </Nav.Link>
              <Nav.Link style={{color:'white'}} href={ROUTES.CONTACT}>
                Contact
              </Nav.Link>
              <Nav.Link style={{color:'white'}} href={ROUTES.PROJECTS}>
                Projects
              </Nav.Link>
              <Nav.Link style={{color:'white'}} href={ROUTES.BLOG}>
                Blog
              </Nav.Link>
              {user ? (
                <Nav.Link style={{color:'white'}} href={ROUTES.DASHBOARD}>
                  Dashboard
                </Nav.Link>
              ) : (
                <>
                </>
              )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      ))}
    </>
  );
}

export default NavMenu;