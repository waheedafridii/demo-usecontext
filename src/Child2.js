import React, { useReducer } from 'react';
import numberReducer from './numberReducer';

function Child2() {
    let [state, dispatch] = useReducer(numberReducer,52);
    return (
        <div>
           Child 2 : {state}
           <button onClick={()=>{
               dispatch({type:"increment",val:67})
           }}>Increment</button>
           <button onClick={()=>{
               dispatch({type:"decrement", val:34})
           }}>Decrement</button>
        </div>
    );
}

export default Child2;
