import React from 'react'

import styles from './Menu.module.scss'
import {ReactComponent as Logo} from 'assets/logo.svg'

import Seeker from './Seeker'
import Filters from './Filters'
import Sorter from './Sorter'
import Itens from './Itens'

const Menu = () => {
    const [search, setSearch] = React.useState('')
    const [filter, setFilter] = React.useState<number | null>(null)
    const [sorter, setSorter] = React.useState('')

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
                <div className={styles.menu__filters}>
                    <Filters filter={filter} setFilter={setFilter} />
                    <Sorter sorter={sorter} setSorter={setSorter} />
                </div>
                <Itens search={search} filter={filter} sorter={sorter} />
            </section>
        </main>
    )
}

export default Menu