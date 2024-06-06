import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => (
  <div>
    <h1>Exercicio React</h1>
    <Outlet />
  </div>
);

export default App;

