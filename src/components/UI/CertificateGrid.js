import React, { Component } from 'react'
import { ImageViewer } from "react-image-viewer-dv"
import { Row, Col } from 'react-bootstrap'
import ancbc from '../../assets/img/ASPNETCoreBootcamp.jpg'
import csharpBasics from '../../assets/img/CSharpBasics.jpeg'
import csharFund from '../../assets/img/CSharpFundamentals.jpeg'
import mvc from '../../assets/img/MVCPattern.jpeg'
import reactCourse from '../../assets/img/ReactJSCourse.jpeg'

class CertificateGrid extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <ImageViewer>
              <img src={ancbc} width={400}/>
            </ImageViewer>
            <ImageViewer>
              <img src={csharpBasics} width={400}/>
            </ImageViewer>
          </Col>
          <Col>
            <ImageViewer>
              <img src={csharFund} width={400}/>
            </ImageViewer>
            <ImageViewer>
              <img src={mvc} width={400}/>
            </ImageViewer>
            
          </Col>
        </Row>
        <Row>
          <ImageViewer>
                <img src={reactCourse} width={1050}/>
          </ImageViewer>
        </Row>
      </div>
    );
  }
}

export default CertificateGrid;