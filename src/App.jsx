// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetail from "./pages/ProjectDetail";
import { ThemeProvider } from './components/theme/ThemeProvider';
import './i18n';
import { useTranslation } from 'react-i18next';

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function App() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const description = t('seo.description');

    document.documentElement.lang = i18n.resolvedLanguage || i18n.language;
    document.title = t('seo.title');

    const setMeta = (selector, attribute, content) => {
      const meta = document.querySelector(selector);

      if (meta) {
        meta.setAttribute(attribute, content);
      }
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', t('seo.title'));
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:locale"]', 'content', t('seo.locale'));
  }, [i18n.language, i18n.resolvedLanguage, t]);

  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre-mi" element={<About />} />
              <Route path="/proyectos" element={<Projects />} />
              <Route path="/proyectos/:slug" element={<ProjectDetail />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
