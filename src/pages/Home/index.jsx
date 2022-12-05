import Banner from '../../components/Banner'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import logements from '../../assets/logements.json'

const HomeContainer = styled.div`
  width: 100v8;
  max-width: 1440px;
  height: 100v8;
  max-height: 1095px;
  color: ff6060;
`
const CardsSection = styled.section`
  width: 100vw;
  max-width: 1440px;
  height: 100vh;
  max-height: 829px;
  border-radius: 25px;
  padding-top: 56px;
`

const CardsContainer = styled.div`
  width: 100vw;
  max-width: 1440px;
  height: 100vh;
  max-height: 829px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  overflow: scroll;
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
                <Link key={logement.id}>
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
