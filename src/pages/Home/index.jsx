import Banner from '../../components/Banner'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import logements from '../../assets/logements.json'
import colors from '../../utils/style/colors'

const HomeContainer = styled.div`
  width: 100vw;
  max-width: 1440px;
  height: 100vh;
  max-height: 1095px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CardsSection = styled.section`
  width: 9h0vw;
  max-width: 1440px;
  height: 80vh;
  max-height: 829px;
  border-radius: 25px;
  padding-top: 56px;
  margin-top: 20px;
  background-color: ${colors.secondary};
  z-index: -5;
  overflow: auto;
  scrollbar-width: none;
`

const CardsContainer = styled.div`
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  scrollbar-width: none;
  align-items: space-evenly;
`

function Home() {
  return (
    <HomeContainer>
      <Banner />
      <CardsSection>
        <CardsContainer>
          {logements &&
            logements.map((logement) => {
              return (
                <Link to="/src/pages/FicheLogement" key={logement.id}>
                  <Card
                    key={logement.id}
                    picture={logement.cover}
                    title={logement.title}
                  />
                </Link>
              )
            })}
        </CardsContainer>
      </CardsSection>
    </HomeContainer>
  )
}

export default Home
