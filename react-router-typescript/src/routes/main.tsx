import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

import DefaultPage from 'pages/Default'
import Home from 'pages/Home'
import Menu from 'pages/Menu'
import About from 'pages/About'
import NotFound from 'pages/NotFound'
import DishDetails from 'pages/DishDetails'

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
                <Route path='dish/:id' element={<DishDetails />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default MainRoutes