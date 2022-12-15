import React from 'react'
import { Link } from 'react-router-dom'
import * as style from './style.module.css'

function Erreur404() {
  return (
    <div className={style.page404}>
      <h1 className={style.titre404}>404</h1>
      <span className={style.texte404}>
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link className={style.homelink} to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export default Erreur404
