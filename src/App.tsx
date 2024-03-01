import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Header from './pages/header/header';
import Footer from './pages/footer/footer';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Autres routes */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;