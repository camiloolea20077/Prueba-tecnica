
import React, { useState } from 'react';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    creditCard: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías implementar la lógica para procesar la compra (simulada).
    // Puedes mostrar un mensaje de confirmación o redirigir al usuario a una página de confirmación.
  };

  return (
    <div className="payment-page">
      <h2>Información de Pago</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Dirección:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="creditCard">Número de Tarjeta de Crédito:</label>
          <input
            type="text"
            id="creditCard"
            name="creditCard"
            value={formData.creditCard}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Confirmar Compra</button>
      </form>
    </div>
  );
};

export default PaymentPage;
