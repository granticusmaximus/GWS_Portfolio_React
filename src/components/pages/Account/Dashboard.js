import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import SideBar from "../../UI/Sidebar";

function Dashboard() {
  return (
    <>
      <br />
      <br />
      <SideBar />
      <Container>
        <div className="content">
          <Row>
            <Col>
              <h2>Dashboard</h2>
              <div className="dashboard__container">
                <Row>
                  <div className="col-md-4">
                    <div className="portfolioCard">
                      <div className="portfolioCard-content">
                        <Card.Body>
                          <Card.Title>
                            Click the below link to view and add to a todo list
                          </Card.Title>
                          <hr />
                          <a href="/todo" className="btn btn-success">
                            View ToDo List
                          </a>
                        </Card.Body>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="portfolioCard">
                      <div className="portfolioCard-content">
                        <Card.Body>
                          <Card.Title>
                            Click the below link to view and add to your notes
                          </Card.Title>
                          <hr />
                          <a href="/notes" className="btn btn-success">
                            View Notes List
                          </a>
                        </Card.Body>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="portfolioCard">
                      <div className="portfolioCard-content">
                        <Card.Body>
                          <Card.Title>
                            Click the link below to create a new post
                          </Card.Title>
                          <hr />
                          <a href="/create-article" className="btn btn-success">
                            Create New Article
                          </a>
                        </Card.Body>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
