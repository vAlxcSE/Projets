import React from 'react';
import { BrowserRouter as Router , Routes , Route , Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Panier from "./pages/Panier";
// import Dashboard from "./components/Dashboard";
import Profil from "./pages/Profile";
import Products from './pages/Products';
import { useState } from "react";
// import Header from './components/Navbar';



import ListPage from './app/list/index';
import Login from './app/login/index';
import NoPage from './app/error404/index';
import Register from './app/register/index';



export default function App() {
  return (
   
      <div>
        <Router>
          <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/profile" element={<Profil/>}/>
              <Route path="/panier" element={<Panier/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/list" element={<ListPage/>}/> 
              {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
              <Route path="*" element={<NoPage/>}/>
              <Route path="/" element={<Home/>}> 
              <Route index element={<Navigate to="/home"/>}/>
              </Route>
          </Routes>
        </Router>
      </div>
  );
}  