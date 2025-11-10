import React,{useState} from 'react';

function Counter(){
    const [count, setcount] = useState(0);
    const increment = () => setcount(count + 1);
    const decrement = () => setcount(count - 1);
    
    return(
        <div>
            <h1>Count:{count}</h1>
            <button style={{backgroundColor:'green', padding:'6px'}} onClick={increment}>increment</button>
            <button style={{backgroundColor:'red', padding:'6px'}} onClick={decrement}>decrement</button>
        </div>
    );
}
export default Counter;