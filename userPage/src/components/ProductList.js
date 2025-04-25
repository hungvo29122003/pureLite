import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import './ProductList.css';
import '../style/style.css';
function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="product-container">
            <Header />
            <h1 className="title">Danh sách sản phẩm</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">{product.price} VND</p>
                        <p className="product-description">{product.description}</p>
                        <Link to={`/products/${product.id}`} className="details-button">
                            Xem chi tiết
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
