import React, { useState } from 'react';
import img from '../../loginAssets/IMGLogin.jpg';
import logo from '../../loginAssets/shoes-logo.png';
import GOOGLE_ICON from '../../loginAssets/Google.png';
// import axios from 'axios'

async function loginUser(credentials) {
  return fetch('http://localhost:5134/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 
function Login ({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
  }
  
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   // axios.post('')
  // }

  return (
    <div className='w-full h-screen flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2 flex flex-col items-center'>
        <img src={img} className='w-full h-full object-cover' alt='Login visual'/>
      </div>

      <div className='w-full md:w-1/2 bg-[#f5f5f5] flex flex-col items-center p-6 md:p-12'>
        <img src={logo} className='w-40 h-32 object-cover' alt='Logo'/>
        {/* <h1 className='text-xl text-[#060606] font-semibold'>LOGO</h1> */}
        
        <div className='w-full flex flex-col max-w-md'>
          <div className='w-full flex flex-col mb-4'>
            <h3 className='text-3xl font-semibold mb-2'>Connexion</h3>
            <p className='text-base mb-4'>Bon retour ! Veuillez entrer vos identifiants.</p> 
          </div>  
        <form onSubmit={handleSubmit}>
          <div className='w-full flex flex-col mb-4'>
            <input 
              type='email' onChange={e => setEmail(e.target.value)} 
              placeholder='Email'  
              className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>

            <input
              type='password' onChange={e => setPassword(e.target.value)}
              placeholder='Mot de passe'  
              className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>
          </div>

          <div className='w-full flex items-center justify-between mb-4'>
            <div className='flex items-center'>
              <input type='checkbox' className='w-4 h-4 mr-2'/>
              <p className='text-sm'>Se souvenir de moi</p>
            </div>
            <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Mot de passe oublié ?</p>
          </div>

          <div className='w-full flex flex-col mb-4'>
            <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
              Se connecter
            </button>
            <button className='w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
              S'enregistrer
            </button>
          </div>
        </form>

          <div className='w-full flex items-center justify-center relative py-2'>
            <div className='w-full h-[1px] bg-black/40'></div>
            <p className='text-lg absolute text-black/80 bg-[#f5f5f5] px-2'> OU </p>
          </div>
          
          <button className='w-full text-[#060606] my-4 font-semibold bg-white border-2 border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
            <img src={GOOGLE_ICON} className='h-6 mr-2' alt='Google Icon'/>
            S'enregistrer avec Google
          </button>

          <div className='w-full flex items-center justify-center'>
            <p className='text-sm font-normal text-[#060606]'>Pas encore de compte? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Enregistrez-vous ici !</span></p>
          </div>
        </div>
      </div>
    </div>    
  );
}

export default Login;