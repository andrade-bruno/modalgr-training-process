import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "pages/Login";

import Footer from "components/Footer";
import Navbar from 'components/Navbar';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' exact element={<p>Home</p>} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}