import { createContext, useContext, useState } from 'react'
import "../src/components/webCompEx"

import './App.css'
import Test from './components/test'
import DisplayCategories from './components/displayCategoriesEx'


function App() {
  const name = "abc"
  return (
    <div style={{ display: "flex" }}>
      <DisplayCategories />
    </div>

  )
}

export default App
