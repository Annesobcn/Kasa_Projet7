import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import arrow from '../../assets/arrow.svg'

const DropDownContainer = styled.div`
  width: 100vw;
  max-width: 1023px;
  margin: 2%;
  border-radius: 10px;
  background-color: ${colors.primary};
`

const DropDownHeader = styled.header`
  align-items: center;
  background-color: #ff6060;
  border-radius: 10px;
  display: inline-flex;
  height: 25%;
  min-height: 47px;
  width: 100vw;
  max-width: 1023px;
  text-align: left;
`

const DropDownTitle = styled.h4`
  color: #ffffff;
  margin: 5px 10px;
  font-family: montserrat;
  font-size: 24px;
  font-weight: 500;
`

const DropDownArrow = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  width: 100vw;
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.isOpen ? 'transform: rotate(-180deg);justify-content:start;' : ''};
`

const DropDownText = styled.ul`
  font-family: montserrat;
  background-color: ${colors.secondary};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  color: ${colors.primary};
  height: 75%;
  max-width: 1023px;
  margin-top: -10px;
  margin-bottom: -10px;
  min-height: 100px;
  padding: 25px 10px 10px 10px;
`

function DropdownCollapse({ titre, description }) {
  /* Crée un Hook d'état */
  const [open, setOpen] = useState(false)

  return (
    <DropDownContainer id={`DropDown${titre}`}>
      <DropDownHeader>
        <DropDownTitle>{titre}</DropDownTitle>
        <DropDownArrow
          open={open}
          onClick={() => setOpen(!open)}
          isOpen={open === true}
        >
          <img src={arrow} alt="Voir la description" />
        </DropDownArrow>
      </DropDownHeader>
      {
        /* Si le dropdown est à TRUE alors il affichera la description */
        open && <DropDownText>{description}</DropDownText>
      }
    </DropDownContainer>
  )
}

export default DropdownCollapse
