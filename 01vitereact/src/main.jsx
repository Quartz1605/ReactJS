import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './App.jsx'

//Yeh real wala code hai.
 createRoot(document.getElementById('root')).render(
   <StrictMode>
     <App />
   </StrictMode>
) 

/*

//Aap yaha pe bhi function banake ke bhi pass kar sakte ho directly into render.



function myElement(){
  return(
    <div>
      <h1>Hell nahh </h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  
    myElement()
  

)

//Everything before getting executed,gets converted into a js element like below which is done by bundler(for eg "vite") in the .render() method.Parsing karte hai wo.
//But if you pass a element like below into the render() it won't work as it expects a certain syntax.


const reactElement = {
  type: 'a',
  props: {
    href : 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google.'
}

//How to create a element using react jisse ki hum usse render mein pass kar paaye.  

const reactElement2 = React.createElement(
  "a",{
    href : "https://google.com",
    target : "_blank"
  },"Click me to visit google"
)

ReactDOM.createRoot(document.getElementById("root")).render(
  reactElement2
) */