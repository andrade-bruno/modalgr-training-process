import React from 'react'

import styles from './Menu.module.scss'
import {ReactComponent as Logo} from 'assets/logo.svg'
import Seeker from './Seeker'

const Menu = () => {
    const [search, setSearch] = React.useState('')

    return (
        <main>
            <nav className={styles.nav}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <section className={styles.menu}>
                <h3 className={styles.menu__title}>Cardápio</h3>
                <Seeker search={search} setSearch={setSearch} />
            </section>
        </main>
    )
}

export default Menu