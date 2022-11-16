import { Link, useLocation } from 'react-router-dom'
import styles from './menu.module.css'

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <CustomLink path="/">Home</CustomLink>
                <CustomLink path="/about">Sobre</CustomLink>
            </nav>
        </header>
    )
}

const CustomLink = ({children, path}) => {
    const location = useLocation()

    return (
        <Link to={path} className={`
            ${styles.link}
            ${location.pathname === path ? styles.currentLink : null}
        `}>
            {children}
        </Link>
    )
}