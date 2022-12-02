import React from 'react'

import styles from './Sorter.module.scss'
import optionsJson from './options.json'
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

type IOption = typeof optionsJson[0]

interface Props {
    sorter: string,
    setSorter: React.Dispatch<React.SetStateAction<string>>
}

const Sorter = ({sorter, setSorter}: Props) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const sorterName = sorter && optionsJson.find(i => i.value === sorter)?.name

    return (
        <button
            className={classNames({
                [styles.sorter]: true,
                [styles['sorter--active']]: sorter !== ''
            })}
            onClick={() => setIsOpen(!isOpen)}
            onBlur={() => setIsOpen(false)}
        >
            <span>{sorterName || 'Ordenar por'}</span>
            {!isOpen ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowUp size={20} />}
            <div
                className={classNames({
                    [styles.sorter__options]: true,
                    [styles['sorter__options--active']]: isOpen
                })}
            >
                {optionsJson.map((option: IOption) => (
                    <div
                        key={option.value}
                        className={styles.sorter__option}
                        onClick={() => setSorter(option.value)}
                    >
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    )
}

export default Sorter