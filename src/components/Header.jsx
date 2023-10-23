import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = ({
	allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
}) => {
	const [active, setActive] = useState(false);

	const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};
	const updateQuantity = (productId, newQuantity) => {
		const updatedProducts = allProducts.map((product) => {
		  if (product.id === productId) {
			const quantity = Math.max(newQuantity, 0);
			const totalPrice = quantity * product.price;
			return { ...product, quantity, totalPrice };
		  }
		  return product;
		});
		const newTotal = updatedProducts.reduce((total, product) => total + product.totalPrice, 0);
  		setTotal(newTotal);
		setAllProducts(updatedProducts);
	  };
	  const handleCheckout = () => {

		window.location.href = '/components/PaymentPage'; 
	  };
	return (
		<header >
					<Navbar expand="lg" className="bg-body-tertiary">
					<Container fluid>
					<Navbar.Brand href="#">Tienda</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
						>
						<Nav.Link href="#action1">Home</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					</Container>
				</Navbar>

			<div className='container-icon'>
				<div
					className='container-cart-icon'
					onClick={() => setActive(!active)}
				>
					
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon-cart'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					<div className='count-products'>
						<span id='contador-productos'>{countProducts}</span>
					</div>
				</div>

				<div
					className={`container-cart-products ${
						active ? '' : 'hidden-cart'
					}`}
					style={{
						width: '500px',  
					}}
					>
					{allProducts.length ? (
					<>
						<div className='row-product'>
						{allProducts.map((product) => (
							<div className='cart-product' key={product.id}>
							<div className='info-cart-product'>
								{product.quantity > 0 ? (
								<>
									<button
									className='btn-quantity btn btn-secondary btn-sm btn-round'
									style={{
										borderRadius: '50%',
										width: '1.5rem',  // Reducción del ancho
										height: '1.5rem', // Reducción de la altura
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										padding: '0',
										fontSize: '0.8rem' // Tamaño de la fuente más pequeño
									  }}
									onClick={() => updateQuantity(product.id, product.quantity - 1)}
									>
									-
									</button>
									<span className='cantidad-producto-carrito'>{product.quantity}</span>
									<button
									className='btn-quantity btn btn-secondary btn-sm btn-round'
									style={{
										borderRadius: '50%',
										width: '1.5rem',  // Reducción del ancho
										height: '1.5rem', // Reducción de la altura
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										padding: '0',
										fontSize: '0.8rem' // Tamaño de la fuente más pequeño
									  }}
									onClick={() => updateQuantity(product.id, product.quantity + 1)}
									>
									+
									</button>
									<p className='titulo-producto-carrito'>{product.title}</p>
  								    <span className='precio-producto-carrito'>${product.price * product.quantity}</span>
								</>
								) : (
								<p className='cart-empty'>Vacio</p>
								)}
							</div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='icon-close'
								onClick={() => onDeleteProduct(product)}
							>
								<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
							</div>
						))}
						</div>

						<div className='cart-total'>
						<h3>Total:</h3>
						<span className='total-pagar'>${total}</span>
						</div>

						<button className='btn-clear-all' onClick={onCleanCart}>
						Vaciar Carrito
						</button>
					</>
					) : (
					<p className='cart-empty'>El carrito está vacío</p>
					)}
				</div>
			</div>
		</header>
	);
};
