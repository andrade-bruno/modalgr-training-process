import styles from './DishDetails.module.scss'
import { useParams, useNavigate, Routes, Route } from 'react-router-dom'
import menu from 'data/menu.json'
import DishTags from 'components/DishTags'
import NotFound from 'pages/NotFound'
import Default from 'pages/Default'

const DishDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const dish = menu.find(item => item.id === Number(id))

    if (!dish) {
        return <NotFound />
    }

    return (
        <Routes>
            <Route path="*" element={<Default />}>
                <Route index element={
                    <>
                        <button className={styles.goback} onClick={() => navigate(-1)}>
                            {'< Voltar'}
                        </button>
                        <div className={styles.container}>
                            <h1 className={styles.title}>
                                {dish.title}
                            </h1>
                            <div className={styles.image}>
                                <img src={dish.photo} alt={dish.title} />
                            </div>
                            <div className={styles.content}>
                                <p className={styles.content__description}>
                                    {dish.description}
                                </p>
                                <DishTags {...dish} />
                            </div>
                        </div>
                    </>
                } />
            </Route>
        </Routes>
    )
}

export default DishDetails