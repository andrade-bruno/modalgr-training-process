import React from 'react'

import styles from './Seeker.module.scss'
import { CgSearch } from 'react-icons/cg'

interface Props {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Seeker = ({search, setSearch}: Props) => {
    return (
        <div className={styles.seeker}>
            <input
                placeholder='Buscar...'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <CgSearch size={20} color='#4C4D5F' />
        </div>
    )
}

export default Seeker