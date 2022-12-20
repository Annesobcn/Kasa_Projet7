import React from 'react'
import * as style from './style.module.css'
import redstar from '../../assets/redstar.svg'
import greystar from '../../assets/greystar.svg'

const RatingStars = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className={style.rating}>
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className={style.redstar}
            src={redstar}
            alt="étoile rouge"
          />
        ) : (
          <img
            key={star.toString()}
            className={style.greystar}
            src={greystar}
            alt="étoile grise"
          />
        )
      )}
    </div>
  )
}
export default RatingStars
