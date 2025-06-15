import React, { createContext, Suspense, useContext, useState } from 'react'
import "../src/components/webCompEx"

import './App.css'
import Test from './components/test'
import DisplayCategories from './components/displayCategoriesEx'
import SearchWithDebounce from './components/searchWithDebounce'
import ToDoUI from './components/toDoUI'

const LazyEx =  React.lazy(() => import("./components/lazyEx"))

function App() {
  return (

    <div style={{ backgroundColor:"lightgray" }}>
      {/* <Test /> */}
      {/* <SearchWithDebounce /> */}
      <ToDoUI />
    </div>
  )
}

export default App
