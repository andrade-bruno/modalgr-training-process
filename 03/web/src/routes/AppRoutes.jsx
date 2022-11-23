import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "pages/Login";
import Home from "pages/Home";
import Products from "pages/Products";

import Footer from "components/Footer";
import Navbar from 'components/Navbar';
import { CategoriesProvider } from "contexts/categories";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />

            <CategoriesProvider>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/' exact element={<Home />} />
                    <Route path='/products' element={<Products />} />
                </Routes>
            </CategoriesProvider>

            <Footer />
        </BrowserRouter>
    )
}