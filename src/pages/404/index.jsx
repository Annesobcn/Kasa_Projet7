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
  font-size: 150px;

  @media (max-width: 375px) {
    font-size: 95px;
  }
`
const Texte404 = styled.span`
  color: ${colors.primary};
  display: block;
  font-size: 36px;

  @media (max-width: 375px) {
    font-size: 18px;
  }
`

const HomeLink = styled.a`
  color: ${colors.primary};
  text-decoration: underline;
  font-size: 18px;
  position: absolute;
  bottom: 10vh;
  left: 35vw;
  @media (max-width: 375px) {
    font-size: 14px;
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
