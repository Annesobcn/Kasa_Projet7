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

const properties = {
  preArrow: <Arrow {...Arrow}>{arrowForwardCarrousel}</Arrow>,
  nextArrow: <Arrow {...Arrow}>{arrowBackwardCarrousel}</Arrow>,
}

function Carrousel() {
  return (
    <Slide {...properties}>
      {logements.map((images, id) => (
        <ImageLogement key={`${id}-${images}`}>{images}</ImageLogement>
      ))}
    </Slide>
  )
}
export default Carrousel
