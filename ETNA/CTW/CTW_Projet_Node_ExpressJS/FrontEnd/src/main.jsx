import React, { Profiler } from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home";
import Panier from "./pages/Panier";
// import Dashboard from "./components/Dashboard";
import Profil from "./pages/Profile";
import NoPage from "./app/error404";
import { BrowserRouter , Routes } from 'react-router-dom';
import './index.css'
import App from './App'


import Login from "./app/login";
import Register from "./app/register";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);