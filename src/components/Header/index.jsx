import LogoKasa from '../../assets/LogoKasa.svg'
import { Link, NavLink } from 'react-router-dom'
import * as style from './style.module.css'

function Header() {
  return (
    <header>
      <Link to="/">
        <img className={style.homelogo} src={LogoKasa} alt="logo Kasa"/>
      </Link>
      <nav className={style.navcontainer}>
        <NavLink
          className={style.headerlink}
          activeClassName={style.activelink}
          exact
          to="/"
        >
          Accueil
        </NavLink>

        <NavLink
          className={style.headerlink}
          activeClassName={style.activelink}
          to="/about"
        >
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
