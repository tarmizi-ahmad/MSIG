import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ product = {}, fetchProducts }) => {
  const [name, setName] = useState(product.name || '');
  const [price, setPrice] = useState(product.price || '');
  const [description, setDescription] = useState(product.description || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, price, description };

    try {
      if (product.id) {
        // Edit product
        await axios.put(`https://special-carnival-x5vvww95wr6q26r9w-8080.app.github.dev/products/${product.id}`, newProduct);
      } else {
        // Add new product
        await axios.post('https://special-carnival-x5vvww95wr6q26r9w-8080.app.github.dev/products', newProduct);
      }
      fetchProducts();
    } catch (error) {
      console.error('Error saving product', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">{product.id ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default ProductForm;
