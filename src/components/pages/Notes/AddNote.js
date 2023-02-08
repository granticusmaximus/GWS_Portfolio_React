import {useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {db} from "../../../services/fb_commands"
import {Button} from 'reactstrap'
import styled from 'styled-components'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

function AddNote() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState("")

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'notes'), {
        title: title,
        content: content,
        category: category,
        created: Timestamp.now()
      })
    } catch (err) {
      alert(err)
    }
  }

const CustomQuill = styled(ReactQuill)`
  height: 200px;
`;

  return (
        <div className='taskManager'>
          <div>
          <form onSubmit={handleSubmit} className='addForm' name='addTask'>
            <div class="form-group">
              <label for="fromName">Title</label>
                <input 
                  type='text' 
                  name='title' 
                  class="form-control"
                  onChange={(e) => setTitle(e.target.value)} 
                  value={title}
                  placeholder='Enter title'
                />
            </div>
            <div class="form-group">
              <label for="fromName">Set Category</label>
                <input 
                  type='text' 
                  name='category'
                  class="form-control" 
                  onChange={(e) => setCategory(e.target.value)} 
                  value={category}
                  placeholder='Enter category'
                />
            </div>
            <div class="form-group">
              <label for="content">Enter Content</label>
                <CustomQuill 
                  theme='snow'
                  value={content} 
                  onChange={(value) => setContent(value)} 
                />
            </div>
            <br />
            <hr />
            <Button type='submit' class="btn btn-primary">
              Save Note
            </Button>
          </form> 
          </div>
      </div>

  )
}

export default AddNote
