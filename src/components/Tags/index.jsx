import React from 'react'

const Tags = ({ getTag }) => {
  return (
    <div className={style.tag}>
      <p className={style.tagtexte}>{getTag}</p>
    </div>
  )
}
export default Tags
