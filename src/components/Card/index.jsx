import React from 'react'
import * as style from './style.module.css'

const Card = ({ picture, title }) => {
  return (
    <div className={style.cardwrapper}>
      <img className={style.cardimage} src={picture} alt={title} />
      <div className={style.cardombre}></div>
      <p className={style.cardtitle}>{title}</p>
    </div>
  )
}

export default Card
