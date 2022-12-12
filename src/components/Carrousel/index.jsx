import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import arrowForwardCarrousel from '../../assets/arrowForwardCarrousel.svg'
import arrowBackwardCarrousel from '../../assets/arrowBackwardCarrousel.svg'
import { Slide } from 'react-slideshow-image'
import { useParams } from 'react-router'
import logements from '../../assets/logements.json'

const ImageLogement = styled.img`
  width: 1240px;
  height: 415px;
`
const Arrow = styled.button`
  wwidth: 46px;
  height: 79px;
`

function Carrousel() {
  return (
    <div>
      {logements &&
        logements.map((slide) => (
          <div key={slide.id}>
            <ImageLogement src={slide.pictures} alt="propriété" />
          </div>
        ))}
    </div>
  )
}
export default Carrousel
