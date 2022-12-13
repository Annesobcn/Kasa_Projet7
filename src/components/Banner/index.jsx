import * as style from './style.module.css'
import BackgroundImage from '../../assets/BackgroundSectionHeader1.svg'

function Banner() {
  return (
    <div className={style.bannercontainer}>
      <img className={style.bannerimage} src={BackgroundImage} />
      <span className={style.bannertext}>Chez vous, partout et ailleurs</span>
    </div>
  )
}

export default Banner
