import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from 'pages/About';
import Home from 'pages/Home';
import Menu from 'components/Menu'
import Footer from 'components/Footer';
import DefaultPage from 'components/DefaultPage';
import Post from 'pages/Post';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='posts/:id' element={<Post />} />
        </Route>

        <Route path='*' element={<div>Page not found</div>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
