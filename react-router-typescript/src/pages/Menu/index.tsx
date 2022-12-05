import React from 'react'

import styles from './Menu.module.scss'
import theme from 'styles/theme.module.scss'

import Seeker from './Seeker'
import Filters from './Filters'
import Sorter from './Sorter'
import Itens from './Itens'

const Menu = () => {
    const [search, setSearch] = React.useState('')
    const [filter, setFilter] = React.useState<number | null>(null)
    const [sorter, setSorter] = React.useState('')

    return (
        <section>
            <h3 className={theme.title}>Cardápio</h3>
            <Seeker search={search} setSearch={setSearch} />
            <div className={styles.menu__filters}>
                <Filters filter={filter} setFilter={setFilter} />
                <Sorter sorter={sorter} setSorter={setSorter} />
            </div>
            <Itens search={search} filter={filter} sorter={sorter} />
        </section>
    )
}

export default Menu