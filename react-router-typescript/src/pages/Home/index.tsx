import { useNavigate } from 'react-router-dom'
import { Dish } from 'types/dish'

import menuJson from 'data/menu.json'
import styles from './Home.module.scss'
import theme from 'styles/theme.module.scss'
import nossaCasa from 'assets/nossa_casa.png'

const Home = () => {
    let advisedDishes = [...menuJson]
    advisedDishes = advisedDishes.sort(() => 0.5 - Math.random()).splice(0, 3)

    const navigate = useNavigate()

    const openDetails = (dish: Dish) => {
        navigate(`/dish/${dish.id}`, { state: { dish }})
    }

    return (
        <section>
            <h3 className={theme.title}>
                Recomendações da cozinha
            </h3>

            <div className={styles.advices}>
                {advisedDishes.map((item: Dish) => (
                    <div
                        key={item.id}
                        className={styles.advice}
                    >
                        <div className={styles.advice__image}>
                            <img src={item.photo} alt={item.title} />
                        </div>

                        <button 
                            className={styles.advice__button}
                            onClick={() => openDetails(item)}
                        >
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>

            <h3 className={theme.title}>Nossa casa</h3>
            
            <div className={styles.ourHouse}>
                <img src={nossaCasa} alt='Casa da Aluroni' />
                <div className={styles.ourHouse__address}>
                    Rua vergueiro, 3185 <br /> <br /> Vila Mariana - SP
                </div>
            </div>
        </section>
    )
}

export default Home