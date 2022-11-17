import styles from './footer.module.css'
import { ReactComponent as RegisteredMark } from 'assets/registered-mark.svg'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <RegisteredMark />

            Desenvolvido por Bruno Andrade
        </div>
    )
}