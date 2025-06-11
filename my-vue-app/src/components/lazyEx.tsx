import React, { Suspense } from 'react'
// import sampleJson from "../samples/sampleJson.json"

import records from "../samples/sampleJson.json"
function LazyEx() {
  console.log(records.length)
  const length = records.length
  return (
   
  <div>{`length of the large records ${length}`}</div>
  
  )
}

export default LazyEx