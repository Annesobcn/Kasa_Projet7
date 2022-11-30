import styled from 'styled-components'
import LogoKasaBlanc from '../../assets/LogoKasaBlanc.svg'

const HomelogoWhite = styled.img`
  height: 40px;
`

const FooterContainer = styled.footer`
  height: 209px;
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 10px 0;
`

const FooterText = styled.text`
  color: white;
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
