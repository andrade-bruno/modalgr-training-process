import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/about';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<div>Page not found</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
