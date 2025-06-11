import React, { useEffect, useState } from 'react'
import Child from './child'
import LazyEx from './lazyEx'

function Test() {
const [data, setDate] = useState("")
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json())
  .then((r)=>setDate(r))
},[])
const header = ["id", "name", "username", "email" ,"city"]
  console.log(data)
  return (
    <div>
      <table>
        <thead >
          <tr>
            {/* () at arrow fun  parentheses () to implicitly return the JSX element. */}
          {header.map((i, index)=>(
            <th key={index}>{i}</th>
          ))}
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  )
}


export default Test