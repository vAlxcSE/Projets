import React, { useRef, useState, useEffect } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import login from '../../public/login.jpg';
import logo from '../../public/shoes-logo.png';
import GOOGLE_ICON from '../../public/Google.png';
import Validation from '../../../../BackEnd/controllers/RegValidation';
import axios from 'axios';

export default function Register () {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (errors.firstname === "" && errors.lastname === "" && errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8000/register', values, { timeout: 5000 })
        .then(res => {
          navigate('/login');
        })
        .catch(err => console.error(err));
    }
  }

  return (
    <div>
      <div className='w-full h-screen flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 flex flex-col items-center'>
          <img src={login} className='w-full h-full object-cover' alt='Login visual'/>
        </div>

        <div className='w-full md:w-1/2 bg-[#f5f5f5] flex flex-col items-center p-6 md:p-12'>
          <img src={logo} className='w-45 h-45 object-cover' alt='Logo'/>
          <div className='w-full flex flex-col max-w-md'>
            <div className='w-full flex flex-col mb-4'>
              <h3 className='text-3xl font-semibold mb-2'>S'enregistrer</h3>
              <p className='text-base mb-4'>Bienvenue parmi nous !</p>
            </div>  
            <form action='' onSubmit={handleSubmit}>
              <div className='w-full flex flex-col mb-4'>
                <input 
                  type='text'
                  placeholder='Prénom'
                  name='firstname'
                  onChange={handleInput}
                  className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                  required />
                {errors.firstname && <span className='text-danger'>{errors.firstname}</span>}

                <input 
                  type='text'
                  placeholder='Nom'
                  name='lastname'
                  onChange={handleInput}
                  className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                  required />
                {errors.lastname && <span className='text-danger'>{errors.lastname}</span>}

                <input 
                  type='email'
                  placeholder='Email'
                  name='email'
                  onChange={handleInput}
                  className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                  required />
                {errors.email && <span className='text-danger'>{errors.email}</span>}
              
                <input
                  type='password'
                  placeholder='Mot de passe'
                  name='password'
                  onChange={handleInput}
                  className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                  required />
                {errors.password && <span className='text-danger'>{errors.password}</span>}
              </div>

              <div className='w-full flex flex-col mb-4'>
                <button type='submit' className='w-full text-[#060606] my-4 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                  S'enregistrer
                </button>
                <div className='w-full flex items-center justify-center'>
                  <p className='text-sm font-normal text-[#060606]'>Déjà un compte? <Link to="/login" className='font-semibold underline underline-offset-2 cursor-pointer'>Connectez-vous ici !</Link></p>
                </div>
              </div>
            </form>

            <div className='w-full flex items-center justify-center relative py-2'>
              <div className='w-full h-[1px] bg-black/40'></div>
              <p className='text-lg absolute text-black/80 bg-[#f5f5f5] px-2'> OU </p>
            </div>

            <button type='button' className='w-full text-[#060606] my-4 font-semibold bg-white border-2 border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
              <img src={GOOGLE_ICON} className='h-6 mr-2' alt='Google Icon'/>
              S'enregistrer avec Google
            </button>
          </div>
        </div>
      </div> 
    </div>   
  )
}
