import React from 'react'
import FiltersJson from './filters.json'
import styles from './Filters.module.scss'

type IOption = typeof FiltersJson[0]

export default function Filters() {
    const selectFilter = (option: IOption) => {
        
    }

    return (
        <div className={styles.filters}>
            {FiltersJson.map((option: IOption) => (
                <button
                    className={styles.filters_filter}
                    key={option.id}
                    onClick={() => selectFilter(option)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    )
}