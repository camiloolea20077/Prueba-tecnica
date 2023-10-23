import { data } from '../data';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedProduct, setSelectedProduct] = useState(null);
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};
	const onShowDetails = (product) => {
		setSelectedProduct(product);
		console.log('selectedProduct actualizado:', product);
	  };
	  const onCloseDetails = () => {
		setSelectedProduct(null);
	  };
	  const onAddToCart = () => {
		if (selectedProduct) {
		  onAddProduct(selectedProduct);
		  onCloseDetails(); 
		}
	  };
	  const filteredProducts = data.filter((product) =>
		product.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
	
	return (
		<div className='container-items'>
				<form className="d-flex">
					<div>
					<input
						type="text"
						placeholder="Buscar productos"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					</div>
				</form>
				{filteredProducts.map((product) => (
					<div className='item' key={product.id}>
					<figure>
					  <img src={product.image} alt={product.nameProduct} />
					</figure>
					<div className='info-product'>
					  <h2>{product.title}</h2>
					  <p className='price'>${product.price}</p>
					  <button onClick={() => onAddProduct(product)}>
						Añadir al carrito
					  </button>
					  <button onClick={() => onShowDetails(product)}>Detalles</button>
					</div>
				  </div>
				))}

			{selectedProduct && (
					<Modal show={onShowDetails} >
					<Modal.Header >
						<Modal.Title>{selectedProduct.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<img src={selectedProduct.image} height={350} className='mx-auto'></img>
						<p>Precio: {selectedProduct.price}$</p>
						<p>{selectedProduct.description}.</p>
						<p>Caterogia: {selectedProduct.category}</p>
						<p>Ratings: {selectedProduct.rating.rate}.</p>
					</Modal.Body>
					<Modal.Footer>
					<Button onClick={onAddToCart} variant="dark">
						Añadir al carrito
					</Button>
						<Button variant="dark" onClick={onCloseDetails}>Cerrar</Button>
					</Modal.Footer>
					</Modal>
			)}
		</div>
	);
};
