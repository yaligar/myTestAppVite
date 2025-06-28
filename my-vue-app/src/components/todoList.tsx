
// 4. Create Todo list app with add, edit and delete functionality
import React, { useState } from "react";

function TodoList() {
  const [toDoList, setToDoList] = useState([]);
  const [enteredList, setEnteredList] = useState("");
  const [editId, setEditId] = useState("");
  const [edittext, setEditText] = useState("");
  const handleClickAdd = () => {
    const newId = Date.now();
    enteredList !== "" &&
      setToDoList([...toDoList, { id: newId, text: enteredList }]);
    setEnteredList("");
  };
  const handleDelete = (id) => {
    setToDoList(toDoList.filter((i) => i.id !== id));
  };
  const handleEdit = ({ id, text }) => {
    setEditId(id);
    setEditText(text);
  };
  const handleSave = (id) => {
    toDoList.forEach((i) => {
      if (i.id === id) {
        i.text = edittext;
      }
    });
    setEditId("");
    setEditText("");
  };
  return (
    <div>
      <p>To Do List</p>
      <input
        value={enteredList}
        onChange={(e) => setEnteredList(e.target.value)}
      ></input>
      <button onClick={handleClickAdd}>Add</button>
      {toDoList && (
        <ul style={{ listStyle: "none" }}>
          {toDoList.map((i) => (
            <li>
              {editId === i.id ? (
                <>
                  <input
                    value={edittext}
                    onChange={(e) => setEditText(e.target.value)}
                  ></input>
                  <button onClick={() => handleSave(i.id)}>save</button>
                </>
              ) : (
                <div key={i.id}>
                  <span>{i.text}</span>
                  <button onClick={() => handleEdit(i)}>Edit</button>
                  <button onClick={() => handleDelete(i.id)}>Delete</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
