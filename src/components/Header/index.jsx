import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import LogoKasa from '../../assets/LogoKasa.svg'
import colors from '../../utils/style/colors'

const HomeLogo = styled.img`
  height: 7vh;
  width: 22vw;
`

const NavContainer = styled.nav`
  height: 7vh;
  width: 90vw;
  max-width: 1240px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
`
export const StyledLink = styled(Link)`
  padding: 2px 15px;
  font-family: Montserrat;
  color: ${colors.primary};
  text-decoration: none;
  font-size: 1.5rem;
  text-align: center;
  width: 25vw;
  &:active {
    border-bottom: 2px solid;
  }
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={LogoKasa} />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
