import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApprovalList = () => {
  const [pendingProducts, setPendingProducts] = useState([]);

  useEffect(() => {
    fetchPendingProducts();
  }, []);

  const fetchPendingProducts = async () => {
    try {
      const response = await axios.get('https://special-carnival-x5vvww95wr6q26r9w-8080.app.github.dev/products/approval');
      setPendingProducts(response.data);
    } catch (error) {
      console.error('Error fetching pending products', error);
    }
  };

  const approveProduct = async (id) => {
    try {
      await axios.put(`https://special-carnival-x5vvww95wr6q26r9w-8080.app.github.dev/products/${id}/approve`);
      fetchPendingProducts();
    } catch (error) {
      console.error('Error approving product', error);
    }
  };

  return (
    <div>
      <h1>Pending Products</h1>
      {pendingProducts.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <button onClick={() => approveProduct(product.id)}>Approve</button>
          <button>Reject</button>
        </div>
      ))}
    </div>
  );
};

export default ApprovalList;
