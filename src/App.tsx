import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { PropertiesPage } from './pages/PropertiesPage';
import { SellPage } from './pages/SellPage';
import { BuyPage } from './pages/BuyPage';
import { AgentsPage } from './pages/AgentsPage';
import { ContactPage } from './pages/ContactPage';
import './App.css'; // Keep this for global styles if any, though Tailwind handles most

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/sell" element={<SellPage />} />
            <Route path="/buy" element={<BuyPage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Add more routes here as needed */}
            {/* <Route path="/properties/:id" element={<PropertyDetailPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
