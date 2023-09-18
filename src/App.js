import "./App.css";
import { useState } from "react";
function App(){
  
 const [count,setCount]=useState(0);
    //let count=15;
function addvalue(){
  if(count<=9){
  setCount(count+1);
  }
  console.log(count)
}

function minsvalue(){
  
  if(count>0){
    setCount(count-1);

  }
  
  console.log(count)
}

  return (
    <div className="App">
      <header>
        <h1>
          Counter App using State
          </h1> 
          <h2>current value of count is {count}</h2>  
          <button >Reset</button>      
          <button onClick={addvalue}>MAX COUNTER</button>
          <button onClick={minsvalue}>MIN COUNTER</button> 

      </header>
      
    </div>
  )
}

export default App