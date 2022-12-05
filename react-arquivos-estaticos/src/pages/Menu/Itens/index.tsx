import React from 'react'

import styles from './Itens.module.scss'
import itensJson from './itens.json'
import classNames from 'classnames'

type IItem = typeof itensJson[0]

interface Props {
    search: string,
    filter: number | null,
    sorter: string
}

const Itens = (props: Props) => {
    const [list, setList] = React.useState(itensJson)
    const { search, filter, sorter } = props

    const testQuery = (title: string) => {
        const regex = new RegExp(search, 'i')

        return regex.test(title)
    }

    const testFilter = (id: number) => {
        if (filter !== null) return filter === id
        return true
    }

    React.useEffect(() => {
        const newList = itensJson.filter(
            (item) => testQuery(item.title) && testFilter(item.category.id)
        )
        setList(newList)
    }, [search, filter])

    return (
        <div className={styles.itens}>
            {list.map((item: IItem) => (
                <section
                    key={item.id}
                    className={styles.item}
                >
                    <header className={styles.item__photo}>
                        <img src={item.photo} alt={item.title} />
                    </header>
                    <div className={styles.item__description}>
                        <header className={styles.item__title}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </header>
                        <footer className={styles.item__tags}>
                            <div className={classNames({
                                [styles.item__category]: true,
                                [styles[`item__category__${item.category.label.toLowerCase()}`]]: true
                            })}>
                                {item.category.label}
                            </div>
                            <div className={styles.item__portion}>
                                {item.portion}g
                            </div>
                            <div className={styles.item__serving}>
                                {item.serving} pessoa{item.serving > 1 ? 's' : null}
                            </div>
                            <div className={styles.item__price}>
                                R$ {item?.price.toFixed(2)}
                            </div>
                        </footer>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default Itens