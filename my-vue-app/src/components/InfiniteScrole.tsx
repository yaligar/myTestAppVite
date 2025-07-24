import React, { useEffect, useState } from "react";

function InfiniteScrole() {
  const [data, setData] = useState([]);
  const PER_PAGE = 10;
  const [pageNo, setPageNo] = useState(0);

  async function fetchRecords() {
    const records = await fetch(
      `https://dummyjson.com/products?skip=${pageNo}&limit=${PER_PAGE}`
    );
    const jsonRecords = await records.json();
    setData((prev) => [...prev, ...jsonRecords.products]);
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log("test", entries);
      if (entries[0].isIntersecting) {
        // observer.unobserve(lastImg)
        setPageNo((prev) => prev + PER_PAGE);
      }
    });
    const lastImg = document.querySelector(".img_post:last-child");

    if (lastImg) {
      observer.observe(lastImg);
    }
    return () => observer.disconnect();
  }, [data]);

  useEffect(() => {
    fetchRecords();
  }, [pageNo]);
  return (
    <div>
      <h1>My List of products</h1>
      <div className="mainComtainer">
        {data &&
          data.map((i) => (
            <img
              className="img_post"
              key={i.id}
              alt="alt"
              src={i.thumbnail}
            ></img>
          ))}
      </div>
    </div>
  );
}

export default InfiniteScrole;
