import React from 'react'
import FiltersJson from './filters.json'
import styles from './Filters.module.scss'

type IOption = typeof FiltersJson[0]

interface Props {
    filter: number | null,
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filters({filter, setFilter}: Props) {
    const selectFilter = (option: IOption) => {
        if (filter === option.id) return setFilter(null)
        return setFilter(option.id)
    }

    return (
        <div className={styles.filters}>
            {FiltersJson.map((option: IOption) => (
                <button
                    className={`${styles.filters__filter} ${filter === option.id ? styles['filters__filter--active'] : ''}`}
                    key={option.id}
                    onClick={() => selectFilter(option)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    )
}