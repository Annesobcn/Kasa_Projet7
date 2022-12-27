import React, { useState, useRef } from 'react'
import Arrow from '../Arrow'
import './style.css'

export default function DropDownCollapse(props) {
  const [openCollapse, setOpenCollapse] = useState('')
const [heightCollapse, setHeightCollapse] = useState('0px')
const [rotateCollapse, setRotateCollapse] = useState('arrowup')
const content = useRef(null)

function DropDownToggle() {
    setOpenCollapse(openCollapse === '' ? 'open' : '')
    setHeightCollapse(
     openCollapse === 'open' ? '0px' : `${content.current.scrollHeight}px`
    )
    setRotateCollapse(openCollapse === 'open' ? 'arrowup' : 'arrowdown')
  }

  
  return (
    <section className="dropdowncontainer">
      <button className={`dropdownheader ${openCollapse}`} onClick={DropDownToggle}>
        <h2 className="dropdowntitle">{props.titre}</h2>
        <Arrow className={`${rotateCollapse}`} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${heightCollapse}` }}
        className="dropdowncontent"
      >
        <div>
          {
            props.titre !== "Equipement" ? (
              <p  className="dropdowntext">{props.content}</p>
            ) : (
<div  className="dropdownlist">
  <ul>
  {props.content.map((index) =>{
    return  <li key={index}> {index}</li>
  })}
  </ul>
  </div>
            )
          }
        </div>
      </div>
    </section>
  )
}
