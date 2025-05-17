import { useState } from 'react'
import testCartUI from "../src/components/testCartUI"

import './App.css'
import TestCart from '../src/components/testCartUI'


function App() {
  const [counter, setCounter] = useState(0)

  return (
 <div style={{display:"flex"}}>
 <TestCart />
 </div>
     



  )
}



export default App
