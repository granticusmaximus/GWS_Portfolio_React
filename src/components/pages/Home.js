import { Row, Col, Card, Container } from "react-bootstrap";
import ux from "../../assets/img/ux.jpeg";
import webdev from "../../assets/img/webdev.jpeg";
import webhost from "../../assets/img/webhost.jpeg";
import softwareDev from "../../assets/img/SoftwareDeveloper.jpeg";
import ImageGrid from "../UI/ProgImgGrid";
import Header from "../UI/Header";
import logo from "../../assets/img/logo.png";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>GWS : Home</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta property="og:image" content={logo} data-react-helmet="true" />
        <meta
          property="og:image:secure_url"
          content={logo}
          data-react-helmet="true"
        />
      </Helmet>
      <center>
        <br />
        <br />
        <Header />
        <div className="HomePage">
          <div className="jumbotron jumbotron-fluid">
            <h4 style={{ color: "white" }}>
              I am on Upwork as well! If you have a project that you wish for me
              to start working on through UpWork,&nbsp;
              <a
                href="https://www.upwork.com/freelancers/~017cb997c760da76e7"
                className="btn btn-dark"
                rel="noreferrer"
                target="_blank"
              >
                hire me
              </a>
              &nbsp;there!
            </h4>
          </div>
          <br />
          <h1>What I bring to the table!</h1>
          <center>
            <Container>
              <Row>
                <Col>
                  <div className="portfolioCard">
                    <Card.Img variant="top" src={ux} />
                    <Card.Body></Card.Body>
                  </div>
                </Col>
                <Col>
                  <div className="portfolioCard">
                    <Card.Img variant="top" src={webdev} />
                    <Card.Body></Card.Body>
                  </div>
                </Col>
                <Col>
                  <div className="portfolioCard">
                    <Card.Img variant="top" src={webhost} />
                    <Card.Body></Card.Body>
                  </div>
                </Col>
              </Row>
            </Container>
          </center>
          <br />
          <br />
          <br />
          <br />
          <div className="jumbotron jumbotron-fluid">
            <h4 style={{ color: "white" }}>
              <p>
                To view my projects on Github, click{" "}
                <a
                  href="https://github.com/granticusmaximus"
                  className="btn btn-outline-warning"
                  rel="noreferrer"
                  target="_blank"
                >
                  here
                </a>
              </p>
            </h4>
          </div>
          <Container>
            <Row>
              <Col>
                <img
                  className="image"
                  src={softwareDev}
                  height={400}
                  width={500}
                />
                <p className="para">
                  It all begins with an idea. Maybe you want to launch a
                  business. Maybe you want to turn a hobby into something more.
                  Or maybe you have a creative project to share with the world.
                  Whatever it is, the way you tell your story online can make
                  all the difference. I am passionate about building better
                  technology. My job is to get you the web app, desktop app, or
                  mobile app of your dreams so that you can start building your
                  business. I am here to listen to you, hear your dreams and
                  ideas, and build them into your dynasty.
                </p>
                <a href="/contact" className="btn btn-warning">
                  Get Online Today!
                </a>
              </Col>
            </Row>
          </Container>
          <hr />

          <div className="jumbotron jumbotron-fluid">
            <h3 style={{ color: "white" }}>Languages I have worked with.</h3>
          </div>
          <Container>
            <ImageGrid />
          </Container>
          <hr />
        </div>
      </center>
    </>
  );
}
