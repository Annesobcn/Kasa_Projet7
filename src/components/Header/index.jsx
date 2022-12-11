import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import LogoKasa from '../../assets/LogoKasa.svg'
import colors from '../../utils/style/colors'
import { NavLink } from 'react-router-dom'

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
  font-size: 24px;
  @media (max-width: 375px) {
    font-size: 12px;
  }
`
const Nav = styled.nav`
  ${NavContainer};
`

export const NavbarLink = styled(Link)`
  padding: 2px 15px;
  font-family: Montserrat;
  color: ${colors.primary};
  text-decoration: none;

  text-align: center;
  &:active {
    text-decoration: underline;
  }
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={LogoKasa} />
      </Link>
      <Nav>
        <NavbarLink
          to="/"
          className={({ isActive }) => ('underline' + isActive ? 'active' : '')}
        >
          Accueil
        </NavbarLink>

        <NavbarLink
          to="/about"
          className={({ isActive }) => ('underline' + isActive ? 'active' : '')}
        >
          A propos
        </NavbarLink>
      </Nav>
    </NavContainer>
  )
}

export default Header
