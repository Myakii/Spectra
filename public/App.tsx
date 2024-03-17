import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Header from '../src/pages/header-footer/Header';
import Footer from '../src/pages/header-footer/Footer';
import Booking from '../src/pages/booking/Booking';
import NotFoundPage from '../src/pages/404/NotFoundPage';
import MenuCard from '../src/pages/menu/MenuCard';
import Confirm from '../src/pages/booking/Comfirm';

import './pages/css/index.css'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accueil" element={<Home />} />
          <Route path="/carte" element={<MenuCard/>} />
          <Route path="/contact" element={<Home />} />
          <Route path="/reservation" element={<Booking />} />
          <Route path='/404' element={<NotFoundPage/>}/>
          <Route path='/5215231851232455' element={<Confirm/>}/>
          <Route path='/*' element={<NotFoundPage/>}/>
          {/* Autres routes */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;