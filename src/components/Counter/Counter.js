"use client"

import React from 'react'
import { useState } from "react"
const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>

      <button className='btn-ghost' onClick={() => setCounter(counter + 1)}>Increase</button> <br />
      Counter : {counter} <br />
      <button className='btn-primary' onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  )
}

export default Counter