import React from 'react';

const footerStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: 'lightgray',
  textAlign: 'center',
  padding: '10px',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>Pagina Echa por Camilo Olea</p>
    </footer>
  );
};

export default Footer;
