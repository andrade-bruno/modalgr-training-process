import styles from './banner.module.css'
import paintedCircle from 'assets/painted-circle.png'
import bruno from 'assets/bruno.jpeg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.presentation}>
                <h1 className={styles.title}>
                    Olá, ModalGR!
                </h1>

                <p className={styles.paragraph}>
                    Boas vindas ao projeto utilizando a biblioteca React Router Dom
                </p>
            </div>

            <div className={styles.images}>
                <img
                    className={styles.paintedCircle}
                    src={paintedCircle}
                    aria-hidden={true}
                    alt=''
                />

                <img
                    className={styles.myPhoto}
                    src={bruno}
                    alt='Bruno'
                />
            </div>
            
        </div>
    )
}