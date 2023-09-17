import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../services/fb_commands";
import { Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: todo,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    window.location.reload(false);
  };

  const backToDashboard = () => {
    navigate("/dashboard");
  };

  const handleClick = async (id) => {
    const reference = doc(db, "todos", id);
    await deleteDoc(reference);
    window.location.reload(false);
  };

  const fetchPost = async () => {
    await getDocs(collection(db, "todos")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(newData);
      console.log(todos, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <hr />
      <section className="todo-container">
        <div className="todo">
          <div>
            <h1> Todo List</h1>
            <Button variant="success" onClick={(e) => backToDashboard()}>
              Back to Dashboard
            </Button>
            <hr />
            <div>
              <input
                type="text"
                placeholder="What do you have to do today?"
                onChange={(e) => setTodo(e.target.value)}
              />
            </div>

            <div className="btn-container">
              <button type="submit" onClick={addTodo}>
                Submit
              </button>
            </div>
          </div>

          <div className="todo-content">
            <Table hover responsive striped>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Content</th>
                </tr>
              </thead>
              <tbody>
                {todos?.map((todo, i) => {
                  return (
                    <tr>
                      <th scope="row" key={i}>
                        <button onClick={(e) => handleClick(todo.id)}>
                          Done
                        </button>
                      </th>
                      <td>{todo.todo}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Todo;
