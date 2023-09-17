import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../services/fb_commands";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";

const AddNote = () => {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setSelectedDate] = useState(null);

  const addNote = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "notes"), {
        title: title,
        content: content,
        category: category,
        startDate: startDate,
      });
      console.log("Document written with ID: ", docRef.id);
      navigate("/notes");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    window.location.reload(false);
  };
  return (
    <>
      <Helmet>
        <title>GWS : Add New Note</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
      </Helmet>
      <div class="container">
        <div class="row">
          <div class="col align-self-center">
            <div class="sec-title">
              <div class="title">Add a new note</div>
              <p>Use this form to create a new note</p>
            </div>
            <div className="form">
              <div class="form-group">
                <label>Title</label>
                <input
                  class="form-control"
                  placeholder="What Title do you want to give?"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label>Enter Category</label>
                <input
                  class="form-control"
                  placeholder="What category do you want to give?"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label>Note Content</label>
                <textarea
                  class="form-control"
                  rows="5"
                  placeholder="What is the content of your note"
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>
              <div class="form-group">
                <label>Date Entered</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText={"dd/mm/yyyy"}
                  filterDate={(date) =>
                    date.getDay() !== 6 && date.getDay() !== 0
                  } // weekends cancel
                  showYearDropdown // year show and scrolldown alos
                  scrollableYearDropdown
                />
              </div>
              <button
                className="btn btn-success"
                type="submit"
                onClick={addNote}
              >
                Create Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNote;
