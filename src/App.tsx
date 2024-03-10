import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './pages/header-footer/Header';
import Footer from './pages/header-footer/Footer';
import Booking from './pages/booking/Booking';
import Payment from './pages/booking/components/Payment';
import NotFoundPage from './pages/booking/components/NotFoundPage';
import ProtectedLink from './pages/booking/components/ProtectLink';
import Menu from './pages/menu/MenuCard';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accueil" element={<Home />} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/contact" element={<Home />} />
          <Route path="/reservation" element={<Booking />} />
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/404' element={<NotFoundPage/>}/>
          <Route path='/52045520253' element={<ProtectedLink/>}/>
          {/* Autres routes */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;