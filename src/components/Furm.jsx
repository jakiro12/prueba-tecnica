import React, { useState } from "react";
import './styles.css'
export default function ProductForm({ assign_Producto }) {
  const [product, setProduct] = useState({
    code: "",
    product_name: "",
    description: "",
    amount: "",
    date_creation: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target; //tomo el nombre del input tambien
    setProduct({ ...product, [name]: value });//relaciono el nombre del input con el valor en el estado
  }; //asigno product.code = event.target.name en el input de code :D

  const handleSubmit = (e) => {
    e.preventDefault();
    assign_Producto(product);
    setProduct({
      code: "",
      product_name: "",
      description: "",
      amount: "",
      date_creation: "",
    }); //con esto limpio todos los campos de los inputs sino quedan con los datos antes
  }; // ingresados

  return (
    <form onSubmit={handleSubmit} className="form_options">
      <div className="form-group">
        <label htmlFor="code">Código:</label>
        <input
          type="number"
          className="form-control"
          id="code"
          name="code"
          value={product.code}
          onChange={handleInputChange}
          required
          min={1}
        />
      </div>
      <div className="form-group">
        <label htmlFor="product_name">Nombre:</label>
        <input
          type="text"
          className="form-control"
          id="product_name"
          name="product_name"
          value={product.product_name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Descripción:</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={product.description}
          onChange={handleInputChange}
          required
          maxLength={200}
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Cantidad:</label>
        <input
          type="number"
          className="form-control"
          id="amount"
          name="amount"
          value={product.amount}
          onChange={handleInputChange}
          required
          min={1}
        />
     </div>
     <div className="form-group">
    <label htmlFor="date_creation">Creación:</label>
    <input
      type="date"
      className="form-control"
      id="date_creation"
      name="date_creation"
      value={product.date_creation}
      onChange={handleInputChange}
      required
    />
  </div>
  <button type="submit" className="btn-primary">
    Crear producto
  </button>
</form>
)
  }
