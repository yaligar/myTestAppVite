import React, { useContext } from 'react'




function Child() {
  const data = useContext(MyContext)
  return (
    <div>inside Child  </div>
  )
}

export default Child