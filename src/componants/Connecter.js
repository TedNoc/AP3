import React from 'react'
import { useState } from 'react'; // Importation des hooks useState
import { useForm } from "react-hook-form"; // Importation du hook useForm
import axios from 'axios'; // Importation de la librairie axios pour effectuer des requêtes HTTP
import '../style/Connecter.css'; // Importation du fichier CSS
import { useNavigate } from "react-router-dom"; // Importation de la fonction useNavigate pour naviguer entre les pages de l'application

export default function Connexion() {
    const { register, handleSubmit, formState: { errors } } = useForm(); // Déclaration du hook useForm pour gérer le formulaire
    let navigate = useNavigate(); // Initialisation de la fonction useNavigate

    const [mail, setMail] = useState("") // Initialisation de l'état mail à une chaîne vide
    const [mdp, setMdp] = useState("") // Initialisation de l'état mdp à une chaîne vide
    const [role,setRole] = useState("") // Initialisation de l'état role à une chaîne vide
    const ls = localStorage; 
    ls.clear();

    // Fonction pour gérer la connexion de l'utilisateur
    const handleConnexion = async () => {
        await axios.post(`http://localhost:8000/connexion`, { // Envoi d'une requête PUT à l'API
            mail: mail, // Ajout de l'adresse mail de l'utilisateur dans le corps de la requête
            mdp: mdp, // Ajout du mot de passe de l'utilisateur dans le corps de la requête 
            role: role
        })
        .then(res => {

           console.log(res)
            
            if (res.status === 200) {
            
             alert("Connexion réussie")
            
             ls.setItem ("mail", res.data.mail);
            
            ls.setItem ("role", res.data.role);
            
             console.log(res.data)
            
            
            
            
            if (res.data.role === 1 ){
            
             navigate("/admin");
            
             }
            
            
            
            
            if (res.data.role === 0){
            
             navigate("/Produits");
            
             }
            
            }
            
             else { // Sinon, la connexion a échoué
            
             alert("Erreur de connexion")
           }
            
         })
    }

    // Rendu du composant
    return (
        <div className='container' style={{ marginTop:'200px'}}>
            <h2> Connexion </h2>

            <form className='form' onSubmit={handleSubmit(handleConnexion)}>
                <label>Adresse email </label>
                <input {...register("mail", { required: true })} onChange={(e) => setMail(e.target.value)} />

                <label>Mot de passe </label>
                <input type="password" {...register("mdp", { required: true })} onChange={(e) => setMdp(e.target.value)} />

                {(errors.mail || errors.mdp) ? <span>Tous les champs doivent être remplis</span> : ""}

                <input type="submit" />
            </form>
        </div>
    )
}