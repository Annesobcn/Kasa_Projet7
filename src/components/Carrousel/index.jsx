import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import arrowForwardCarrousel from '../../assets/arrowForwardCarrousel.svg'
import arrowBackwardCarrousel from '../../assets/arrowBackwardCarrousel.svg'
import { Slide } from 'react-slideshow-image'
import { useParams } from 'react-router'
import logements from '../../assets/logements.json'

const ImageLogement = styled.img`
  width: 90vw;
  height: 415px;
  transform: translateY(-50%);
  left: 10vw;
  padding: 0.4rem 1.5rem;
  background: #ff6060;
  color: #ffffff;
  position: absolute;
`
const Arrow = styled.button`
  wwidth: 46px;
  height: 79px;
`
const properties = {
  preArrow: <Arrow {...Arrow}>{arrowForwardCarrousel}</Arrow>,
  nextArrow: <Arrow {...Arrow}>{arrowBackwardCarrousel}</Arrow>,
}

function Carrousel() {
  return (
    <Slide {...properties}>
      {logements &&
        logements.map((slide) => (
          <div key={slide.id}>
            <ImageLogement src={slide.pictures} alt="propriété" />
          </div>
        ))}
    </Slide>
  )
}
export default Carrousel
