import Banner from '../../components/Banner'
import styled from 'styled-components'

const HomeContainer = styled.div`
  widht: 100vw;
  height: 23vh;
  max-height: 1095px;
`

function Home() {
  return (
    <HomeContainer>
      <Banner />
    </HomeContainer>
  )
}

export default Home
