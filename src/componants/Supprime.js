import React from 'react'

import { useEffect, useState } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom'






export default function Quiz() {

    const [quiz, setQuiz] = useState([])

    const [affichage, setAffichage] = useState(false)




    const recup = async () => {

        await axios.get(`http://localhost:8000/produit`)

            .then(res => {

                console.log(res)

                setQuiz(res.data)

                setAffichage(true)

            })

    }




    useEffect(() => {

        recup()

    }, [])




  return (

  <div className='body'>

            <h2> Les produits </h2>

            <div className="box">

                {affichage ?

                    quiz.map(produit => (

                        <div>

                            <div className='box-title' style={{ marginTop:'200px'}}>

                                Produit n°{produit.id}

                            </div>

                            <div className='box-body'>

                            {produit.Articles}  {produit.Prix}

                                <img src={`${process.env.PUBLIC_URL}/images/${produit.Image}`} width="200px"/>

                            </div>

                            <div className='box-footer'>

                                <Link to={'/Del/'+ produit.id}>supprimer </Link>

                            </div>

                           

                        </div>

                    ))

                    : <p>Chargement...</p>

                }

               

               <p> <Link to="/Admin"><input type='button' value='Ajouter un article' style={{ width:'200px'}}/></Link></p>

            </div>

        </div>

    )

}