import './App.css'
import { useState } from 'react'
//useState ek hook hai,we use hooks yahape update the UI.Basically ek variable kaafi jagah use ho raha ho toh everywhere it gets updated using hooks.

function App(){
  //let counter = 5
  //Usestate do ek array return karta hai of two elements.
  //Jo aap default value dete ho that is assigned to "counter" or the first value of aapka array jisme aap le rahe ho.
  //Next is aapka function return deta hai,"setCounter" ka naam aap kuch bhi de sakte ho,"set" isiliye dete hai cus wo control karta hai aapke "counter" ko.


  let [counter,setCounter] = useState(10)

  

  function addvalue(){
    
    if(counter >= 20){
      counter = 20
      setCounter(counter)
    }
    else{
      counter += 1

    setCounter(counter)
    }

    
    
  }

  function decvalue(){
    if(counter <= 0){
      counter = 0
      setCounter(counter)
    }
    else{

    counter -= 1

    setCounter(counter)
  }
}
  
  

return (

  
  <>
  <h1>Chai aur react.</h1>
  <h2>Counter value: {counter}</h2>

  <button onClick={addvalue}>Add value</button>
  <br />
  
  <button onClick={decvalue}>Decrease value</button>
  </>
)
}
  

export default App
