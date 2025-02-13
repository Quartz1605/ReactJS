import {useState,useContext} from 'react'
import UserContext from '../context/UserContext'



function Login(){

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const {setUser} = useContext(UserContext)
  
  const handleSubmit = (e) =>{

    e.preventDefault();
    setUser({username,password})



  }
    
  
  
  return(
      <div className='flex items-center justify-center h-screen w-screen'>
        <div className='flex-col items-center justify-center '>
          <h2 className='text-center text-4xl'>Login</h2>
          <input type="text" placeholder='username' value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='block mt-4 p-2' ></input>
          <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='block mt-4 p-2'></input>
          
          <button onClick={handleSubmit}className='block bg-amber-200 rounded-lg p-4 hover:cursor-pointer px-6 hover:bg-amber-400 mt-4'>Submit</button >
        </div>
        
        
        
        
      </div>
    )


}

export default Login