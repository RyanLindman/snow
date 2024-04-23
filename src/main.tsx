import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/home/Home.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import OurServices from './views/services/OurServices.tsx'
import ScrollTop from './utility/scrollTop.tsx'
import ContactContent from './views/contact/ContactContent.tsx'

const router = createBrowserRouter([
   {
      path: '/',
      element: (
         <>
            <ScrollTop />
            <Home />
         </>
      ),
   },
   {
      path: '/vara-tjanster',
      element: (
         <>
            <ScrollTop />
            <OurServices />
         </>
      ),
   },

   {
      path: '/kontakt',
      element: (
         <>
            <ScrollTop />
            <ContactContent />
         </>
      ),
   },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
)
