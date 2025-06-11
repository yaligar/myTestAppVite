import React, { useContext } from 'react'
import { MyContext } from '../App'



function Child() {
  const data = useContext(MyContext)
  return (
    <div>inside Child {data} </div>
  )
}

export default Child