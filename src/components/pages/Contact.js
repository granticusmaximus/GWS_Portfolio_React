import React, { useRef } from "react"
import { Card, Container } from "react-bootstrap"
import emailjs from '@emailjs/browser'
import { useNavigate } from "react-router-dom"

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
    <Container>
      <center>
        <div className='bigContainer'>
          <hr />
          <div className="getStartedCard">
            <div className="getStarted-header">
              <center>
                <h2>Contact Form</h2>
                <p>Use this form to get in contact with Grant Watson if you need to get your business online, you need software updated and modified, or want to send a funny joke.</p>
              </center>
            </div>
            <Card.Body>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    className="contactInput"
                    required
                  />
                </div>
                <div className="mb-3 pt-0">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="contactInput"
                    required
                  />
                </div>
                <div className="mb-3 pt-0">
                  <textarea
                    placeholder="Your message"
                    name="message"
                    className="contactInput"
                    required
                  />
                </div>
                <div className="mb-3 pt-0">
                  <button
                    className="btn btn-success"
                    type="submit"
                  >
                    Send a message
                  </button>
                </div>
              </form>
            </Card.Body>
          </div>
        </div>
      </center>
    </Container>

  );
};

export default Contact;