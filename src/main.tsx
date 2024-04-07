import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/home/Home.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import OurServices from './views/services/OurServices.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/vara-tjanster',
    element: <OurServices />,
  
    
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
