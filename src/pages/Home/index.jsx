import Banner from '../../components/Banner'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import logements from '../../assets/logements.json'
import * as style from './style.module.css'

function Home() {
  return (
    <div className={style.homecontainer}>
      <Banner />

      <div className={style.cardscontainer}>
        {logements.map((logement) => (
          <Link to={'/fichelogement/' + logement.id + '/#'} key={logement.id}>
            <Card
              key={logement.id}
              id={logement.id}
              picture={logement.cover}
              title={logement.title}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
