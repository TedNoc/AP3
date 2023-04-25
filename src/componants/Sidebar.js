import React from 'react'
import'../style/Sidebar.css'
import Image from '../assets/mdl.png'
import { Link } from 'react-router-dom'
export default function Sidebar(){ 
  
    return (
         <nav> 

           <ul className='liste'>
            <li className='items'><Link to="/Produits">Accueil</Link></li>
            <li className='items'><Link to="/inscription ">Inscription</Link></li>
            <li className='items'><Link to="/connecter">Connexion</Link></li>
            <li className='items'><Link to="/Admin">Admin</Link></li>
           </ul>
           

           <img className='mld' src={
            Image
        }
        />
         
         </nav>
    )
}
   