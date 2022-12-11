import React, { useState } from 'react'
import styled from 'styled-components'
import arrow from '../../assets/arrow.svg'

const Carrousel = styled.div`
  display: block;
  height: 415px;
  margin: auto auto 30px auto;
  position: relative;
  width: 100%;
`

const Arrow = styled.img`
  position: absolute;
  width: 45px;
  z-index: 1;
  &:hover {
    cursor: pointer;
    filter: drop-shadow(2px 4px 6px black);
  }
`

const Left = styled(Arrow)`
  margin-left: 25px;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
`

function Carrousel({ images }) {
  /* Crée un Hook d'état */
  let [imgAfficher, changerImg] = useState(0)
  let nombreImg = images.length

  const imgPrecedente = () => {
    if (imgAfficher === 0) {
      changerImg(nombreImg - 1)
    } else {
      changerImg(imgAfficher - 1)
    }
    return changerImg
  }

  const imgSuivante = () => {
    if (imgAfficher === nombreImg - 1) {
      changerImg((nombreImg = 0))
    } else {
      changerImg(imgAfficher + 1)
    }
    return changerImg
  }

  return (
    <Carrousel>
      {nombreImg > 1 && (
        <Arrow
          Left
          src={fleche}
          alt="Contenu précedént"
          onClick={imgPrecedente}
        />
      )}
      {images.map((image, index) => {
        return (
          <img
            key={index}
            className={
              index === imgAfficher ? 'carrousel-img actif' : 'carrousel-img'
            }
            src={image}
            alt="Logement"
          />
        )
      })}
      {nombreImg > 1 && (
        <Arrow
          type={'right'}
          src={arrow}
          alt="Contenu suivant"
          onClick={imgSuivante}
        />
      )}
    </Carrousel>
  )
}

export default Carrousel
