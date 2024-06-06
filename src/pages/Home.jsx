import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <nav>
      <ul>
        <li><Link to="/exercicio1">Exercício 1</Link></li>
        <li><Link to="/exercicio2">Exercício 2</Link></li>
        <li><Link to="/exercicio3">Exercício 3</Link></li>
        <li><Link to="/exercicio4">Exercício 4</Link></li>
        <li><Link to="/exercicio5">Exercício 5</Link></li>
      </ul>
    </nav>
  </div>
);

export default Home;
