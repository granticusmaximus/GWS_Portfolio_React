import React, { Component } from 'react';
import head from '../../assets/img/head.png';
import logo from '../../assets/img/logo.png'
import Image from "react-bootstrap/Image"
import pdf from '../../assets/pdf/gwresume.pdf'

class Header extends Component {
  render() {
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
          Welcome to my website!
        </h3>
        <h2
          style={
            {
              color: 'white',
              backgroundColor: '#5a523e',
              padding: '10px'
            }
          }
        >
          If you have not guessed it, my name is Grant Watson and I am a freelance software engineer for hire. To see my resume:
        </h2>
        <a href={pdf} rel="noreferrer" target="_blank" className="btn btn-primary">Click Here</a>
    </article>
    );
  }
}

export default Header;