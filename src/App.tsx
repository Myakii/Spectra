import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './pages/header-footer/Header';
import Footer from './pages/header-footer/Footer';
import Booking from './pages/booking/Booking';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accueil" element={<Home />} />
          <Route path="/menu" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/reservation" element={<Booking />} />
          {/* Autres routes */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;