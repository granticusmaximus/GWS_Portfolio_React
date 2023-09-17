import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../../services/fb_commands";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";

const BlogView = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);

  db.firestore()
    .collection("blogs")
    .where("id", "==", id)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  return (
    <div className="container">
      <h2>{blogs.title}</h2>
      <p>
        <em>{blogs.category}</em>
      </p>
      <p>{blogs.content}</p>
    </div>
  );
};
export default BlogView;
