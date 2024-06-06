import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const Exercicio3 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h1>Formulário</h1>
      <form onSubmit={handleSubmit}> 
        <Input
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nome"
          name="name"
        />
        <br />
        <Input
          type="text"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          name="email"
        />
        <br />
        <Button
          type="submit" 
          text="Enviar"
        />
      </form>
    </div>
  );
};

export default Exercicio3;
