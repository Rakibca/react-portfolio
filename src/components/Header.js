import React, {useState} from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About></About>
      case "contact":
        return <Contact></Contact>
      case "portfolio":
        return <Project></Project>
      case "resume":
        return <Resume></Resume>
      default:
        return <About></About>
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (<div>
    <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
    <div>
      {renderPage()}
    </div>
  </div>);
}
