import React, { useRef, useState } from "react";
import Pagination from "./pagination";

function SetIntervalCounter() {
  const [count, setCount] = useState(10);
  let timeRef = useRef(null);

  const handleClick = (prop) => {
    if (prop === "dec") {
         if (timeRef.current) return;
      timeRef.current = setInterval(() => {
       setCount((count)=>{
         if(count === 0){
          alert ("count reached 0")
           clearInterval(timeRef.current);
          timeRef.current = null
          return 10
         }else{
          return count -1 
         }
       })
      }, 1000);
    } else if(prop === "reset") {
      setCount(10);
       clearInterval(timeRef.current);
       timeRef.current = null
    }
  };
  return (
    <div>
      <button onClick={() => handleClick("dec")}>dec</button>
      <button onClick={()=>handleClick("reset")}>Reset</button>
      {count}
    </div>
  );
}

export default SetIntervalCounter;
