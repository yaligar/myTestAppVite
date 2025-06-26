import React, { useEffect, useState } from "react";
import "../myStyle.css";

function Pagination() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 10;
  const PageCard = ({ title, image }) => {
    return (
      <div className="card_section">
        <img className="product-img" src={image} alt={title}></img>
        <p>{title}</p>
      </div>
    );
  };

  const fetchData = async () => {
    const records = await fetch("https://dummyjson.com/products?limit=200");
    const json = await records.json();
    setData(json.products);
  };

  useEffect(() => { 
    fetchData();
  }, []);
  const start = currentPage * PER_PAGE;
  const end = start + PER_PAGE;
  const handlePageClicked = (currentPage) => {
    setCurrentPage(currentPage);
  };

  return (
    <div className="">
      <div className="container">
        {data &&
          data
            .slice(start, end)
            .map((i) => (
              <PageCard key={i.id} image={i.thumbnail} title={i.title} />
            ))}
      </div>
      {
        // 1. Array(10)
        // This creates a new array of length 10, but it’s empty (i.e., contains 10 holes, not values).

        // 2. Array(10).keys()
        // This returns an iterator of the array’s keys (indexes): 0 to 9.
        [...Array(Math.ceil(data.length / PER_PAGE)).keys()].map((i) => (
          <button
            onClick={() => handlePageClicked(i)}
            key={i}
            className="page_button"
          >
            {i}
          </button>
        ))
      }
    </div>
  );
}

export default Pagination;
