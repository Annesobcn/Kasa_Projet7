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

  @media (max-width: 375px) {
    width: 335px;
    height: 111px;
    border-radius: 10px;
  }
`
const BannerImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
  filter: brightness(0.7);
  @media (max-width: 375px) {
    border-radius: 10px;
  }
`
const BannerText = styled.span`
  position: absolute;
  text-align: center;
  top: 35%;
  width: 90vw;
  font-family: montserrat;
  font-size: 3rem;
  color: white;
  @media (max-width: 375px) {
    font-size: 24px;
  }
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
