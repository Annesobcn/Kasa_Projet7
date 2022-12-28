import * as style from './style.module.css'
import BackgroundImage from '../../assets/BackgroundSectionHeader1.png'

function Banner() {
  return (
    <div className={style.bannercontainer}>
      <img className={style.bannerimage} src={BackgroundImage} alt="Paysage" />
      <span className={style.bannertext}>Chez vous, partout et ailleurs</span>
    </div>
  )
}

export default Banner
