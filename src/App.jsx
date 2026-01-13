import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Packages from './pages/Packages';
import Components from './pages/Components';
import Kits from './pages/Kits';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { Menu } from 'lucide-react';
import './styles/App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Mobile Menu Toggle */}
        <button className="menu-toggle-btn" onClick={toggleSidebar}>
          <Menu size={24} color="var(--color-primary)" />
        </button>

        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/components" element={<Components />} />
            <Route path="/kits" element={<Kits />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </main>

        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
