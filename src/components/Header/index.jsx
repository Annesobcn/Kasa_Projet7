import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import LogoKasa from '../../assets/LogoKasa.svg'

const HomeLogo = styled.img`
  height: 62px;
  width: 210px;
`

const NavContainer = styled.nav`
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={LogoKasa} />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/src/pages/Apropos">A propos</StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
