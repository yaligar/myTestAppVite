import React, { useContext } from 'react'
import { MyContext } from '../App'

function Child() {
  const value  = useContext(MyContext)
  return (
    <div>inside Child {value}</div>
  )
}

export default Child