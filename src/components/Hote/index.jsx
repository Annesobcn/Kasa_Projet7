import React from "react"

const Hote = ({ hote }) => {
    const isHoteSplited = hote.name.split(" ")
    const [name, lastname] = isHoteSplited

    return (
        <div className={style.hote}>
            <div className={hotename}>
                <p className={style.firstname}>{name.trim()}</p>
                <p className={style.lastname}>{lastname.trim()}</p>
            </div>

            <img src={host.picture} alt="Proprietaire" className={hotephoto} />
        </div>
    )
}
export default Hote