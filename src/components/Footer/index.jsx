import styled from 'styled-components'
import LogoKasaBlanc from '../../assets/LogoKasaBlanc.svg'
import * as style from './style.module.css'

function Footer() {
  return (
    <footer className={style.footercontainer}>
      <img className={style.homelogowhite} src={LogoKasaBlanc} />
      <span className={style.footertext}>
        <p>© 2020 Kasa. All rights reserved</p>
      </span>
    </footer>
  )
}

export default Footer
