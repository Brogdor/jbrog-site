import React from 'react';
import { Routes, Route } from 'react-router';
import { Home } from '../pages/home';
import { About } from '../pages/about';
import { HeaderLink } from '../headerLink';
import { Link } from '../core/link';

import './app.scss';

function App() {
  return (
    <div className="app">
        <div className="nav-bar">
            <HeaderLink page="" className="nav-link" />
            <HeaderLink page="about" className="nav-link" />
        </div>
        <div className="body-main">
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
            </Routes>
        </div>
    </div>
  );
}

export default App;