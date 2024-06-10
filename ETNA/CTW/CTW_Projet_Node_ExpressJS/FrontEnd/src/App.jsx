import React from 'react';
import React from 'react';
import { BrowserRouter as Router , Routes , Route , Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Panier from "./pages/Panier";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";
import NoPage from "./pages/NoPages"
import Products from './pages/Products';
import { useState } from "react";
import Header from './components/Header';



export default function App() {
  return (
   
      <div>
        <Router>
          <Routes>
              <Route path="/" element={<Header/>}>
              <Route index element={<Navigate to="/home"/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/panier" element={<Panier/>}/>
              <Route path="/profil" element={<Profil/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="*" element={<NoPage/>}/>
              </Route>
          </Routes>
        </Router>
      </div>
  );
}  