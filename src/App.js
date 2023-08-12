import "./App.css";
import { useState } from "react";
function App(){
  

  const[count,setCount]=useState(0)
  
  return (
    <div className="App">
      <header>
        <h1>
          Counter App using State
          </h1> 
          <h2>current value of count is {count}</h2>  
          <button   onClick={() =>setCount(0)}>Reset</button>      
          <button  onClick={() =>count ==10 ? "limit crossed":setCount(count +1)}  >MAX COUNTER</button>
          <button   onClick={() =>count <=0 ? "linit crossed" :setCount(count -1)}>MIN COUNTER</button> 

      </header>
      
    </div>
  )
}

export default App