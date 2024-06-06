import React, { useState } from 'react';

const Exercicio4 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
  ]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Exercício 4: Barra de Busca</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Buscar..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercicio4;

