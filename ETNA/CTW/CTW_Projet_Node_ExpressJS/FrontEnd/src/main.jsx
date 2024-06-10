import React, { Profiler } from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home";
import Panier from "./pages/Panier";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";
import NoPage from "./pages/NoPages";
import { BrowserRouter , Routes } from 'react-router-dom';
import './index.css'
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);