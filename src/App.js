import React from 'react';
import Home from './pages/Home'
import Single from './pages/Single'
import Header from './components/Header'
import Footer from './components/Footer'
import './scss/app.css'

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Header></Header>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/route/:id" component={Single} />
    </div>
    <Footer></Footer>
  </Router>
  );
}

export default App;
