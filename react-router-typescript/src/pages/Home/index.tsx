import menuJson from 'data/menu.json'
import styles from './Home.module.scss'

type IItem = typeof menuJson[0]

const Home = () => {
    let advisedDishes = [...menuJson]
    advisedDishes = advisedDishes.sort(() => 0.5 - Math.random()).splice(0, 3)

    return (
        <section>
            <h3 className={styles.title}>
                Recomendações da cozinha
            </h3>

            <div className={styles.advices}>
                {advisedDishes.map((item: IItem) => (
                    <div
                        key={item.id}
                        className={styles.advice}
                    >
                        <div className={styles.advice__image}>
                            <img src={item.photo} alt={item.title} />
                        </div>

                        <button className={styles.advice__button}>
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Home