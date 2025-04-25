import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';
import './ProductDetails.css'; // Import CSS
import '../style/style.css';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get(`/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    const addToCart = () => {
        setCart([...cart, product]);
        alert(`${product.name} mua thành công!`);
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="page-container">
            <Header />
            {/* Ảnh trang trí nằm ngoài khung sản phẩm */}
            <img className="decor-image top-left" src="public/images/rectangle_2.jpg" alt="Decor" />
            <img className="decor-image bottom-right" src="public/images/rectangle_12.jpg" alt="Decor" />
        <div className="product-details">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p><strong>Mô tả:</strong> {product.description}</p>
            <p><strong>Giá:</strong> {product.price} VND</p>
            <p><strong>Chi tiết:</strong> {product.details}</p>
            <p><strong>Thông tin thêm:</strong> {product.moreAbout}</p>
            <button onClick={addToCart}>Mua hàng</button>
        </div>
        </div>
    );
}

export default ProductDetails;
