import React, { useState } from 'react'
import './usestate.css'

const Usestate = () => {
    const [count, setCount] = useState(0)
    // let count = 0;
    // const increment = () => {
    //     count = count + 1;
    //     console.log(count)
    // }
    // increment()
  return (
    <div className='usestate'>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Usestate