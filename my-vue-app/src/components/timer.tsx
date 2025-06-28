import React, { useEffect, useRef, useState } from "react";
import { useTimer } from "../hooks";

//  3. Create a Timer component with Start Stop and Reset buttons.
//  On start timer should keep decreasing. Format: hh:mm:ss
//  Follow up question: Create a custom hook called useTimer and move the logic.

function Timer() {
 const {formatTimer, seconds, setStart, handlereset} = useTimer(0)
  return (
    <div>
      <p>{formatTimer(seconds)}</p>
      <button onClick={() => setStart(true)}> Start</button>
      <button onClick={() => setStart(false)}>Stop</button>
      <button onClick={handlereset}>Restet</button>
    </div>
  );
}

export default Timer;
