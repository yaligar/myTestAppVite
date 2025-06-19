import React, { createContext, Suspense, useContext, useState } from 'react'


import './App.css'
import Test from './components/test'

function App() {

  const arr = [1,4,2,5,3]

  for (let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
      if(arr[i] < arr[j]){
        let temp = arr[i];
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp
        
      }
    }
  }
console.log(arr)
  return (

    <div >
      <Test />
   
    </div>
  )
}

export default App
