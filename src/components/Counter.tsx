import React, {useState} from "react";
import './Counter.scss'
export const Counter=()=>{
    const [count,setCount] =useState(0)
    const increment = () =>{
        setCount(count+2)
    }
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={increment}>increment</button>
        </div>
    )
}