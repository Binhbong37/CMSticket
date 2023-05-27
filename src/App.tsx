
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, DoiSoatVe, QuanLyVe } from './pages/dashboard';
import NavLinks from "./Components/NavLink";
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/doi-soat-ve' element={<DoiSoatVe />} />
        <Route path='/quan-ly-ve' element={<QuanLyVe />} />

        <Route path='*' element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
