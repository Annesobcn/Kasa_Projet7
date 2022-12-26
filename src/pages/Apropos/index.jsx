import BackgroundImage2 from '../../assets/BackgroundSectionHeader2.svg'
import * as style from './style.module.css'
import DropDownCollapse from '../../components/DropDownCollapse'

function Apropos() {
  return (
    <div className={style.aproposcontainer}>
      <div className={style.aproposbanner}>
        <img className={style.bannerimage2} src={BackgroundImage2} alt="Paysage" />
      </div>
      <section className={style.dropdownssection}>
        <div className={style.dropdowncontainer}>
          <DropDownCollapse
            titre="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />
        </div>
        <div className={style.dropdowncontainer}>
          <DropDownCollapse
            titre="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>
        <div className={style.dropdowncontainer}>
          <DropDownCollapse
            titre="Service"
            content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
        </div>
        <div className={style.dropdowncontainer}>
          <DropDownCollapse
            titre="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </section>
    </div>
  )
}

export default Apropos
