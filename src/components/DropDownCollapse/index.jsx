import React, { useState, useRef } from 'react'
import Arrow from '../Arrow'
import './style.css'

export default function DropDownCollapse(props) {
  const [setOpen, setOpenState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('arrowup')

  const content = useRef(null)

  function DropDownToggle() {
    setOpenState(setOpen === '' ? 'open' : '')
    setHeightState(
      setOpen === 'open' ? '0px' : `${content.current.scrollHeight}px`
    )
    setRotateState(setOpen === 'open' ? 'arrowup' : 'arrowdown')
  }
  return (
    <section className="dropdowncontainer">
      <button className={`dropdownheader ${setOpen}`} onClick={DropDownToggle}>
        <h2 className="dropdowntitle">{props.titre}</h2>
        <Arrow className={`${setRotate}`} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="dropdowncontent"
      >
        <div>
          <p className="dropdowntext">{props.content}</p>
        </div>
      </div>
    </section>
  )
}
