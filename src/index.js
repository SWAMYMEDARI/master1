import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductList from "./components/products/product-list"
import AddProduct from "./components/products/add-product";
import Header from "./components/products/header";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <div>
      <Header />
      <ProductList />
      <AddProduct />
    </div>
  </React.StrictMode>


);



