import Banner from '../../components/Banner'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import logements from '../../assets/logements.json'
import colors from '../../utils/style/colors'

const HomeContainer = styled.div`
  width: 100vw;
  max-width: 1440px;
  height: 1095px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CardsSection = styled.section`
  width: 90vw;
  max-width: 1440px;
  border-radius: 25px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-items: space-evenly;
  background-color: ${colors.secondary};
  z-index: -5;
`

const CardsContainer = styled.div`
  width: 90vw;
  height: 750px;
  display: flex;
  padding-top: 5vh;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
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
                <Link to="/ficheLogement" key={logement.id}>
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
