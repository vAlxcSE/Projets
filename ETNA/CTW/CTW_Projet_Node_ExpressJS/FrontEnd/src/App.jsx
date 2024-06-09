import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from "./pages/Home";
import Panier from "./pages/Panier";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";
import NoPage from "./pages/NoPages"
import Products from './pages/Products';
import { useState } from "react";



export default function App() {
  return (
   
      <div>
        <BrowserRouter>
          <Routes>

              <Route index element={<Home/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/panier" element={<Panier/>}/>
              <Route path="/profil" element={<Profil/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="*" element={<NoPage/>}/>

          </Routes>
        </BrowserRouter>
      </div>
  );
}  