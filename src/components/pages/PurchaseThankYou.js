import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../../assets/css/thankyou.css";

class PurchaseThankYou extends Component {
  render() {
    return (
      <Container>
        <br />
        <div className="content">
          <div className="wrapper-1">
            <div className="wrapper-2">
              <h1>Thank you!</h1>
              <p>Thanks for the purchase.</p>
              <p>
                If you have any questions, please email me at
                gwatson117@gmail.com.
              </p>
              <p>I will answer in a timely manner</p>
              <hr />
              <a href="/" class="go-home">
                go home
              </a>
            </div>
          </div>
        </div>
        <br />
      </Container>
    );
  }
}

export default PurchaseThankYou;
