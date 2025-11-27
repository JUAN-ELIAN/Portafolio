import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage'; // Añadido
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import ScrollToTop from './components/shared/ScrollToTop';

const App = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/projects" element={<PortfolioPage />} /> {/* Añadido para "Proyectos Realizados" */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} /> {/* Añadido para "Servicios" */}
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
