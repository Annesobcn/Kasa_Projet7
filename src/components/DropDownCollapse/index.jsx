import React, { useState } from 'react'
import { useEffect } from 'react'
import arrowup from '../../assets/arrowup.svg'
import arrowdown from '../../assets/arrowdown.svg'
import * as style from './style.module.css'
function DropdownCollapse({ titre, description }) {
  /* Crée un Hook d'état */
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className={style.dropdowncontainer} id={`DropDown${titre}`}>
      <div className={style.dropdownheader}>
        <h2 className={style.dropdowntitle}>{titre}</h2>
        <span
          className={`style.dropdownarrow ${
            isOpen === !isOpen ? 'isrotated' : ''
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={arrowdown} alt="En savoir plus" />
        </span>
      </div>
      {
        /* Si le dropdown est à TRUE alors il affichera la description */
        isOpen && <div className={style.dropdowntext}>{description}</div>
      }
    </section>
  )
}

export default DropdownCollapse
