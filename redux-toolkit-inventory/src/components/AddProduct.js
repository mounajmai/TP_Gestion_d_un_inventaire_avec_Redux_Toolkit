import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/inventory/inventorySlice';
const AddProduct = () => {
const [product, setProduct] = useState({ id: '', name: '',
quantity: 0, price: 0 });
const dispatch = useDispatch();
const handleChange = (e) => {
setProduct({ ...product, [e.target.name]: e.target.value });
};
const handleSubmit = (e) => {
e.preventDefault();
dispatch(addProduct({ ...product, id: Date.now() }));
setProduct({ id: '', name: '', quantity: 0, price: 0 });
};
return (
<div>
<h2>Ajouter un produit</h2>
<form onSubmit={handleSubmit}>
<input
type="text"
name="name"
placeholder="Nom"
value={product.name}
onChange={handleChange}
/>
<input
type="number"
name="quantity"
placeholder="Quantité"
value={product.quantity}
onChange={handleChange}
/>
<input
type="number"
name="price"
placeholder="Prix"
value={product.price}
onChange={handleChange}
/>
<button type="submit">Ajouter</button>
</form>
</div>
);
};
export default AddProduct;