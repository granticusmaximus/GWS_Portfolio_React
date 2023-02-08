import React from 'react'
import head from '../../assets/img/head.png'
import logo from '../../assets/img/logo.png'
import Image from "react-bootstrap/Image"
import pdf from '../../assets/pdf/gwresume.pdf'
import { Row, Col } from "react-bootstrap"

const Header = () => {
  return (
      <article
        className="article"
        style={
          {
            backgroundImage: `url(${head})`,
            width: '100%',
            height: '550px',
            color: 'white',
            paddingBottom: '10px'
          }
        }
      >
        <Image src={logo} width={175} roundedCircle />
        <h3
          style={
            {
              color: 'white',
              backgroundColor: '#5a523e',
              padding: '10px'
            }
          }
        >
          Welcome to my portfolio!
        </h3>
        <h2
          style={
            {
              color: 'white',
              backgroundColor: '#5a523e',
              padding: '9px'
            }
          }
        >
          My name is Grant Watson and I am a software engineer!
        </h2>
        <Row>
          <Col>
            <a href={pdf} 
              rel="noreferrer" 
              target="_blank" 
              className="btn btn-warning"
              style={
                {"width" : "200px"}
              }
            >
                View My Resume
            </a>
          </Col>
          <Col>
            <a href='/projects' 
              rel="noreferrer"
              className="btn btn-warning"
              style={
                {"width" : "200px"}
              }
            >
                View My Portfolio
            </a>
          </Col>
          <Col>
            <a href='/contact' 
              rel="noreferrer"
              className="btn btn-warning"
              style={
                {"width" : "200px"}
              }
            >
                Contact me
            </a>
          </Col>
        </Row>
    </article>
  );
}

export default Header;