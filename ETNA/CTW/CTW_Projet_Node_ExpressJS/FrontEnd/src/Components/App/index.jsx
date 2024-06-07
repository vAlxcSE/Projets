import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Preferences from '../Preferences/Preferences';

import Login from '../Login';
import { useState } from 'react';

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
  }
  
  function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }
  
export default function App() {
    const [token, setToken] = useState();
  
    if(!token) {
      return <Login setToeeken={setToken} />
    }
  
      return (
        <div className="wrapper">
          <h1>Application</h1>
            <Router>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    
                    <Route path="/preferences" element={<Preferences/>}/>

                    {/* <Route path="/menu" element ={<Menu/>}/> */}

                    {/* <Route path="/profil" element={<Profil/>}/> */}

                    {/* <Route path="/register" element={<Register/>}/> */}
                    

                    <Route path="/" element={<login/>}/>

                </Routes>
            </Router>
        </div>
      );
    }

