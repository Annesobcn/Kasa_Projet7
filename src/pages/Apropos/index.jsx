import BackgroundImage2 from '../../assets/BackgroundSectionHeader2.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const AproposContainer = styled.div`
  position: relative;
  background-color: ${colors.secondary};
  border-radius: 25px;
  height: 223px;
  width: 90vw;
  max-width: 1240px;
  font-size: 16px;
`

const BannerImage2 = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
  filter: brightness(0.7);
`

function Apropos() {
  return (
    <AproposContainer>
      <BannerImage2 img src={BackgroundImage2} />
    </AproposContainer>
  )
}

export default Apropos
