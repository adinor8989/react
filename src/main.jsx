import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Exercicio1 from './pages/Exercicio1';
import Exercicio2 from './pages/Exercicio2';
import Exercicio3 from './pages/Exercicio3';
import Exercicio4 from './pages/Exercicio4';
import Exercicio5 from './pages/Exercicio5';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="exercicio1" element={<Exercicio1 />} />
          <Route path="exercicio2" element={<Exercicio2 />} />
          <Route path="exercicio3" element={<Exercicio3 />} />
          <Route path="exercicio4" element={<Exercicio4 />} />
          <Route path="exercicio5" element={<Exercicio5 />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
