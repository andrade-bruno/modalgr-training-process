import Cart from 'pages/Cart'
import Market from 'pages/Market'
import Login from 'pages/Login'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { UserProvider } from 'context/User'
import { CartProvider } from 'context/Cart'
import { PaymentProvider } from 'context/Payment'

function Router() {
    return (
        <UserProvider>
            <CartProvider>
                <PaymentProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' exact element={<Login />} />
                            <Route path='/market' element={<Market />} />
                            <Route path='/cart' element={<Cart />} />
                        </Routes>
                    </BrowserRouter>
                </PaymentProvider>
            </CartProvider>
        </UserProvider>
    )
}

export default Router