import { useState } from "react";

function FunctionComponentTutorials(props) {
    // State
    const [count, setCount] = useState(0);

    // Event
    const countHandleClickPlus = () => {
        setCount(count + 1)
    }
    const countHandleClickMinus = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={countHandleClickPlus}>+</button>
            <button onClick={countHandleClickMinus}>-</button>
        </div>
    )
}

export default FunctionComponentTutorials