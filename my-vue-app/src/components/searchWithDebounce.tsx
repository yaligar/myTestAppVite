import React, { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";

const SearchWithDebounce = () => {
  const [user, setUser] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRecords, setFilteredRecords] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((r) => {
        setUser(r);
        setFilteredRecords(r);
      });
  }, []);
  //     function debounce(fn, delay) {
  //     let timeInteval;
  //     return function (...arg) {
  //       clearInterval(timeInteval);
  //       timeInteval = setTimeout(() => {
  //         fn(...arg);
  //       }, delay);
  //     };
  //   }
  const handleSearchWithDebounce = useMemo(
    () =>
      // use Debounce from lodash library or we can write static function also
      debounce((value) => {
        const data = value.toLowerCase();
        setFilteredRecords(
          user.filter(
            (record) =>
              record.name.toLowerCase().includes(data) ||
              record.username.toLowerCase().includes(data)
          )
        );
      }, 2000),
    [user]
  );
  const handleChange = (e) => {
    const data = e.target.value;
    setSearchText(data);
    handleSearchWithDebounce(data);
  };
  return (
    <div>
      <input
        placeholder="enter dat to be search"
        style={{ margin: "10px", width: "50%" }}
        value={searchText}
        onChange={(e) => handleChange(e)}
      />
      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>email</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords &&
            filteredRecords.map((rec) => (
              <tr key={rec.id}>
                <td>{rec.id}</td>
                <td>{rec.name}</td>
                <td>{rec.username}</td>
                <td>{rec.email}</td>
                <td>{rec.address.city}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchWithDebounce;
