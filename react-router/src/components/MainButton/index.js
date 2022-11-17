import styles from './mainbutton.module.css'

export default function MainButton({children, size}) {
    return (
        <button className={`
            ${styles.mainBtn}
            ${styles[size]}
        `}>
            {children}
        </button>
    )
}