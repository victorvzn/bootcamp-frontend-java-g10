import { create } from 'zustand'

export const useCartStore = create(
  (set, get) => ({
    // Estado INICIAL
    cart: [
      // { id: 1, title: 'product 1', qty: 1 },
      // { id: 2, title: 'product 2', qty: 5 },
    ],

    // Actions
    addToCart: (newProduct) => {
      // Aquí llegamos si el producto ya existe en el carrito
      const currentCartState = get().cart
      
      const productInCartIndex = currentCartState.findIndex(
        product => product.id === newProduct.id
      )

      if (productInCartIndex >= 0) {
        const updatedCart = currentCartState.map(product => {
          if (product.id === newProduct.id) {
            return {
              ...product,
              qty: product.qty + 1
            }
          }

          return product
        })

        set(() => ({ cart: updatedCart }))

        return
      }

      // Aquí llegamos cuando el producto es nuevo en el carrito
      set(state => ({
        cart: [...state.cart, { ...newProduct, qty: 1 }]
      }))
    },
    removeFromCart: (id) => {
      set(state => {
        const updatedCart = state.cart.filter(product => product.id !== id)

        return { cart: updatedCart }
      })
    },
    clearCart: () => {
      set(() => ({ cart: [] }))
    }
  })
)