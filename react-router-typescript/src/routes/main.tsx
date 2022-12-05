import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from 'pages/Home'
import Menu from 'pages/Menu'
import Navbar from 'components/Navbar'

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes