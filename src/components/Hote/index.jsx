import React from "react"

import * as style from './style.module.css'

const Hote = ({ hote }) => {
    const isHoteSplited = hote.name.split(" ")
    const [name, lastname] = isHoteSplited

    return (
        <div className={style.hote}>
            <div className={style.hotename}>
                <p className={style.firstname}>{name.trim()}</p>
                <p className={style.lastname}>{lastname.trim()}</p>
            </div>

            <img src={hote.picture} alt="Proprietaire" className={style.hotephoto} />
        </div>
    )
}
export default Hote