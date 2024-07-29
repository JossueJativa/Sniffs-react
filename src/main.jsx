import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StartApp } from './StartApp';
import { CartProvider } from './Context/cartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <StartApp />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
