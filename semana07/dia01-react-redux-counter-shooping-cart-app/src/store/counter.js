import { createSlice } from '@reduxjs/toolkit'

// accion -> incrementarNumero, decrementar, incremenetEn10
export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => { // acciones sin parametros
      return state + 1
    },
    decrement: (state) => state - 1,  // acciones sin parametros
    incrementBy: (state, action) => state + action.payload  // acciones con parametros

    // payload: es la data que se pasa como parámetro al llamar a una acción desde el componente
  }
})

 // Exportando el estado inicial y a los reducers del slice
export default counterSlice.reducer

// Exportamos las acciones
export const { increment, decrement, incrementBy } = counterSlice.actions