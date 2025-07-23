import React, { useState } from "react";

interface Props {
  handleAmount: (amount: number) => void;
}

function MyInput(props: Props) {
  const { handleAmount } = props;
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <input
        type="number"
        placeholder="enter recharge amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      ></input>
      <button onClick={() => handleAmount(amount)}>Recharge</button>
    </div>
  );
}

export default MyInput;
