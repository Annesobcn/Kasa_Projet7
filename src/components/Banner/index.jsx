import styled from 'styled-components'
import colors from '../../utils/style/colors'
import BackgroundImage from '../../assets/BackgroundSectionHeader1.svg'

const BannerContainer = styled.div`
  position: relative;
  background-color: ${colors.secondary};
  border-radius: 25px;
  height: 223px;
  width: 90vw;
  max-width: 1240px;
  font-size: 16px;
`
const BannerImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
  filter: brightness(0.7);
`
const BannerText = styled.span`
  position: absolute;
  text-align: center;
  top: 35%;
  width: 90vw;
  height: 100vh;
  font-family: montserrat;
  font-size: 3rem;
  color: white;
`

function Banner() {
  return (
    <BannerContainer>
      <BannerImage img src={BackgroundImage} />
      <BannerText>Chez vous, partout et ailleurs</BannerText>
    </BannerContainer>
  )
}

export default Banner
