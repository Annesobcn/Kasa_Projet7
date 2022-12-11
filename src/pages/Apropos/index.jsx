import BackgroundImage2 from '../../assets/BackgroundSectionHeader2.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DropDownCollapse from '../../components/DropDownCollapse'

const AproposContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2vw;
`

const AproposBanner = styled.div`
  position: relative;
  background-color: ${colors.secondary};
  border-radius: 25px;
  height: 223px;
  width: 100vw;
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
const DropDownsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Apropos() {
  return (
    <AproposContainer>
      <AproposBanner>
        <BannerImage2 img src={BackgroundImage2} />
      </AproposBanner>
      <DropDownsSection>
        <DropDownCollapse
          titre="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <DropDownCollapse
          titre="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <DropDownCollapse
          titre="Service"
          description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <DropDownCollapse
          titre="Sécurité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </DropDownsSection>
    </AproposContainer>
  )
}

export default Apropos
