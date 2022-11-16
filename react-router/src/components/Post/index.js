import styles from './post.module.css'
import imgUrl from "../../assets/posts/5/capa.png"

export default function Post({post}) {

    return (
        <div key={post.id} className={styles.post}>
            <img
                className={styles.cover}
                src="/assets/posts/5/capa.png"
                alt={imgUrl}
            />

            <h2 className={styles.title}>
                {post.titulo}
            </h2>

            <button className={styles.btnRead}>
                Ler
            </button>
        </div>
    )
}