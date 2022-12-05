import { useNavigate } from 'react-router-dom'

import classNames from 'classnames'
import styles from './NotFound.module.scss'
import theme from 'styles/theme.module.scss'
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg'

const NotFound = ()  => {
    const navigate = useNavigate()
    return (
        <div className={classNames({
            [styles.container]: true,
            [theme.container]: true
        })}>
            <div className={styles.goback}>
                <button onClick={() => navigate(-1)}>
                    {'< Voltar'}
                </button>
            </div>
            <NotFoundImage />
        </div>
    )
}

export default NotFound