import React from 'react'
import { StagesType } from '../type/mtApp'
interface Props{
    handleStation:(arg0: StagesType)=>void
}

function Stations(props:Props) {
    const {handleStation} = props
  return (
    <div>
        <button onClick={()=>handleStation(StagesType.METRO)}>{StagesType.METRO}</button>
        <button onClick={()=>handleStation(StagesType.MALL)}>{StagesType.MALL}</button>
    </div>
  )
}

export default Stations