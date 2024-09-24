import React from "react";
import './Products.css'; // Importing CSS for Products page

const productsList = [
  { id: 1, name: "Laptop", price: 999, description: "A high-performance laptop", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Smartphone", price: 599, description: "A sleek new smartphone", img: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: 199, description: "Noise-cancelling headphones", img: "https://via.placeholder.com/150" }
];

const Products = ({ addToCart }) => {
  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="products-grid">
        {productsList.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
