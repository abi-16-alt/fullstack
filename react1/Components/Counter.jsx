/*import React, { useReducer } from 'react';
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};
function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
}
export default Counter;
*/
import React, { useMemo, useState } from 'react'
function Counter(){
    const[counterOne,setCounterOne]=useState(0)
    const[counterTwo,setCounterTwo]=useState(0)

    const incrementOne=()=>{
        setCounterOne(counterOne+1)
    }
    const incrementTwo=()=>{
        setCounterTwo(counterTwo+1)
    }
    const isEven=useMemo(()=>{
        let i=0;
        while(i<2000000000) i++;
        return counterOne%2===0;
    },[counterOne]);
    return(
        <div>
            <div>
                <button onClick={incrementOne}>Count One-{counterOne}</button>
                <span>{isEven?'Even':'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two-{counterTwo}</button>
            </div>
        </div>
    )     
}
     

export default Counter