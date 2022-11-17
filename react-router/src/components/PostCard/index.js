import { Link } from 'react-router-dom'
import styles from './postcard.module.css'

export default function PostCard({post}) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div key={post.id} className={styles.post}>
                <img
                    className={styles.cover}
                    src={require(`../../assets/posts/${post.id}/cover.png`)}
                    alt=''
                />

                <h2 className={styles.title}>
                    {post.title}
                </h2>

                <button className={styles.btnRead}>
                    Ler
                </button>
            </div>
        </Link>
    )
}