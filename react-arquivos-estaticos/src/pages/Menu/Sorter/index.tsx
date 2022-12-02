import React from 'react'

import styles from './Sorter.module.scss'
import optionsJson from './options.json'

type IOption = typeof optionsJson[0]

const Sorter = () => {
    return (
        <button className={styles.sorter}>
            <span>Ordenar por</span>
            <div className={styles.sorter__options}>
                {optionsJson.map((option: IOption) => (
                    <div
                        key={option.value}
                        className={styles.sorter__option}
                    >
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    )
}

export default Sorter