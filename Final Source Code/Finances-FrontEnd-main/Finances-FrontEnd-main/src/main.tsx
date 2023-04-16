import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "@/state/api";

export const store = configureStore({ 
  reducer: { [api.reducerPath]: api.reducer }, // this will setup our api reducer path. Basically, our redux toolkit api slice
  middleware: (getDefault) =>  getDefault().concat(api.middleware), // middleare is the configuration that we need to setup with our api, so that redux toolkit query works
})
setupListeners(store.dispatch); // it will help make the above code work

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider >
)
