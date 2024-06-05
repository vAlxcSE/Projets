import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from '../Components/Dashboard'
import Login from '../Components/Login'
import Register from '../Components/Register'
import './index.css'

// Import React react dom 
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  // {
  //   path: '/accueil',
  //   element: <Accueil/>
  // },
  {
    path: '/dashboard',
    element: <Dashboard/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)