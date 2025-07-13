import React, { useState } from "react";

function MultiFormInput() {
  const [data, setData] = useState({ name: "", sName: "", age: "" });
  function handleChange(e) {
    const { name, value: inputValue } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
      {
/* React automatically provides the SyntheticEvent e to your handler functions when those events fire.
For example:
When a user types in the input, React triggers onChange and internally calls your handleChange(e).
Similarly, when the form submits, React triggers onSubmit and calls your handleSubmit(e).
You don't explicitly write onChange={(e) => handleChange(e)} because this is what React does for you by default when you write onChange={handleChange}. */}

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={data.name}
          placeholder="Name"
          onChange={handleChange}
        ></input>
        <input
          name="sName"
          value={data.sName}
          placeholder="sName"
          onChange={handleChange}
        ></input>
        <input
          name="age"
          value={data.age}
          placeholder="age"
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MultiFormInput;
