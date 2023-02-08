import React, { useEffect, useState } from "react"
import { 
    Card, 
    Container, 
    Col, 
    Row, 
} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import '../../../assets/css/thankyou.css'
import logo from '../../../assets/img/logo.png'
import { useNavigate } from "react-router-dom"
import { 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    deleteDoc,
} from "firebase/firestore"
import { db } from "../../../services/fb_commands"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {Helmet} from "react-helmet"
import { getAuth } from "firebase/auth"

function NoteList() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [startDate, setSelectedDate] = useState(null)
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const auth = getAuth();
    const user = auth.currentUser;
    const backToDashboard = () => {
        navigate('/dashboard')
    }

    const addNote = async (e) => {
        e.preventDefault();  
        try {
            const docRef = await addDoc(collection(db, "notes"), {
              title: title,
              content: content,
              category: category, 
              startDate: startDate, 
              userID: user.uid,
              userEmail: user.email,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          window.location.reload(false)
    }

    const fetchPost = async () => {
        await getDocs(collection(db, "notes"))
            .where('userEmail', '==', user.email)
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setNotes(newData);                
                console.log(notes, newData);
            })
    }

    const handleClick = async (id) => {
        const reference = doc(db, 'notes', id)
        await deleteDoc(reference)
        window.location.reload(false)
    }

    useEffect(()=>{
        fetchPost();
    }, [])
    return (
        <>
            <Helmet>
                <title>GWS : Note List</title>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="csrf_token" content="" />
                <meta property="type" content="website" />
                <meta property="og:image" content={logo} data-react-helmet="true"/>
                <meta property="og:image:secure_url" content={logo} data-react-helmet="true"/>
            </Helmet>
            <Container>
                <div className="row">
                    <div className="col align-self-center">
                        <div className="sec-title">
                            <div className="title">Note List</div>
                            <p>Use this page to view and to create a new note</p>
                        </div>
                        <Button variant="primary" onClick={handleShow}>
                            Add New Note
                        </Button>
                        <Button 
                            variant="success" 
                            onClick={(e) => backToDashboard()}
                            style={{float:'right'}}
                        >
                            Back to Dashboard
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>New Note</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <div className="row">
                                <div className="col align-self-center">
                                    <div className="sec-title">
                                        <p>Use this form to create a new note</p>
                                    </div>
                                    <div className='form'>
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input
                                                className="form-control"
                                                placeholder='What Title do you want to give?'
                                                onChange={(e)=>setTitle(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Enter Category</label>
                                            <input
                                                className="form-control"
                                                placeholder='What category do you want to give?'
                                                onChange={(e)=>setCategory(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Note Content</label>
                                            <textarea
                                                className="form-control"
                                                rows="5"
                                                placeholder='What is the content of your note'
                                                onChange={(e)=>setContent(e.target.value)}
                                            ></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>Date Entered</label>
                                            <DatePicker
                                                selected={startDate}
                                                onChange={date => setSelectedDate(date)}
                                                placeholderText={'dd/mm/yyyy'}
                                                filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} // weekends cancel
                                                showYearDropdown // year show and scrolldown alos
                                                scrollableYearDropdown
                                            />
                                        </div>
                                        <button
                                            className='btn btn-success'
                                            type="submit"
                                            onClick={addNote}
                                        >
                                            Create Note
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </Modal.Body>
                            <Modal.Footer>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </Container>
            <Container>
                <Row className="justify-content-md-center">
                    {notes?.map((note,i) => {
                        return (
                                    <Col xs lg="4">
                                        <div className='noteListCard' key={i}>
                                            <Card.Body>
                                                <Card.Title>
                                                    <div className='noteListCard-header'>
                                                        <Button 
                                                            variant="danger" 
                                                            onClick={(e) => handleClick(note.id)}
                                                            style={{float:'right'}}
                                                        >
                                                            Delete Note
                                                        </Button>
                                                        {note.title}
                                                    </div>
                                                </Card.Title>
                                                <Card.Text>
                                                    <div className='noteListCard-content'>
                                                        {note.content}
                                                    </div>
                                                </Card.Text>
                                            </Card.Body>
                                        </div>
                                    </Col>
                                
                        );})
                    }
                </Row>
            </Container>
        </>
    );
}



export default NoteList;