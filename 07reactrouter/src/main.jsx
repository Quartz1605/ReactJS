import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import Github from './components/Github.jsx'
import { githubInfoLoader } from './components/Github.jsx'

/*const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children: [
      {
        path:"",
        element:<Home />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"contact",
        element:<Contact />
      }
    ]

  }

]) */ //This was one way of doing it.

//Better way is this :
// /:"" isse mein parameter pass kar arha hu. jo mera useParams se mein access akr paunga.
//Given tarike se  aap internal routing bhi kar sakte ho.


const router = createBrowserRouter(
  createRoutesFromElements(
  
  <Route path='/' element={<Layout />} >
     <Route path='' element={<Home />} />
     <Route path='about' element={<About />} >
        <Route path='hello' />
     
     </Route>

     <Route path='contact' element={<Contact />} />
     <Route path='user/:userid' element={<User />} />
     <Route path='github' element={<Github />} loader={githubInfoLoader}/>
     


  </Route>
  )



)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
