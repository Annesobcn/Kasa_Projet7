import styled from 'styled-components'
import LogoKasaBlanc from '../../assets/LogoKasaBlanc.svg'

const HomelogoWhite = styled.img`
  height: 25%;
`

const FooterContainer = styled.footer`
  height: 20vh;
  width: 100vw;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  font-size: 16px;
`

const FooterText = styled.span`
  color: white;
  font-family: montserrat;
  font-size: 1.5rem;
`

function Footer() {
  return (
    <FooterContainer>
      <HomelogoWhite src={LogoKasaBlanc} />
      <FooterText>
        <p>© 2020 Kasa. All rights reserved</p>
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
