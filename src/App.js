// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './SIES_logo.png';
import './App.css';
import Card from './components/card';
import SearchBar from './components/SearchBar';
import AboutERP from './components/AboutERP';
import Footer from './components/Footer'; // Import Footer component

const App = () => {
  const [modules, setModules] = useState([]);
  const [filteredModules, setFilteredModules] = useState([]);

  useEffect(() => {
    // Fetch data from data.json
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setModules(data);
        setFilteredModules(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      // If search term is empty, display all modules
      setFilteredModules(modules);
    } else {
      // Filter modules based on search term
      const filtered = modules.filter(
        (module) =>
          module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          module.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredModules(filtered);
    }
  };

  return (
    <Router>
      <div className="App">
        <header>
          <img src={logo} alt="Logo" className="logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-erp">About US</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/about-erp" element={<AboutERP />} />
          <Route
            path="/"
            element={
              <>
                <h1>ERP Modules</h1>
                <SearchBar onSearch={handleSearch} />
                <div className="card-container">
                  {filteredModules.map((module, index) => (
                    <Card key={index} {...module} />
                  ))}
                </div>
              </>
            }
          />
        </Routes>
        <Footer /> {/* Include Footer component here */}
      </div>
    </Router>
  );
};

export default App;
