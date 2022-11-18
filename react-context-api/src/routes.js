import Cart from 'pages/Cart'
import Market from 'pages/Market'
import Login from 'pages/Login'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { UserProvider } from 'context/User'
import { CartProvider } from 'context/Cart'

function Router() {
    return (
        <UserProvider>
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' exact element={<Login />} />
                        <Route path='/market' element={
                            <Market />
                        } />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </UserProvider>
    )
}

export default Router