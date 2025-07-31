import { create } from 'zustand'

export const useCartStore = create(
  (set) => ({
    // Estado INICIAL
    cart: [
      { id: 1, title: 'product 1', qty: 1 },
      { id: 2, title: 'product 2', qty: 5 },
    ],

    // Actions
    addToCart: (newProduct) => {
      // Aquí llegamos cuando el producto es nuevo en el carrito
      set(state => ({
        cart: [...state.cart, { ...newProduct, qty: 1 }]
      }))
    },
    removeFromCart: (id) => {

    },
    clearCart: () => {

    }
  })
)