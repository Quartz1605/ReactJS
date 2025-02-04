import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("black")
  //onclick mein agar aapko parameters dene hai toh use "Callback"
  

  return (
    <>
      <div className='h-screen w-full flex justify-center' style={{ backgroundColor: color }}>

        <div className='fixed flex flex-wrap'>
          <button className='m-4 bg-red-600' id="red" onClick={(Red) => setColor("Red")}>Red</button>


          <button className='m-4 bg-blue-600' id="blue" onClick={(Blue) => setColor("Blue")}>Blue</button>
          <button className='m-4 bg-green-600' id="green" onClick={(Green) => setColor("Green")}>Green</button>
          <button className='m-4 bg-yellow-400' id="yellow" onClick={(Yellow) => setColor("Yellow")}>Yellow</button>
          <button className='m-4 bg-orange-500' id="orange" onClick={(Orange) => setColor("Orange")}>Orange</button>
          <button className='m-4 bg-pink-500' id="pink" onClick={(Pink) => setColor("Pink")}>Pink</button>
          <button className='m-4 bg-violet-500' id="violet" onClick={(Violet) => setColor("Violet")}>Violet</button>
        </div>



      </div>


    </>


  )
}

export default App
