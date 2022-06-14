import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import csharp from '../../assets/img/csharp.png'
import dotnet from '../../assets/img/dotnetcore.png'
import firebase from '../../assets/img/firebase.png'
import java from '../../assets/img/java.png'
import js from '../../assets/img/jslogo.png'
import node from '../../assets/img/nodejs.png'
import php from '../../assets/img/php.png'
import python from '../../assets/img/python.png'
import reactIMG from '../../assets/img/react.png'

class ImageGrid extends Component {
  render() {
    return (
      <Row>
        <Col>
          <img src={csharp} width={50} />
        </Col>
        <Col>
          <img src={dotnet} width={50} />
        </Col>
        <Col>
          <img src={firebase} width={50}/>
        </Col>
        <Col>
          <img src={java} width={50}/>
        </Col>
        <Col>
          <img src={js} width={50} />
        </Col>
        <Col>
          <img src={node} width={50} />
        </Col>
        <Col>
          <img src={php} width={50} />
        </Col>
        <Col>
          <img src={python} width={50} />
        </Col>
        <Col>
          <img src={reactIMG} width={50} />
        </Col>
      </Row>
    );
  }
}

export default ImageGrid;