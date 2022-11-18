import Cart from 'pages/Cart'
import Feira from 'pages/Feira'
import Login from 'pages/Login'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { UserProvider } from 'context/User'

function Router() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Login />} />
                    <Route path='/feira' element={<Feira />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
}

export default Router