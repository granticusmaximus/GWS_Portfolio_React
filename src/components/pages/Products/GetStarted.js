import React, { useRef } from "react"
import { Card, Container } from "react-bootstrap"
import emailjs from '@emailjs/browser'
import { useNavigate } from "react-router-dom"
import hosting from '../../../assets/img/hostingwithlogo.jpg'

const GetStarted = () => {
    const form = useRef();
    let navigate = useNavigate();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_libv1nq', 'template_4pgu1ll', form.current, 'QUnmkZs8gBchyu6ck')
            .then((result) => {
                navigate('/host-subscription');
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Container>
            <center>
                <div className='bigContainer'>
                    <br />
                    <hr />
                    <div className="getStartedCard">
                        <div className="getStarted-header">
                            <center>
                                <h2>Do you have a domain name, but no where to host it?</h2>
                                <center><img src={hosting} alt="Website hosting" /></center>
                                <p>
                                    Every business should know the importance of having an online presence.
                                    And every business deserves top notch hosting for not that much a month.
                                    $10 a month is a great deal to get your website online today!
                                </p>

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
                                        placeholder="Please describe the project to me, as well as if you have a domain name I can help you with. If not, I can help you get set up with your own domain"
                                        name="message"
                                        className="contactInput"
                                        rows="10"
                                        required
                                    />
                                </div>
                                <div className="mb-3 pt-0">
                                    <button
                                        className="btn btn-warning"
                                        type="submit"
                                    >
                                        Get started with monthly hosting
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

export default GetStarted;