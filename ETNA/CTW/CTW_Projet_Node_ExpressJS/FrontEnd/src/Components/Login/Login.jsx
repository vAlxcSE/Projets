import React from 'react'
import './Login.css'
import '../../App.css'
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/Logo.png'
import { Link, NavLink } from 'react-router-dom'
import { FaUserShield } from "react-icons/fa"
import { AiOutlineSwapRight } from "react-icons/ai"

const Login = () => {
  return (
    <div className='loginPage flex'>
    <div className='container flex'>

        {/* <div className='videoDiv'>
            <video src={video} autoPlay muted loop></video>

            <div className="textDiv">
                <h2 className='Title'>Création et vente de products d'exception</h2>
                <p>ABC</p>
            </div>
            <div className="footerDiv flex">
            <span className="text">Pas encore de compte ?</span>
            <Link to= {'/register'}>
                <button className ='btn'>S'enregitrer</button>
            </Link>
            </div> 
        </div> */}

    <div className="formDiv flex">
        <div className="headerDiv">
            <img src={logo} alt="Logo Image"></img>
            <h3>Bon retour !</h3>
        </div>

        <form action=""className='form grid'>
            <span>Status de connexion</span>
            <div className="inputDiv">
                <label htmlFor="username">Pseudo</label>
                <div className="input flex">
                    <FaUserShield className='icon'/>
                    <input type="text" name="username" placeholder="Entrez votre nom d'utilisateur" />
                </div>

            </div>

            <div className="inputDiv">
                <label htmlFor="password">Mot de passe</label>
                <div className="input flex">
                    <FaUserShield className='icon'/>
                    <input type="password" name="password" placeholder="Entrez votre mot de passe" />
                </div>
            </div>

            <button type ='submit' className='btn flex'>
                <span>Se connecter</span>
                <AiOutlineSwapRight className='icon'/>
            </button>

            <span className='forgotPassword'>
                Mot de passe oublié? <a href="">Cliquez ici</a>

            </span>
        </form>
    </div>

    </div>
    </div>
  )
}

export default Login
