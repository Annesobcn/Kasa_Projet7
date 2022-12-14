import React from 'react'
import * as style from './style.module.css'

function Erreur404() {
  return (
    <div className={style.page404}>
      <h1 className={style.titre404}>404</h1>
      <span className={style.texte404}>
        Oups! La page que vous demandez n'existe pas.
      </span>
      <a className={style.homelink} to="/">
        Retourner sur la page d’accueil
      </a>
    </div>
  )
}

export default Erreur404
