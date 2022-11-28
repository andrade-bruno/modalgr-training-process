import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "pages/Login";
import Home from "pages/Home";
import Products from "pages/Products";
import Product from "pages/Product";
import ProductForm from "pages/ProductForm";

import Footer from "components/Footer";
import Navbar from 'components/Navbar';

import { CategoriesProvider } from "contexts/categories";
import { ProductsProvider } from "contexts/products";
import ScrollToTop from "utils/common";
import NotFound from "pages/NotFound";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />

            <CategoriesProvider>
                <ProductsProvider>
                    <Routes>
                        <Route path='/login' element={<Login />} />
                        <Route path='/' exact element={<Home />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/product/:id' element={<Product />} />
                        <Route path='/product/new' element={<ProductForm />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </ProductsProvider>
            </CategoriesProvider>

            <Footer />
        </BrowserRouter>
    )
}