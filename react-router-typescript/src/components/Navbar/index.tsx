import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from 'assets/logo.svg'
import styles from './Navbar.module.scss'

const Navbar = () => {
    const routes = [
        {
            label: 'Início',
            to: '/'
        },
        {
            label: 'Cardápio',
            to: '/menu'
        },
        {
            label: 'Sobre',
            to: '/about'
        }
    ]

    return (
        <nav className={styles.nav}>
            <Logo />
            <ul className={styles.nav__list}>
                {routes.map((route, idx) => (
                    <li key={idx} className={styles.nav__link}>
                        <Link to={route.to}>
                            {route.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar