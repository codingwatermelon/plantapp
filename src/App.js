import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import SignUp from './pages/signup';

function App() {
  return (
    <Router>
      <Navbar />
      <About />
      
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
    </Router>
  );
}

export default App;