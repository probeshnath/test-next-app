"use client"

import React from 'react'
import { useState } from "react"
const Counter = () => {
    const [counter,setCounter] = useState(0)
  return (
    <div>Counter : {counter}
        
      <button className='' onClick={()=> setCounter(counter + 1)}>Increase</button>
      <button onClick={()=> setCounter(counter - 1)}>Decrease</button>
    </div>
  )
}

export default Counter