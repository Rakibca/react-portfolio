import React, {useState} from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About></About>
      case "Portfolio":
        return <Project></Project>
      case "Contact":
        return <Contact></Contact>
      case "Skills":
        return <Skills></Skills>
      default:
        return <About></About>
    }

  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (<div>
    <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
    <div>
      {renderPage()}
      {<Footer></Footer>}
    </div>
  </div>);
}
