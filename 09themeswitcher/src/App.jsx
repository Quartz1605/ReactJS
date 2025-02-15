import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Themebtn from '../components/themebtn'
import Card from '../components/Card'
import { ThemeProvider } from './context/theme'

function App() {
  

  //Agar aapko wo children banake nahi karne toh aapka theme provider ke andar sab wrap kardo."Theme provider" is basically create context ke baad .provider wala function.
  
  const [themeMode,setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  
  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual change in theme

  useEffect(() => {

    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)




  },[themeMode])
  
  return (
    <ThemeProvider value={{lightTheme,darkTheme,themeMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <Themebtn /> 
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card /> 
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
