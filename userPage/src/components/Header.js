import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css'; // Đảm bảo import CSS nếu cần

const Header = () => {
  return (
    <div className="navigation group">
      <p className="navigation-2">
        {/* <strong className="text-style">Home</strong>{' '} */}
        <Link to="/home">Home</Link>
        <Link to="/drinks">Drinks</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/products">Products</Link>
      </p>
      <p className="text-2">
        <Link to="/contact">Contact Us</Link>
      </p>
    </div>
  );
};

export default Header;