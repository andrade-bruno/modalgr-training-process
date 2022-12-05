import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from 'components/Navbar'

import DefaultPage from 'pages/Default'
import Home from 'pages/Home'
import Menu from 'pages/Menu'
import About from 'pages/About'

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<DefaultPage />}>
                    {/* Nested Routes */}
                    <Route index element={<Home />} />
                    <Route path='menu' element={<Menu />} />
                    <Route path='about' element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes