import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://special-carnival-x5vvww95wr6q26r9w-8080.app.github.dev/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://special-carnival-x5vvww95wr6q26r9w-8080.app.github.dev/products/${id}`);
      fetchProducts(); // Refresh list
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
