import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  //myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-red-200 italic p-4 rounded-xl mb-4'>Tailwind is in.</h1>
      <Card username="pratham" /*Yaha kuch bhi pass kar sakte ho like object,array etc.*/btnText="Buy me"/>
      <Card username="raj"/>

      
      
    </>
  )
}

export default App
