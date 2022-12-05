import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from 'pages/Home'
import Menu from 'pages/Menu'
import Navbar from 'components/Navbar'
import Header from 'components/Header'

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes