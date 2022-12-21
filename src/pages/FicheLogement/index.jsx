import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import logements from '../../assets/logements.json'
import Carrousel from '../../components/Carrousel'
import RatingStars from '../../components/RatingStars'
import Tags from '../../components/Tags'
import Hote from '../../components/Hote'
import DropDownCollapse from '../../components/DropDownCollapse'
import * as style from './style.module.css'

function FichePropriete() {
  const id = useParams()
  const ficheLogement = logements.find((logement) => logement.id === id.id)
  const {
    title,
    location,
    rating,
    host,
    equipments,
    description,
    pictures,
  } = ficheLogement

  return (
    <>
      {ficheLogement ? (
        <section className={style.fiche}>
          <Carrousel pictures={ficheLogement?.pictures} />
          <div className={style.fichecontainer}>
            <div className={style.informations}>
              <h1 className={style.titrelogement}>{title}</h1>
              <p className={style.adresse}>{location}</p>
              <div className={style.tags}>
                {ficheLogement.tags.map((tag, index) => (
                  <Tags key={index} getTag={tag} />
                ))}
              </div>
            </div>
          
          <div className={style.hoterating}>
            <RatingStars rating={rating} />
            <Hote hote={host} />
          </div>
          </div>
        
        <div className={style.dropdowns}> 
        <DropDownCollapse title="description" content={description} />
        <DropDownCollapse title="equipement" content={equipments} />
        </div>
        </section>
      ) : (
        <Redirect replace to="/404" />
      )}
    </>
  )
}
export default FichePropriete
