import './App.css';
import Navbar from './components/layout/navbar.js';
import Home from './components/pages/home';
import Footer from './components/layout/footer.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Confirm from './components/pages/formEnviado';

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route exact path="/" element={<section><Home /></section>} />
        <Route exact path="/formenviado" element={<Confirm />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
