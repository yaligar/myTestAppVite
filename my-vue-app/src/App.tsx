import React, { createContext, Suspense, useContext, useState } from 'react'
import "../src/components/webCompEx"

import './App.css'
import Test from './components/test'
import DisplayCategories from './components/displayCategoriesEx'
// import LazyEx from './components/lazyEx'

// const LazyEx =  React.lazy(()=>import("../components/lazyEx"))
const LazyEx =  React.lazy(() => import("./components/lazyEx"))

function App() {
  return (

    <div style={{ display: "flex" }}>
      <Test />
    </div>
  )
}

export default App
