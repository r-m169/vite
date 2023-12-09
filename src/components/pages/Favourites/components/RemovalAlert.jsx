import React from 'react'
import styles from "./removal-alert.module.css"

export default function RemovalAlert({ RemoveFromFavourite, closeAlert }) {
    const handleRemoveBtn = () => {
        RemoveFromFavourite()
        closeAlert()
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.alert}>
                <h3>Are you sure?</h3>
                <div >
                    <button onClick={handleRemoveBtn}>yes, remove</button>
                    <button onClick={closeAlert}>no, cancel</button>
                </div>
            </div>
        </div>
    )
}
