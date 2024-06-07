import React, { Profiler } from 'react'
import ReactDOM from 'react-dom/client'
import Login from './components/Login'
import Register from './components/Register'
import Profil from './components/Profil'
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences/Preferences';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Menu , Example , classNames } from './components/Menu'
import './index.css'
import App from './components/App'

// Import React react dom 




// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Login/>
//   },
//   {
//     path: '/register',
//     element: <Register/>
//   },
//   {
//     path: '/menu',
//     element: <Menu/>
//   },
//   {
//     path: '/profil',
//     element: <Profil/>
//   },
//   {
//     path: '/dashboard',
//     element: <Dashboard/>
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)