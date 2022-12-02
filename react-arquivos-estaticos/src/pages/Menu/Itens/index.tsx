import styles from './Itens.module.scss'
import itensJson from './itens.json'
import classNames from 'classnames'

type IItem = typeof itensJson[0]

const Itens = () => {
    return (
        <div className={styles.itens}>
            {itensJson.map((item: IItem) => (
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