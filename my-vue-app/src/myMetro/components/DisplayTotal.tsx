import React, { useState } from 'react'
interface Props{
    total :number
}

function DisplayTotal(props:Props) {
    const {total} = props
  return (
    <div>
       {`total recharge available ${total}`}
    </div>
  )
}

export default DisplayTotal