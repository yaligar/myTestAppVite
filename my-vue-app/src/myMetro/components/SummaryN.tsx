import React from 'react'
import { StagesType, SummaryType } from '../type/mtApp'
interface Props{
    summary:Record<StagesType, SummaryType>
}

function SummaryN(props:Props) {
    const {summary} =  props
  return (
    <div>{Object.entries(summary).map(([station, value])=>(
        <p>{station}:{value.totalAmount} visits {value.totalVisit}</p>
    ))}</div>
  )
}

export default SummaryN