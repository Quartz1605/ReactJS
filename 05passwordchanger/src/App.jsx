//copy to clipboard,useEffect,useState,useRef,useCallback are the important things learnt.


import { useState,useEffect,useRef,useCallback} from 'react'
import './App.css'


function App() {
  
  const [length,setLength] = useState(8)

  const [numberAllowed,setnumberAllowed] = useState(false)

  const [charAllowed,setcharAllowed] = useState(false)

  const [password,setPassword] = useState("")

  //useRef hook
  

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZAabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed === true && charAllowed === false){
      str += "0123456789"

      for(let i=0;i<length;i++){
        let randomNum = Math.floor(Math.random()*62 + 1)
        
        pass += str[randomNum]
      }
      
      setPassword(pass)
    
    }
    
    if(charAllowed === true && numberAllowed === false){
      str += "!@#$%^&*()_{}[]"

      for(let i=0;i<length;i++){
        let randomNum = Math.floor(Math.random()*62 + 1)
        
        pass += str[randomNum]
      }

      setPassword(pass)

    }

    if(charAllowed === true && numberAllowed === true){
      str += "!@#$%^&*()_{}[]"
      str += "0123456789"

      for(let i=0;i<length;i++){
        let randomNum = Math.floor(Math.random()*73 + 1)
        
        pass += str[randomNum]
      }

      setPassword(pass)
    }
    
    if(charAllowed === false && numberAllowed === false){
        
      for(let i=0;i<length;i++){
      let randomNum = Math.floor(Math.random()*52 + 1)
    
      pass += str[randomNum]
    
      }

      setPassword(pass)
    }


      
    
  },[length,numberAllowed,charAllowed,setPassword])




  useEffect(() =>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  const copyPasswordtoClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  },[password])


  
  
  return (
    <>
      <div className='flex justify-center'>
        <div className='bg-gray-600 w-200 max-w-2xl rounded-3xl px-10 py-5 h-35 my-18 flex flex-wrap'>
          
          <input className='w-125 h-8.5 bg-amber-50 rounded-l-xl text-2xl text-black text-center ' placeholder='password' input='text' value={password} readOnly/>
            
          
          
          <button className='bg-blue-500 h-8.5 w-18 rounded-r-lg text-center text-xl hover : cursor-pointer hover:bg-blue-700' onClick={copyPasswordtoClipboard}>copy</button>

          <input type='range' min='8' max ='30' className='cursor-pointer' id="bar" onChange={(event) => {
            setLength(event.target.value)
          }} defaultValue={8}/>
          <label for="bar" className='py-4.5 mr-10 ml-2'>Length({length})</label>


            
                
            
          

          <input type="checkbox" id="Numbers" className='hover:cursor-pointer' 
          defaultValue={numberAllowed} 
          onChange={() => {setnumberAllowed((prev) => !prev)}}></input>
          <label for="Numbers" className='py-4.5 mr-8 ml-1'>Numbers</label>

          
          <input type="checkbox" id="Numbers" className='hover:cursor-pointer'
          defaultValue={charAllowed}
          onChange={() => {setcharAllowed((prev) => !prev)}}
          ></input>
          <label for="Numbers" className='py-4.5 ml-1 '>Characters</label>


          
          
          

        </div>
      
      </div>
    </>
  )
}

export default App
