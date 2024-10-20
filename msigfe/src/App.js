import React from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import ApprovalList from './ApprovalList';

const App = () => (
  <div>
    <ProductForm fetchProducts={() => {}} />
    <ProductList />
    <ApprovalList />
  </div>
);

export default App;
