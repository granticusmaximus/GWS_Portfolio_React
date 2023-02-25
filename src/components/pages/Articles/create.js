import {useState} from 'react';
import {db} from "../../../services/fb_commands"

const CreateBlog= () => {
    const [title , SetTitle] = useState("");
    const [content , setContent] = useState("");
    const [category , setCategory] = useState("");

    const sub = async (e) => {
        e.preventDefault()
        try {
          await addDoc(collection(db, 'blogs'), {
            title: title,
            content: content,
            category: category,
            created: Timestamp.now()
          })
        } catch (err) {
          alert(err)
        }
      }

    return (
    <div>
        <form onSubmit={(event) => {sub(event)}}>    
            <input type="text" placeholder="Title" 
            onChange={(e)=>{SetTitle(e.target.value)}} required />
            
            <input type="text" placeholder="category" 
            onChange={(e)=>{setCategory(e.target.value)}} required />

            <textarea  name="content" type="text" placeholder="write yoyr content here" 
            rows="10" cols="150" onChange={(e)=>{setContent(e.target.value)}} required >
            </textarea>

            <button type="submit">Submit</button>
        </form>
    </div>

    );
}

export default CreateBlog;
