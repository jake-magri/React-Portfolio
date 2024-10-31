import { useState } from 'react';
import NavTabs from './header and navtabs/NavTabs';
import Home from './pages/AboutMe';
import About from './pages/Projects';
import Blog from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './footer/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">{renderPage()}</main>
      <Footer/>
    </div>
  );
}
