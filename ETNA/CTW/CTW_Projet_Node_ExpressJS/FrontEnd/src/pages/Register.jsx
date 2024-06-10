import React from 'react'
import img from '../loginAssets/IMGLogin.jpg'
import logo from '../loginAssets/shoes-logo.png'
import GOOGLE_ICON from '../loginAssets/Google.png'
import { useRef, useState, useEffect } from 'react';
import Axios from "axios"

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*?&]).{8,24}$/;

const Register = () => {
  const userRef =useRef();
  const errRef =useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchpwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchUser] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // useEffect (() => {
  //   userRef.current.focus ();
  // }, [])

  useEffect (() => {
    const result =USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user])

  useEffect (() => {
    const result =USER_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchpwd;
    setValidPwd(match);
  }, [pwd, matchpwd])

  useEffect (() => {
    setErrMsg ('');
  }, [user, pwd, matchpwd])
  
  function handleSubmit(event) {
    event.preventDefault();
    axios.post('')

  }
  return (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    

    <div className='w-full h-screen flex flex-col md:flex-row'>
    <div className='w-full md:w-1/2 flex flex-col items-center'>
      <img src={img} className='w-full h-full object-cover' alt='Login visual'/>
    </div>

    <div className='w-full md:w-1/2 bg-[#f5f5f5] flex flex-col items-center p-6 md:p-12'>
      <img src={logo} className='w-45 h-45 object-cover' alt='Logo'/>
      {/* <h1 className='text-xl text-[#060606] font-semibold'>LOGO</h1> */}

      <div className='w-full flex flex-col max-w-md'>
        <div className='w-full flex flex-col mb-4'>
          <h3 className='text-3xl font-semibold mb-2'>S'enregistrer</h3>
          <p className='text-base mb-4'>Bienvenue parmi nous !</p> 
        </div>  
      <form onSubmit={handleSubmit}>
        <div className='w-full flex flex-col mb-4'>

          <input 
            type='email' 
            placeholder='Email'  
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>

          <input
            type='password' 
            placeholder='Mot de passe'  
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>

          <input
            type='comfirmPassword' 
            placeholder='Confirmer le mot de passe'  
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>  
        
        </div>

        <div className='w-full flex flex-col mb-4'>
          <button className='w-full text-[#060606] my-4 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
            S'enregistrer
          </button>
          <div className='w-full flex items-center justify-center'>
                <p className='text-sm font-normal text-[#060606]'>Déjà un compte? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Connectez-vous ici !</span></p>
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
  </section>   
);
}

export default Register;