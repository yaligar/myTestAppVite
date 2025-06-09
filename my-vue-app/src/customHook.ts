import { createContext, useState } from "react"

export  const myContext = createContext("")


export default  function useLoginLocal(){
    const [value, setValue] = useState()
return  [value, setValue]
}
