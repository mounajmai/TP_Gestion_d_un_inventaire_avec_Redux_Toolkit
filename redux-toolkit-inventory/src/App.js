import React from 'react';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
const App = () => {
return (
<div>
<h1>Gestion d’inventaire</h1>
<AddProduct />
<ProductList />
</div>
);
};
export default App;