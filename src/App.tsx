import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, DoiSoatVe, QuanLyVe, DSgoive } from './pages/dashboard';
import NavLinks from "./Components/NavLink";
import NotFound from './pages/NotFound';
import Header from './Components/Header';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='dasboard'>
        <div className='leftSide'>
          <NavLinks />
          <div className='copyright'>
            <p>Copyright 2020 Alta Software </p>
          </div>
        </div>
        <div className='rightSide'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/doi-soat-ve' element={<DoiSoatVe />} />
            <Route path='/quan-ly-ve' element={<QuanLyVe />} />
            <Route path='/danh-sach-su-kien' element={<DSgoive />} />

            <Route path='*' element={<NotFound />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
