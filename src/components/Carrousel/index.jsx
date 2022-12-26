import React, { useState } from 'react'
import * as style from './style.module.css'
import arrow from '../../assets/arrowForwardCarrousel.svg'
import arrowback from '../../assets/arrowBackwardCarrousel.svg'

const Carrousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0)
  const length = pictures.length

  const nextPic = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevPic = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <div className={style.carrousel}>
      {pictures.map((picture, index) => {
        return (
          <div
            key={index}
            className={` index === current ? ${style.carrouselpictureactive} : ${style.carrouselpictureinactive}`}
          >
            {index === current && (
              <img
                src={picture}
                alt="Images du logement"
                className={style.carrouselpicture}
              />
            )}
          </div>
        )
      })}

      {length > 1 ? (
        <>
          <div className={style.previous} onClick={prevPic}>
            <img
              src={arrowback}
              // eslint-disable-next-line
              alt="précédente"
              className={style.arrowback}
            />
          </div>
          <div className={style.next} onClick={nextPic}>
            <img src={arrow}
              // eslint-disable-next-line
               alt="suivante" 
               className={style.arrow} />
          </div>
        </>
      ) : null}
      <div className={style.containerindex}>
        {current + 1} / {length}
      </div>
    </div>
  )
}

export default Carrousel
