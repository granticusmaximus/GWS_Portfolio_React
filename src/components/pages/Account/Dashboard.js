import React from "react";
import { Col, Row, Card } from "react-bootstrap";

function Dashboard() {
    return (
        <>
            <Row>
                <Col>
                    <div className='container'>
                        <h2>Dashboard</h2>
                        <div className="dashboard__container">
                            <div className='col-md-4'>
                                <div className='portfolioCard'>
                                    <div className='portfolioCard-content'>
                                        <Card.Body>
                                            <Card.Title>
                                                Click the below link to view, add and edit notes
                                            </Card.Title>
                                            <hr />
                                            <Card.Link className='btn btn-success' href="/notes">View all notes</Card.Link>&nbsp;
                                            <Card.Link className='btn btn-success' href="/create-note">Add a note</Card.Link>
                                        </Card.Body>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Dashboard;