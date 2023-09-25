import { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    function increase(){
        setCounter(counter+1);
    }

    function decrease(){
        setCounter(counter-1);
    }
    return(
        <>
            <h3>Counter: {counter}</h3>
            <div>
                <button disabled={counter >= 10 ? true: false} onClick={increase}>+1</button>
                <button disabled={counter <= 0 ? true: false} onClick={decrease}>-1</button>
            </div>
        </>
    )
}


export default Counter;