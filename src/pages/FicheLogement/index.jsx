import React from 'react'
import { useParams, Navigate } from 'react-router'
import logements from '../../assets/logements.json'
import styled from 'styled-components'
import Carrousel from '../../components/Carrousel'

const Fiche = styled.div`
  width: 1440px;
`
function FichePropriete() {
  const id = useParams()
  const ficheLogement = logements.find((logement) => logement.id === id.id)

  return (
    <div>
      <Fiche>
        <Carrousel />
      </Fiche>
    </div>
  )
}
export default FichePropriete
