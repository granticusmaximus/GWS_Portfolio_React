import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../services/fb_commands";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function EditNote({ toEditTitle, toEditContent, toEditCategory, id }) {
  const [title, setTitle] = useState(toEditTitle);
  const [content, setContent] = useState(toEditContent);
  const [category, setCategory] = useState(toEditCategory);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const taskDocRef = doc(db, "notes", id);
    try {
      await updateDoc(taskDocRef, {
        title: title,
        content: content,
        category: category,
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="taskManager">
      <form onSubmit={handleUpdate} className="editTask">
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <ReactQuill
          value={content}
          onChange={(content) => setContent(content)}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditNote;
