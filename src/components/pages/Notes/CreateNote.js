import React, { useState } from "react"
import DatePicker from "react-datepicker"
import {Container, Row, Col} from 'react-bootstrap'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { db } from "../../../services/fb_commands"
import { collection, addDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css"

const CreateNote = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const addNote = async (e) => {
        e.preventDefault();  
       
        try {
            const docRef = await addDoc(collection(db, "/notes"), {
              title,
              category,
              content,
              startDate  
            });
            console.log("Document written with ID: ", docRef.id);
            navigate("/notes");
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    const goToList = async (e) => {
        e.preventDefault();  
        navigate("/notes");
    }

  return (
    <Container>
        <br/>
        <center>
            <h2>
                Create a New Note
            </h2>
            <button
                    className="btn btn-warning"
                    onClick={goToList}
                >
                      Back to All Notes
            </button>
            <Form>
                <FormGroup>
                    <Row>
                        <Col>
                            <p>
                                <Label>Create a name/title for note:</Label>
                                <Input
                                    type="text" 
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Please Enter A Title" 
                                />
                            </p>
                        </Col>
                        <Col>
                            <p>
                                <Label>Date Created:</Label>
                                <DatePicker 
                                    selected={startDate} 
                                    onChange={(date:Date) => setStartDate(date)} 
                                />
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                                type="text" 
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                placeholder="Add Category(s)" 
                            />
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <Input
                                name="content"
                                style={{ height: 200 }}
                                type="textarea"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Content goes here..."
                            />
                        </Col>
                    </Row>
                        
                </FormGroup>
                <hr/>
                <button
                    className="btn btn-primary"
                    onClick={addNote}
                >
                      Create Note
                </button>
            </Form>
        </center>
        <br/>
        <br/>
        <br/>
    </Container>
    );
};

export default CreateNote;