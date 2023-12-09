import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./navbar.module.css"

export const Navbar = () => {
  return (
    <header className={styles.navbar}>
        <Link to={"/"}>WikiSearch</Link>
            <nav>
                <Link to={"/fav"}>Favourites</Link>
            </nav>
    </header>
  )
}
