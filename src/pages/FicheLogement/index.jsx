import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import logements from '../../assets/logements.json'
import Carrousel from '../../components/Carrousel'
import * as style from './style.module.css'

function FichePropriete() {
  const id = useParams()
  const ficheLogement = logements.find((logement) => logement.id === id.id)

  return (
    <>
      {ficheLogement ? (
        <div>
          <div className={style.fiche}>
            <Carrousel pictures={ficheLogement?.pictures} />
          </div>
        </div>
      ) : (
        <Redirect replace to="/404" />
      )}
    </>
  )
}
export default FichePropriete
