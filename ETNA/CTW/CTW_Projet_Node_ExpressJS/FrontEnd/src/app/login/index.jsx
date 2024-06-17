import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import login from '../../public/login.jpg';
import logo from '../../public/shoes-logo.png';
import GOOGLE_ICON from '../../public/Google.png';
import axios from 'axios';
import Validation from '../../../../BackEnd/controllers/LoginValidation'


const Login = () => {

  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate();

  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}))
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(Validation(values));
    console.log(values)
    //validationErrors.email === "" && validationErrors.password === ""
    if (true) {
      try {
        const res = await axios.post('http://localhost:8000/login', values)
        .then(res =>  {
          console.log(res);
          if (res.status === 200) {
                navigate('/home');
          } else {
              alert("Les dinformations de connexion ne sont pas valides");
          }
      })
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Veuillez corriger les erreurs de validation.");
    }
  }
  
  return (
    <div className='w-full h-screen flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2 flex flex-col items-center'>
        <img src={login} className='w-full h-full object-cover' alt='Login visual'/>
      </div>

      <div className='w-full md:w-1/2 bg-[#f5f5f5] flex flex-col items-center p-6 md:p-12'>
        <img src={logo} className='w-40 h-40 object-cover' alt='Logo'/>
        
        <div className='w-full flex flex-col max-w-md'>
          <div className='w-full flex flex-col mb-4'>
            <h3 className='text-3xl font-semibold mb-2 text-center'>Connexion</h3>
            <p className='text-base mb-4 text-center'>Bon retour ! Veuillez entrer vos identifiants.</p> 
          </div>

        <form action='' onSubmit={handleSubmit}> 
          <div className='w-full flex flex-col mb-4'>

          <input 
            type='email' 
            placeholder='Email'
            name='email' 
            onChange={handleInput}
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' required />
            {errors.email && <span className='text-danger'> {errors.email}</span>}
            
            <input
            type='password' 
            placeholder='Mot de passe'
            name='password' 
            onChange={handleInput}    
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' required />
            {errors.password && <span className='text-danger'> {errors.password}</span>}

          </div>

          <div className='w-full flex items-center justify-between mb-4'>
            <div className='flex items-center'>
              <input type='checkbox' className='w-4 h-4 mr-2'/>
              <p className='text-sm'>Se souvenir de moi</p>
            </div>
            <Link to="/register" className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Mot de passe oublié ?</Link>
          </div>

          <div className='w-full flex flex-col mb-4'>
            <button type='submit' className='w-full text-white my-4 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
              Se connecter
            </button>
            <div className='w-full flex items-center justify-center'>
            <p className='text-sm font-normal text-[#060606]'>Pas encore de compte? <Link to="/register" className='font-semibold underline underline-offset-2 cursor-pointer'>Enregistrez-vous ici !</Link></p>
            </div>
            
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

        </div>
      </div>
    </div>    
  );
}

export default Login