import React, {useState, useEffect} from 'react';
import "./style.css";

const Counter = () => {

  let [counter,fn] = useState(0);
  //you can also assign type here as number and in this way it will only accept numbers
  //let [counter,fn] = useState<number>(0);
  
  //this will be called upon mounting only
  
  useEffect(()=>{
    console.log("use effect called");
    return function(){//this will run upon unmounting a component only
      console.log("unmount counter");
    }
  },[]); 

  //this will be called once when the component is mounted, and then whenever there is a change in the dependency counter
  useEffect(()=>{
    console.log("user updated count",counter);
    return ()=>{console.log("Unmounting upon counter value",counter)};
  },[counter]); 
  
  let handleInc = () =>{
    fn(counter+1); 
  }
  
  let handleDec = () =>{
    fn(counter-1);
  }
  return (
    <div className='counter-container'>
        <h1>
            {counter}
            <button onClick={handleInc} style = {{background : "aquamarine"}}>Increment</button>
            <button onClick={handleDec} style = {{background : "tomato"}}>Decrement</button>
        </h1>
    </div>
  )
}

export default Counter;