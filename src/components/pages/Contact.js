import React, { useRef } from "react"
import { Container } from "react-bootstrap"
import emailjs from '@emailjs/browser'
import { useNavigate } from "react-router-dom"
import logo from '../../assets/img/logo.png'
import {Helmet} from "react-helmet"
import '../../assets/css/contact.css'

const Contact = () => {
  const form = useRef();

  let navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_libv1nq', 'template_qbxfxzc', form.current, 'QUnmkZs8gBchyu6ck')
      .then((result) => {
        navigate('/thank-you');
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
    <Helmet>
        <title>GWS : Contact</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta property="og:image" content={logo} data-react-helmet="true"/>
        <meta property="og:image:secure_url" content={logo} data-react-helmet="true"/>
     </Helmet>
    <Container>
    <div class="container">
      <div class="row">
        <div class="col align-self-center">
          <div class="sec-title">
            <div class="title">Contact Me</div>
            <p>Use this form to get in contact with Grant Watson if you need to get your business online, you need software updated and modified, or want to send a funny joke.</p>
          </div>
          {/* <!-- contact form --> */}
          <form class="form" ref={form} onSubmit={sendEmail}>
            {/* <!-- name --> */}
            <div class="form-group">
              <label for="fromName">Name</label>
              <input
                type="name"
                name="fromName"
                class="form-control"
                id="fromName"
                placeholder="Enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            {/* <!-- subject --> */}
            <div class="form-group">
              <label for="subject">Phone Number</label>
              <input
                type="phone"
                name="phoneNumber"
                class="form-control"
                id="subject"
                placeholder="Enter a contact number"
              />
            </div>

            <div class="form-group">
              <label for="email_body">Message</label>
              <textarea
                class="form-control"
                id="message"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </Container>
    </>
  );
};

export default Contact;