import React , {useState} from 'react'
import img from '../../loginAssets/IMGLogin.jpg'
import logo from '../../loginAssets/shoes-logo.png'
import GOOGLE_ICON from '../../loginAssets/Google.png'
// import axios from 'axios'






function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmit(event) {
    event.preventDefault();
    axios.post('')
  }
  return (
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-1/2 h-full flex flex-col'>
          <div className='absolute top-[20%] left-[10%] flex flex col'>
           

          </div>
          <img src={img} className='w-full h-full object-cover'/>   
        </div>

        <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 items-center'>
          <img src={logo} className='w-full h-[311.42px] object-cover'/> 
          {/* <h1 className='text-x1 text-[#060606] font-semibold'>LOGO</h1> */}
          
          
          <div className='w-full flex flex-col max-w-[400px]'>
            <div className='w-full flex flex-col mb-2'>
              <h3 className='text-3xl font-semibold mb-2'>Connexion</h3>
              <p className='text-base mb-2'>Bon retour ! Veuillez entrer vos identifiants.</p> 
            </div>  

            <div className='w-full flex flex-col'>
              <input 
              type="email" 
              placeholder='Email'  
              className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>

              <input
              type="password" 
              placeholder='Mot de passe'  
              className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>
            </div>

          <div className ='w-full flex items-center justify-between'>
            <div className ='w-full flex items-center'>
              <input type='checkbox' className='w-4 h-4 mr-2'/>
              <p className='text-sm'>Se souvenir de moi</p>
            </div>

            <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Mot de passe oublié ?</p>
          </div>

          <div className='w-full flex flex-col my-4'>
            <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
            Se connecter
            </button>
            <button className='w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
            S'enregistrer
            </button>
          </div>

          <div className ='w-full flex items-center justify-center relative py-2'>
            <div className ='w-full h-[1px] bg-black/40'></div>
            <p className ='text-lg absolute text-black/80 bg-[#f5f5f5]'> OU </p>
          </div>
          <button className='w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
            <img src={GOOGLE_ICON} className='h-6 mr-2'/>
            S'enregistrer avec Google
          </button>
          

          <div className='w-full flex items-center justify-center'>
            <p className='text-sm font-normal text-[#060606]'>Pas encore de compte? <span className='font-semibold underline underline-offset-2 cursor pointer'>Enregistrez-vous ici !</span></p>
          </div> 

          </div>
        </div>
    </div>    
  )
}

export default Login
