import { Link } from 'react-router-dom'
import styled from 'styled-components'
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
  padding: 2px 15px;
  font-family: Montserrat;
  color: #ff6060;
  text-decoration: none;
  font-size: 24px;
  text-align: center;
  &:active {
    border-bottom: 1px solid;
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
