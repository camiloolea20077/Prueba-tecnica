import React, { useState } from 'react';
import { Header } from './components/Header';
import Footer  from './components/Footer';
import { ProductList } from './components/ProductList';
import ProductDetails from './components/ProductDetails';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductDetails, setShowProductDetails] = useState(false);

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
    setShowProductDetails(true);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
    setShowProductDetails(false);
  };

  return (
    <>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        onShowDetails={handleShowDetails} 
		searchTerm={searchTerm}
      />
      <ProductDetails
        product={selectedProduct}
        show={showProductDetails}
        onClose={handleCloseDetails}
      />
	   <Footer />
    </>
  );
}

export default App;
