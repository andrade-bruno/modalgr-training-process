import styles from './notfound.module.css'
import error404 from 'assets/404.png'

export default function NotFound() {
    return (
        <>
            <div className={styles.content}>
                <span className={styles.text404}>404</span>

                <h1 className={styles.title}>
                    Ops! Página não encontrada
                </h1>

                <p className={styles.paragraph}>
                    Tem certeza de que era isso que você estava procurando? 
                </p>
                <p className={styles.paragraph}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div className={styles.btn}>
                    <button>Voltar</button>
                </div>

                <img
                    className={styles.dog}
                    src={error404}
                    alt="Cachorro"
                />
            </div>

            <div className={styles.whitespace}></div>
        </>
    )
}