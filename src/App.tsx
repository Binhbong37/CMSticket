
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavLinks from "./Components/NavLink";
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<NavLinks />} />

        <Route path='*' element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
