
// Problem Statement:
// Write a TypeScript program to manage a Metro Card Balance System.
// You need to implement the following functionality:

// Requirements:
// User can recharge a metro card with a given amount.

// Deduct fare when the user checks in at a station.

// Fare varies based on station type: AIRPORT (100 Rs), MALL (50 Rs).

// If insufficient balance, reject the check-in.

// Print summary:

// Total collection per station.

// Number of check-ins per station.

import React, { useState } from "react";
import MyInput from "./components/MyInput";
import DisplayTotal from "./components/DisplayTotal";
import Stations from "./components/Stations";
import { StagesType, SummaryType } from "./type/mtApp";
import SummaryN from "./components/SummaryN";

function MyMetroEX() {
  const [total, setTotal] = useState<number>(0);
  const [summary, setSummary] = useState<Record<StagesType, SummaryType>>({
    [StagesType.METRO]: { totalAmount: 0, totalVisit: 0 },
    [StagesType.MALL]: { totalAmount: 0, totalVisit: 0 },
  });
  const fair = {
    [StagesType.METRO]: 100,
    [StagesType.MALL]: 50,
  };

  function handleAmount(amount: number) {
    setTotal(amount);
  }
  function handleStation(station: StagesType) {
    setTotal((prev) => prev - fair[station]);
    setSummary((prev) => ({
      ...prev,
      [station]: {
        totalAmount: prev[station].totalAmount - fair[station],
        totalVisit: prev[station].totalVisit + 1,
      },
    }));
  }
  return (
    <div>
      <h1>My App</h1>
      <MyInput handleAmount={handleAmount} />
      <DisplayTotal total={total} />
      <Stations handleStation={handleStation} />
      <SummaryN summary={summary} />
    </div>
  );
}

export default MyMetroEX;
