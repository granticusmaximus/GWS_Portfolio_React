import Note from './Note'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from "../../../services/fb_commands"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import AddNote from './AddNote'
import Draggable from 'react-draggable';

function NoteManager() {
  const [tasks, setTasks] = useState([])
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    const taskColRef = query(collection(db, 'notes'), orderBy('created', 'desc'))
    onSnapshot(taskColRef, (snapshot) => {
      setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])

  return (
    <>
    <div className='taskManager'>
      <header><center>Note Manager</center></header>
      <center>
        <hr/>
            <a 
              href= '/dashboard'
              className='btn btn-secondary'
            >
              Back to Dashboard
            </a>
        <hr/>
      </center>
      <div className='taskManager__container'>
        
        <Button onClick={toggle}>
            Add Note +
        </Button>
        <Modal 
            size="lg" 
            style={{
                maxWidth: '1350px', 
                width: '100%'
            }}
            isOpen={modal} 
            toggle={toggle}
          >
            <ModalHeader toggle={toggle}>Add Note</ModalHeader>
            <AddNote/>
            <ModalFooter>
              <Button className='btn btn-danger' onClick={toggle}>
                Close
              </Button>
            </ModalFooter>
        </Modal>
        <div className='taskManager__tasks'>
          {tasks.map((task) => (
            <Note
              id={task.id}
              key={task.id}
              title={task.data.title} 
              category={task.data.category}
              content={task.data.content}
            />
          ))}
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    </>
  )
}

export default NoteManager