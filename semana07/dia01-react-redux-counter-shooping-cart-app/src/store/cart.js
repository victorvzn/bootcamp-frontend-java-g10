import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [
    // { id: 1, title: 'Product 1' },
    // { id: 2, title: 'Product 2' },
    // { id: 3, title: 'Product 3' },
  ],
  reducers: {
    addToCart: (state, action) => {
      console.log(state, action)
      const newProduct = action.payload

      // Si el producto es nuevo añadimos al carrito
      return [
        ...state,
        newProduct
      ]
    }
    // removeToCart
    // clearCart
  }
})

export default cartSlice.reducer // Expamos el estado inicial y los reducers del slice

export const { addToCart } = cartSlice.actions