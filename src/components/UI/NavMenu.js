import React from 'react'
import { useState, useEffect } from 'react'
import { AuthProvider } from '../../firebase/AuthContext'
import { auth } from '../../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { Nav, Navbar, Container } from 'react-bootstrap'
import * as ROUTES from '../constants/routes'
import NavButton from './NavButton'

function NavMenu() {
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <div>
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <Navbar
          fixed="top"
          expand="lg"
          style={{
            maxHeight: '75px',
            backgroundColor: '#94633b',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
            borderBottom: '3px solid #000'
          }}
        >
          <Container fluid>
            <Navbar.Brand
              href={ROUTES.HOME}
              style={{
                color: 'white'
              }}>
              GWS
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link
                  href={ROUTES.HOME}
                  style={{
                    color: 'white',
                    fontSize: '15px'
                  }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href={ROUTES.ABOUT}
                  style={{
                    color: 'white',
                    fontSize: '15px'
                  }}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  href={ROUTES.CONTACT}
                  style={{
                    color: 'white',
                    fontSize: '15px'
                  }}
                >
                  Contact
                </Nav.Link>
                <Nav.Link
                  href={ROUTES.PROJECTS}
                  style={{
                    color: 'white',
                    fontSize: '15px'
                  }}
                >
                  Projects
                </Nav.Link>
                <Nav.Link
                  href={ROUTES.BLOG}
                  style={{
                    color: 'white',
                    fontSize: '15px'
                  }}
                >
                  Blog
                </Nav.Link>
              </Nav>
              <Nav>
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                    <NavButton />
                  </Navbar.Text>
                </Navbar.Collapse>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </AuthProvider>
    </div>
  );
}

export default NavMenu;