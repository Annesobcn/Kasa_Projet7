import { Component } from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const CardTitle = styled.p`
  position: relative;
  width: 325px;
  top: -20%;
  left: 5%;
  color: #ffffff;
  font-family: montserrat;
  font-size: 1.1rem;
  font-weight: 500;
  z-index: 2;
`

const CardImage = styled.img`
  height: 340px;
  width: 340px;
  position: relative;
  object-fit: cover;
  align-self: center;
  border-radius: 10px;
  z-index: -1;
`

const CardWrapper = styled.div`
  width: 340px;
  height: 340px;
  border-radius: 10px;
  margin: 10px;
  background: rgb(11, 11, 11);
  background: linear-gradient(
    0deg,
    rgba(11, 11, 11, 1) 0%,
    rgba(255, 255, 255, 0.006711409395973145) 50%
  );
  z-index: 0;
  &:hover {
    cursor: pointer;
  }
`

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { picture, title } = this.props
    return (
      <CardWrapper>
        <CardImage src={picture} alt={title} />
        <CardTitle>{title}</CardTitle>
      </CardWrapper>
    )
  }
}

Card.propTypes = {
  title: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
}

export default Card
