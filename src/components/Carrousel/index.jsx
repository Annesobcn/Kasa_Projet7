import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import arrowForwardCarrousel from '../../assets/arrowForwardCarrousel.svg'
import arrowBackwardCarrousel from '../../assets/arrowBackwardCarrousel.svg'
import { Fade } from 'react-slideshow-image'
import { useParams } from 'react-router'
import logements from '../../assets/logements.json'

const ArrowForward = styled.button`
  width: 46px;
  height: 79px;
  background: none;
  border: 0px;
  color: white;
`
const ArrowBackward = styled(ArrowForward)

const ImagePropriete = styled.img`
  display: flex;
  align-items: center;
  justify-content: start;
  background-size: cover;
  width: 1240px;
  height: 415px;
`
const properties = {
  prevArrow: <ArrowForward>{arrowForwardCarrousel}</ArrowForward>,
  nextArrow: <ArrowBackward>{arrowBackwardCarrousel}</ArrowBackward>,
}
const Carrousel = (props) => {
  const { id } = useParams()
  const [pictures, setPictures] = useState([])

  useEffect(() => {
    const filterPictures = logements.find((logement) => logement.id === id)
      .pictures
    setPictures(filterPictures)
  }, [id])

  const affichagePictures = pictures.map((picture, index) => (
    <ImagePropriete
      {...properties}
      key={index}
      src={`${picture} - ${index}`}
      alt={picture.title}
    />
  ))
  return <Fade>{affichagePictures}</Fade>
}
export default Carrousel
