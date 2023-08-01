import React, { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Project from './components/Project';


const App = () => {
  const [currentPage, setCurrentPage] = useState('aboutme');



  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div id='content'>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />

      <Project currentPage={currentPage} />

      <Footer />
    </div>
  );
}

export default App;