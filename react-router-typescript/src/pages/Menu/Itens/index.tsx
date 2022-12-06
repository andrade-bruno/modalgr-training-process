import React from 'react'

import styles from './Itens.module.scss'
import menuJson from 'data/menu.json'
import { Menu, Dish } from 'types/dish'
import DishTags from 'components/DishTags'

interface Props {
    search: string,
    filter: number | null,
    sorter: string
}

const Itens = (props: Props) => {
    const [list, setList] = React.useState(menuJson)
    const { search, filter, sorter } = props

    const testQuery = (title: string) => {
        const regex = new RegExp(search, 'i')

        return regex.test(title)
    }

    const testFilter = (id: number) => {
        if (filter !== null) return filter === id
        return true
    }

    const toSort = (list: Menu) => {
        switch(sorter) {
        case 'portion':
            return list.sort((a, b) => a.portion > b.portion ? 1 : -1)
        case 'serving':
            return list.sort((a, b) => a.serving > b.serving ? 1 : -1)
        case 'price':
            return list.sort((a, b) => a.price > b.price ? 1 : -1)
        default:
            return list
        }
    }

    React.useEffect(() => {
        const newList = menuJson.filter(
            (item) => testQuery(item.title) && testFilter(item.category.id)
        )
        setList(toSort(newList))
    }, [search, filter, sorter])

    return (
        <div className={styles.itens}>
            {list.map((item: Dish) => (
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
                        <DishTags {...item} />
                    </div>
                </section>
            ))}
        </div>
    )
}

export default Itens