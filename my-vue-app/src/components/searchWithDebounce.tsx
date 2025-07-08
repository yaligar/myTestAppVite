// Seacrch debounce along with the Error handling 

import { error } from "console";
import React, { useEffect, useRef, useState } from "react";

function Test() {
  const [users, setUsers] = useState([]);
  const [filteredRecord, setFilterRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const useTimerRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        if (!data.ok) {
          throw new Error(data.status);
        }
        return data.json();
      })
      .then((rec) => {
        setUsers(rec);
        setFilterRecords(rec);
        setLoading(false);
      })
      .catch((error) => alert(error));
  }, []);

  function handleSearch(e) {
    let searchText = e.target.value.toLowerCase();
    if (useTimerRef.current) {
      clearTimeout(useTimerRef.current);
    }

    useTimerRef.current = setTimeout(() => {
      setFilterRecords(
        users.filter((i) => i.name.toLowerCase().includes(searchText))
      );
    }, 300);
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <input
        style={{ margin: "10px", width: "50%" }}
        placeholder="Enter name to be searched"
        type="text"
        onChange={(e) => handleSearch(e)}
      ></input>
      <table border={1}>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Company Name</th>
        </thead>
        <tbody>
          {filteredRecord &&
            filteredRecord.map((i) => (
              <tr key={i.id}>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.company.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Test;
