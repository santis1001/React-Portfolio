import React, { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
  const [currentPage, setCurrentPage] = useState('aboutme');

  const renderContent = () => {
    switch (currentPage) {
      case 'aboutme':
        return <h1>Welcome to the aboutme page</h1>;
      case 'portfolio':
        return <h1>Welcome to the portfolio page</h1>;
      case 'contact':
        return <h1>Welcome to the contact page</h1>;
      case 'resume':
        return <h1>Welcome to the resume page</h1>;
      default:
        return <h1>Welcome to the default page</h1>;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header handlePageChange={handlePageChange} />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;