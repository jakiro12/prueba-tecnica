import React from "react";
import './styles.css'
export default function ProductList({ productos, eliminarProducto }) {
return (
<div className="table">

{productos.map((pr, i) => (
<article key={i} className="product_box">
    <div className="info_header"> 
        <p>{pr.product_name}</p>               
        <p>#00{pr.code}</p>    
     </div>
<p className="describe">{pr.description}</p>
<div className="details">
<p className="size">Cantidad:{pr.amount}</p>
<p className="creation">{pr.date_creation}</p>
</div>
<div className="delete_content">
    <p>Eliminar</p>
<button
type="button"
className="btn-delete"
onClick={() => eliminarProducto(i)}
>
X
</button>
</div>

</article>
))}

</div>
);
}
