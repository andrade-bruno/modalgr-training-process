import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/about';
import Home from './pages/home';
import Menu from './components/Menu'
import Footer from 'components/Footer';
import DefaultPage from 'components/DefaultPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
        </Route>

        <Route path='*' element={<div>Page not found</div>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
