import { useState, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { db } from "../../../services/fb_commands";
import { Helmet } from "react-helmet";

const CreateBlog = () => {
  let navigate = useNavigate();
  const form = useRef();
  const [title, SetTitle] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");

  const createPost = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "blogs"), {
        title: title,
        slug: slug,
        content: content,
        category: category,
        created: Date.now(),
      });
      navigate = "/articles";
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>Create a New Article</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
      </Helmet>
      <br />
      <div className="container">
        <h2>Create New Post</h2>
        <center>
          <a href="/articles" className="btn btn-warning">
            Back to Article List
          </a>
        </center>
        <form class="form" ref={form} onSubmit={createPost}>
          <Row>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Title"
                onChange={(e) => {
                  SetTitle(e.target.value);
                }}
                required
              />
            </div>
          </Row>
          <Row>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Set a slug"
                onChange={(e) => {
                  setSlug(e.target.value);
                }}
                required
              />
            </div>
          </Row>
          <Row>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Set a category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                required
              />
            </div>
          </Row>
          <Row>
            <div class="form-group">
              <textarea
                name="content"
                type="text"
                class="form-control"
                placeholder="write your content here"
                rows="10"
                cols="173"
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                required
              ></textarea>
            </div>
          </Row>
          <hr />
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
      <br />
      <br />
    </>
  );
};

export default CreateBlog;
