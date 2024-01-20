import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom"
import Contact from './routes/Contact/Contact'
import Home from './routes/home/Home'
import Projects from './routes/Projects/Projects'
import Resume from './routes/Resume/Resume'
import './index.css'

const myRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}></Route>
      <Route path='resume' element={<Resume />}></Route>
      <Route path='projects' element={<Projects />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='*' element={<div>Sorry Path Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRoute} />
  </React.StrictMode>,
)
