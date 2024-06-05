import React from 'react'
import img from '../../loginAssets/IMGLogin.jpg'







const Login = () => {
  return (
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-1/2 h-full flex flex-col'>
          <div className='absolute top [20%] left[10%] flex flex col'>
            {/* <h1 className='text 2x1 text-white font-bold my-4'>Trouvez la paire de vos reves</h1> */}
          
          </div>
          <img src={img} className='w-full h-full object-cover'/>   
        </div>

        <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between'>
          <h1 className='text-x1 text-[#060606] font-semibold'>LOGO</h1>
          
          
          <div  className='w-full flex flex-col max-w-[550px]'>
            <div  className='w-full flex flex-col mb-2'>
              <h3 className='text-3xl font-semibold mb-2'>Connexion</h3>
              <p className='text-base mb-2'>Bon retour ! Veuillez entrer vos identifiants.</p> 
            </div>  

            <div  className='w-full flex flex-col'>
              <input 
              type="email" 
              placeholder='Email'  
              className='w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>

              <input
              type="password" 
              placeholder='Mot de passe'  
              className='w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
            </div>

          <div classname ='w-full flex items-center justify-between'>
            <div classname ='w-full flex'>
              <input type='checkbox' className='w-4 h-4 mr-2'/>
              <p className='text-sm'>Se souvenir de moi</p>
            </div>

            <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Mot de passe oublié ?</p>
          </div>

          <div className='w-full flex flex-col my-4'>
            <button className='w-full bg-[#060606] rounded-md p-4 text-center fle x items-center justify-center'>
            Se connecter
            </button>

          </div>
          

          <div  className='w-full flex items-center justify-center'>
            <p className='text-sm font-normal text-[#060606]'>Pas encore de compte? <span classname='font semibold underline underline-offset-2 cursor pointer'>Enregistrez-vous ici !</span></p>
          </div> 

          </div>
        </div>
    </div>    
  )
}

export default Login
