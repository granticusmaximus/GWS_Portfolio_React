import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import pdf from '../../assets/pdf/gwresume.pdf'
import aboutPic from '../../assets/img/grantnwife.jpeg'
import CertificateGrid from '../UI/CertificateGrid';
import { ImageViewer } from "react-image-viewer-dv"


class About extends Component {
  render() {
    return (
      <div>
        <center>
          <br/>
          <hr/>
          <center>
            <h1>
              About Grant Watson 
            </h1>
            <a href={pdf} rel="noreferrer" target="_blank" className="btn btn-outline-primary">Click here to view my resume</a>
          </center>
          <hr />
          <Container>
            <Row>
              <Col>
                <p>
                  I started my journey as a software engineer while I was working at Wayne Reaves Software in Macon, GA as a call center representative for the web development staff. At the time,
                  there were three individuals that worked the phones, and I was one of them.We trained our clients on how to utilize the software we provided to upload vehicles to their site and 
                  how to market their vehicles to the public.The jobs of myself and the two other individuals transformed into a position that not only allowed us to work with customers to train, 
                  but our clients began asking us to go past the provided templates for their sites, and create them custom websites.My team divided workloads between each of us so that we could 
                  maintain happy clients and products; but this pushed me to realize that I had a skill of working in web design and simple development. At the time of my employment with the company, 
                  I was currently enrolled to get my Bachelor’s but I had no declared major. I turned my attention to the information technology track with concentrations in software development 
                  and security. With determination I got my degree from Middle Georgia State University in the summer of 2018. It was the prior summer in 2017 that one of my coworkers from Wayne
                  Reaves reached out and asked about how my degree was coming. We talked over Facebook Messenger for a while letting him know what I was majoring in and when I was appraised to 
                  graduate. Luckily his company was looking to bring on a developer. I interviewed and got the job, with of course the stipulation of graduating. This started my career as a full
                  stack developer. If you wish to see my full CV, click the link below. I have also provided some of the many certificates I have from continuing education with Udemy. I am also
                  certified with CompTIA Security+, and if you wish to verify my certification there, I can provide you my cert number.
                </p>
              </Col>
              <Col>
                <ImageViewer>
                  <img src={aboutPic} width={400} />
                </ImageViewer>
              </Col>
            </Row>
          </Container>
          <Row>
            <div className='jumbotron jumbotron-fluid'>
              <h3 style={{ color: 'white' }}>
                Certifications
              </h3>
              <p>
                <b style={{ color: 'white' }}>
                  Below are a few of the certificates I have earned. I continue my education, even after I have my degree.
                </b>
              </p>
            </div> 
            <Container>
              <CertificateGrid />
            </Container>
          </Row>
        </center>
      </div>
    );
  }
}

export default About;