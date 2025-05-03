import {useState } from "react";

function Counter (){
    const [count, setCount]=useState();
    return (
        <div>
            <h2 >Счёт:{count}</h2>
            <button onClick={() => setCount (count+1) } >+</button>
            <button onClick={() => setCount (count-1)}>-</button>
            <button onClick={() => setCount (0)}>Сброс</button>
        </div>
    )
}

export default Counter;