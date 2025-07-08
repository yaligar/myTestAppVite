import React, { useEffect, useMemo, useRef, useState } from "react";
import Card from "./card";

function Search() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredRec, setFilteredRec] = useState([]);
  const timeRef = useRef(null);

  async function getUsers() {
    try {
      setLoading(true);
      const userRecord = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!userRecord.ok) {
        throw new Error("failed to fetch Data");
      }

      const json = await userRecord.json();
      const records = await json;
      setUsers(records);
      setFilteredRec(records);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    getUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  function handleSearch(e) {
    const searchText = e.target.value.toLowerCase();
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      const values = users.filter((i) => {
        return i.name.toLowerCase().includes(searchText);
      });

      setFilteredRec(values);
    }, 300);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name to be searched"
        onChange={(e) => handleSearch(e)}
      ></input>
      <div className="maindiv">
        {filteredRec &&
          filteredRec.map((i) => (
            <Card
              key={i.id}
              name={i.name}
              email={i.email}
              address={i.company.name}
            />
          ))}
      </div>
    </div>
  );
}

export default Search;
