import Banner from '../../components/Banner'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import logements from '../../assets/logements.json'
import colors from '../../utils/style/colors'

const HomeContainer = styled.div`
  display: flex;
  width: 100vw;
  max-width: 1440px;
  padding-top: 5vh;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
`

const CardsContainer = styled.div`
  max-width: 1240px;
  margin: 5vh;
  width: 90vw;
  max-height: 829px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 5vh 4vw;
  border-radius: 25px;
  background-color: ${colors.secondary};
`

function Home() {
  return (
    <HomeContainer>
      <Banner />

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
    </HomeContainer>
  )
}

export default Home
