import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from '../features/inventory/inventorySlice';

const ProductList = () => {
  const products = useSelector((state) => state.inventory.products);
  const dispatch = useDispatch();
  
  const [editProduct, setEditProduct] = useState(null); // Pour gérer le produit en cours d'édition
  const [updatedProduct, setUpdatedProduct] = useState({}); // État temporaire pour le formulaire

  const handleDelete = (id) => {
    dispatch(deleteProduct({ id }));
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setUpdatedProduct(product);
  };

  const handleUpdateChange = (e) => {
    setUpdatedProduct({
      ...updatedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(updatedProduct));
    setEditProduct(null); // Ferme le formulaire
  };

  return (
    <div>
      <h2>Liste des produits</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.quantity} unités - ${product.price}
            <button onClick={() => handleEdit(product)}>Modifier</button>
            <button onClick={() => handleDelete(product.id)}>Supprimer</button>
          </li>
        ))}
      </ul>

      {editProduct && (
        <div className="modal">
          <h2>Modifier le produit</h2>
          <form onSubmit={handleUpdateSubmit}>
            <input
              type="text"
              name="name"
              value={updatedProduct.name}
              onChange={handleUpdateChange}
              placeholder="Nom"
            />
            <input
              type="number"
              name="quantity"
              value={updatedProduct.quantity}
              onChange={handleUpdateChange}
              placeholder="Quantité"
            />
            <input
              type="number"
              name="price"
              value={updatedProduct.price}
              onChange={handleUpdateChange}
              placeholder="Prix"
            />
            <button type="submit">Enregistrer</button>
            <button type="button" onClick={() => setEditProduct(null)}>
              Annuler
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductList;
