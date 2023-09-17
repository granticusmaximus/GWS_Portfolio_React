import { useState } from "react";
import { db } from "../../../services/fb_commands";

function Blog({ id, title, category, content }) {
  return (
    <>
      <div className="task">
        <div className="task__body">
          <h2>{title}</h2>
          <p>
            <em>{category}</em>
          </p>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}

export default Blog;
