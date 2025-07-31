// Creamos una store con los reducers que necesitemos

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})