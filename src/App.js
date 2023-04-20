import './App.css';
import React, { useState } from "react";
import ProductForm from './components/Furm';
import ProductList from './components/List';

function App() {
  const [productos, setProductos] = useState([]);

  const add_Product = (producto) => {
    setProductos([...productos, producto]);
  };

  const delete_Product = (index) => {
    const newProducts = [...productos];
    newProducts.splice(index, 1);
    setProductos(newProducts);
  };

  return (
    <div className="container">
    <div className='form_display_container'>
      <h1 className='title'>Crear productos nuevos</h1>
      <ProductForm assign_Producto={add_Product} />
      </div>
      <div className='display_products'>
      <ProductList productos={productos} eliminarProducto={delete_Product} />
      </div>
    </div>
  );
}

export default App;
