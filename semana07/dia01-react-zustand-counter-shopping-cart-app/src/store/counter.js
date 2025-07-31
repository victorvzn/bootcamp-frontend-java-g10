import { create } from 'zustand'

export const useCounterStore = create((set) => ({
  // Estado inicial
  count: 99,
  // Actions
  increment: () => {
    set(state => {
      // Lógica
      // Lógica
      return {
        count: state.count + 1
      }
    })
  },
  decrement: () => {
    set(state => ({ count: state.count - 1 }))
  },
  // TODO: Implementar la función incrementByValue y usarla en el componente <Counter />
}))