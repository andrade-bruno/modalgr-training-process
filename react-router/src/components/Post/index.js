import styles from './post.module.css'

export default function Post({post}) {
    return (
        <div key={post.id} className={styles.post}>
            <img
                className={styles.cover}
                src={require(`../../assets/posts/${post.id}/capa.png`)}
                alt=''
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