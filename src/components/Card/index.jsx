import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  max-width: 340px;
  max-height: 340px;
  border-radius: 10px;
  margin: 10px;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 375px) {
    width: 333px;
    max-height: 255px;
    border-radius: 10px;
    margin: 5px 0 5px 0;
  }
`
const CardImage = styled.img`
  height: 340px;
  max-width: 340px;
  object-fit: cover;
  align-self: center;
  border-radius: 10px;
  @media (max-width: 375px) {
    max-with: 332px;
    max-height: 255px;
    border-radius: 25px;
  }
`
const CardOmbre = styled.div`
  background: rgb(11, 11, 11);
  background: linear-gradient(
    0deg,
    rgba(11, 11, 11, 1) 0%,
    rgba(255, 255, 255, 0.006711409395973145) 50%
  );
  border-radius: 10px;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  @media (max-width: 375px) {
    max-with: 335px;
    max-height: 255px;
    border-radius: 10px;
  }
`

const CardTitle = styled.p`
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin-right: 6px;
  color: #ffffff;
  font-family: montserrat;
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 375px) {
    left: 4vw;
    top: 23vh;
  }
`

const Card = ({ picture, title }) => {
  return (
    <CardWrapper>
      <CardImage src={picture} alt={title} />
      <CardOmbre></CardOmbre>
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}

export default Card
