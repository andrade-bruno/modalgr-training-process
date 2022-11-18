import Carrinho from 'pages/Carrinho'
import Feira from 'pages/Feira'
import Login from 'pages/Login'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { UserContext } from 'context/User'

function Router() {
    const [name, setName] = React.useState('')
    const [balance, setBalance] = React.useState(0)

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={
                    <UserContext.Provider value={{ name, setName, balance, setBalance }}>
                        <Login />
                    </UserContext.Provider>
                } />
                <Route path='/feira' element={<Feira />} />
                <Route path='/carrinho' element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router