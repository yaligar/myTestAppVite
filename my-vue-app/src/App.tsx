import React, { createContext, Suspense, useContext, useState } from 'react'
import "../src/components/webCompEx"

import './App.css'
import Test from './components/test'
import DisplayCategories from './components/displayCategoriesEx'
import SearchWithDebounce from './components/searchWithDebounce'

const LazyEx =  React.lazy(() => import("./components/lazyEx"))

function App() {
  return (

    <div style={{ display: "flex" }}>
      {/* <Test /> */}
      <SearchWithDebounce />
    </div>
  )
}

export default App
