import React from 'react';
import Modal from 'react-bootstrap/Modal';

const ProductDetails = ({ product, show, onClose }) => {
  if (product === null) {
    // Si product es null, muestra un mensaje o simplemente retorna null
    return (
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>No hay detalles disponibles.</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={onClose}>Cerrar</button>
        </Modal.Footer>
      </Modal>
    );
  }

  // Si product no es null, muestra los detalles del producto
  return (
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" onClick={onClose}>
            &times;
          </button>
          <h4 className="modal-title">Detalles del Producto</h4>
        </div>
        <div className="modal-body">
          <h3>{product.title}</h3>
          <p>Descripción: {product.description}</p>
          <p>Precio: ${product.price}</p>
          {/* Agregar otros detalles del producto aquí */}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductDetails;
