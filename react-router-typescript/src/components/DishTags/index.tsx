import classNames from 'classnames'
import { Dish } from 'types/dish'
import styles from './DishTags.module.scss'

const DishTags = ({
    category,
    portion,
    serving,
    price
}: Dish) => {
    return (
        <div className={styles.tags}>
            <div className={classNames({
                [styles.tags__category]: true,
                [styles[`tags__category__${category.label.toLowerCase()}`]]: true
            })}>
                {category.label}
            </div>
            <div className={styles.tags__portion}>{portion}g</div>
            <div className={styles.tags__serving}>{serving} pessoa{serving > 1 ? 's' : ''}</div>
            <div className={styles.tags__price}>R$ {price.toFixed(2)}</div>
        </div>
    )
}

export default DishTags