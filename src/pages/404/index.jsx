import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Page404 = styled.div`
  text-align: center;
  font-family: montserrat;
  width: 100vw;
  max-width: 1440px;
  height: 100vh;
  max-height: 1024px;
  position: relative;
  display: flex;
  flex-direction: column;
`

const Titre404 = styled.h1`
  color: ${colors.primary};
  font-size: 288px;
  font-weight: 700;
  margin-bottom: 50px;

  @media (max-width: 375px) {
    font-size: 96px;
  }
`
const Texte404 = styled.span`
  color: ${colors.primary};
  display: block;
  line-height: 142.6px;
  font-size: 36px;

  @media (max-width: 375px) {
    font-size: 18px;
    line-height: 142%;
    position: absolute;
    top: 25vh;
  }
`

const HomeLink = styled.a`
  color: ${colors.primary};
  text-decoration: underline;
  font-size: 18px;
  position: absolute;
  left: 40vw;
  top: 86vh;

  @media (max-width: 375px) {
    font-size: 14px;
    left: 18vw;
    top: 56vh;
  }
`

function Erreur404() {
  return (
    <Page404>
      <Titre404>404</Titre404>
      <Texte404>Oups! La page que vous demandez n'existe pas.</Texte404>
      <HomeLink to="/">Retourner sur la page d’accueil</HomeLink>
    </Page404>
  )
}

export default Erreur404
