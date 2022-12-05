import theme from 'styles/theme.module.scss'
import Header from 'components/Header'
import { Outlet } from 'react-router-dom'

const DefaultPage = () => {
    return (
        <>
            <Header />
            <div className={theme.container}>
                <Outlet />
            </div>
        </>
    )
}

export default DefaultPage