import React, { useState } from 'react'
import Child from './child'

function Test() {

  const data = [
    {
      "id": "sign-up-form",
      "name": "Sign-Up Form",
      "category": "HTML"
    },
    {
      "id": "item-cart",
      "name": "Item Cart",
      "category": "HTML"
    },
    {
      "id": "spaghetti-recipe",
      "name": "Spaghetti Recipe",
      "category": "HTML"
    },
    {
      "id": "blog-post",
      "name": "Blog Post",
      "category": "HTML"
    },
    {
      "id": "rainbow-circles",
      "name": "Rainbow Circles",
      "category": "CSS"
    },
    {
      "id": "navbar",
      "name": "Navbar",
      "category": "CSS"
    },
    {
      "id": "pig-emoji",
      "name": "Pig Emoji",
      "category": "CSS"
    },
    {
      "id": "purchase-form",
      "name": "Purchase Form",
      "category": "CSS"
    },
    {
      "id": "algoexpert-products",
      "name": "AlgoExpert Products",
      "category": "CSS"
    },
    {
      "id": "testing-framework",
      "name": "Testing Framework",
      "category": "JavaScript"
    },
    {
      "id": "array-methods",
      "name": "Array Methods",
      "category": "JavaScript"
    },
    {
      "id": "event-target",
      "name": "Event Target",
      "category": "JavaScript"
    },
    {
      "id": "debounce",
      "name": "Debounce",
      "category": "JavaScript"
    },
    {
      "id": "this-binding",
      "name": "This Binding",
      "category": "JavaScript"
    },
    {
      "id": "promisify",
      "name": "Promisify",
      "category": "JavaScript"
    },
    {
      "id": "throttle",
      "name": "Throttle",
      "category": "JavaScript"
    },
    {
      "id": "curry",
      "name": "Curry",
      "category": "JavaScript"
    },
    {
      "id": "infinite-scroll",
      "name": "Infinite Scroll",
      "category": "DOM Manipulation"
    },
    {
      "id": "stopwatch",
      "name": "Stopwatch",
      "category": "DOM Manipulation"
    },
    {
      "id": "tic-tac-toe",
      "name": "Tic Tac Toe",
      "category": "DOM Manipulation"
    },
    {
      "id": "todo-list",
      "name": "Todo List",
      "category": "DOM Manipulation"
    },
    {
      "id": "typeahead",
      "name": "Typeahead",
      "category": "DOM Manipulation"
    },
    {
      "id": "tier-list",
      "name": "Tier List",
      "category": "DOM Manipulation"
    },
    {
      "id": "toasts",
      "name": "Toasts",
      "category": "DOM Manipulation"
    },
    {
      "id": "sudoku",
      "name": "Sudoku",
      "category": "DOM Manipulation"
    },
    {
      "id": "questions-list",
      "name": "Questions List",
      "category": "DOM Manipulation"
    }
  ];
//need to format the data in below format to map it 
// //{
//  "DOM Manipulation": [ { "id": "questions-list",
      // "name": "Questions List","Sudoku"}]
// }
const grouped = data.reduce((acc,item)=>{
if(!acc[item.category]){
  acc[item.category] =[];
}
acc[item.category].push({id:item.id,name:item.name})
return acc
},{})
  console.log("grouped",grouped,Object.entries(grouped))

  return (
    <div>
      <h2>Items Grouped by Category</h2>
      {
        Object.entries(grouped).map(([category, item])=>
          <><h1>{category}</h1><ul>
            {item.map((i) => <li key={i.id}>{i.name}</li>
            )}
          </ul></>
        )
      }
    </div>
  );
}



export default Test