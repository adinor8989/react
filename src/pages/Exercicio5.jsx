import React, { useState, useEffect } from 'react';

const Exercicio5 = () => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [hexColor, setHexColor] = useState('');

  const colors = ['#FF5733', '#33FF57', '#5733FF', '#33A1FF'];

  const changeBackgroundColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  useEffect(() => {
    document.body.style.background = backgroundColor;
    setHexColor(backgroundColor);
  }, [backgroundColor]);

  return (
    <div style={{ backgroundColor, minHeight: '100vh', padding: '20px' }}>
      <h1>Exercício 5: Mudança de Cor de Fundo</h1>
      <button onClick={changeBackgroundColor}>Mudar Cor</button>
      <p>Código HEX da Cor: {hexColor}</p>
    </div>
  );
};

export default Exercicio5;

