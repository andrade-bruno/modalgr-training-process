import styles from './postmodel.module.css'

export default function PostModel({children, coverPhoto, title}) {
    return (
        <article className={styles.container}>
            <div 
                className={styles.coverPhoto}
                style={{ backgroundImage: `url(${coverPhoto})`}}
            ></div>

            <h2 className={styles.title}>{title}</h2>

            <div className={styles.content}>
                {children}
            </div>
        </article>
    )
}