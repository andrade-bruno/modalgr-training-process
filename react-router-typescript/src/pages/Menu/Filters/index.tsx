import React from 'react'
import FiltersJson from './filters.json'
import styles from './Filters.module.scss'
import classNames from 'classnames'

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
                    className={classNames({
                        [styles.filters__filter]: true,
                        [styles['filters__filter--active']]: filter === option.id
                    })}
                    key={option.id}
                    onClick={() => selectFilter(option)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    )
}