import { createSlice } from '@reduxjs/toolkit';
const initialState = {
products: [
{ id: 1, name: 'Chaise', quantity: 5, price: 50 },
{ id: 2, name: 'Table', quantity: 3, price: 150 },
],
};
const inventorySlice = createSlice({
name: 'inventory',
initialState,
reducers: {
addProduct: (state, action) => {
state.products.push(action.payload);
},
deleteProduct: (state, action) => {
state.products = state.products.filter(
(product) => product.id !== action.payload.id
);
},
updateProduct: (state, action) => {
const index = state.products.findIndex(
(product) => product.id === action.payload.id
);
if (index !== -1) {
state.products[index] = { ...state.products[index],
...action.payload };
}
},
},
});
export const { addProduct, deleteProduct, updateProduct } =
inventorySlice.actions;
export default inventorySlice.reducer;