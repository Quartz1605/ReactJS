import {useEffect,useState} from 'react' 
import { useLoaderData } from 'react-router-dom'

export default function Github(){

  //Without dependencies is like jabhi bhi component load hoga tabhi useEffect chalega.
  
  /*
  const [data,setdata] = useState(0)
  
  useEffect(() => {
    fetch('https://api.github.com/users/Quartz1605').then((resp) => resp.json()).then((resp) => setdata(resp)) 


  },[]) */

  const data = useLoaderData()

  return(
    <>
      <h1 className="bg-pink-200 text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers : {data.followers}</h1>
     <div className='flex gap-15'>
        <img src={data.avatar_url} className='w-50 rounded-lg mb-4'></img>
        <p>Name : {data.name}</p>
      </div>
    </>
  )
}


export const githubInfoLoader = async () => {
  const response =  await fetch('https://api.github.com/users/Quartz1605')

  return (response.json())
}

