import React from 'react'
import {useSelector} from "react-redux"
const Counter = () => {
    const count =useSelector(state=>state.counter)
    return (
        <div>
            <button>+</button>
            <input type="number" placeholder="step inc" />
            <p>{count}</p>
            <button>-</button>
            <input type="number" placeholder="step dec" />

        </div>
    )
}

export default Counter