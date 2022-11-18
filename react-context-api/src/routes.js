import Login from 'pages/Login'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Login />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router