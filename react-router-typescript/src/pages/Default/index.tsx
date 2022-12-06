import React from 'react'

import theme from 'styles/theme.module.scss'
import Header from 'components/Header'
import { Outlet } from 'react-router-dom'

interface Props {
    children?: React.ReactNode
}

const DefaultPage = ({children}: Props) => {
    return (
        <>
            <Header />
            <div className={theme.container}>
                <Outlet />
                {children}
            </div>
        </>
    )
}

export default DefaultPage