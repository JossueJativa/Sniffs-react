import React, { createContext, useState, useContext } from 'react';

// Crea el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    return (
        <CartContext.Provider value={{ cartCount, setCartCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
