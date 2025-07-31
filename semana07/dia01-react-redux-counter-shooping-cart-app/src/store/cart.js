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

      const productInCartIndex = state.findIndex(
        item => item.id === newProduct.id
      )

      // Si el producto ya existe en el carrito de compras
      if (productInCartIndex >= 0) { // si fuera -1 el producto no existe
        return state.map(product => {
          if (product.id === newProduct.id) {
            return {
              ...product,
              qty: product.qty + 1
            }
          }

          return product
        })
      }

      // Si el producto es nuevo añadimos al carrito
      return [
        ...state,
        {
          ...newProduct,
          qty: 1
        }
      ]
    },
    removeToCart: (state, action) => {
      // TODO: removeToCart - Remover el producto del carrito de compras
      const productId = action.payload

      return state.filter(product => product.id !== productId)
    },
    clearCart: () => {
      return [] // Estamos devolviendo el nuevo estado del nuestro slice
    }
  }
})

export default cartSlice.reducer // Expamos el estado inicial y los reducers del slice

export const { addToCart, clearCart, removeToCart } = cartSlice.actions