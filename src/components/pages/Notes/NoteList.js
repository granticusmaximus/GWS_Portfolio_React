import React, { useState, useEffect }from 'react';
import { Link } from "react-router-dom";
import { db } from "../../../services/fb_commands"
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";




const NoteList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        collection(db, 'notes')
            .get()
            .then((querySnapshot) => {
                const data = [];
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, ' => ', doc.data());
                    data.push(doc.data());
                });
                setNotes(data);
            })
            .catch((error) => {
                console.log('Error getting documents: ', error);
            });
    }, []);
    return (
        <div className='App'>
            <br/>           
            <br/>
            <hr/>
            <div className='container'>
                <h2>All Notes</h2>
                <div className="todo-content">
                    {
                        notes && notes.map(note=>{
                            return(
                            <p>
                                {note.title}
                                {note.category}
                                {note.startDate}
                                {note.content}
                            </p>
                        )})
                    }
                </div>
            </div>
        </div>
    );
  };

export default NoteList;