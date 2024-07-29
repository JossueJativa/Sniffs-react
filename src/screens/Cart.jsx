import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { bannerCart } from '../assets';
import { ImgText_Banner } from '../components/ImgText_Banner';
import { deleteCartItem, getCart, getCartNumber } from '../Controllers/cartController';
import { useCart } from '../Context/cartContext'; // Importa el hook del contexto
import { CartItem } from '../components/CartItem'; // Asegúrate de que la ruta sea correcta

const localStorage = window.localStorage;

export const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const { setCartCount } = useCart(); // Usa el hook del contexto para actualizar el estado del carrito

    useEffect(() => {
        const fetchCart = async () => {
            const refresh = localStorage.getItem('refresh');
            const cartData = await getCart({ refresh });
            setCartItems(cartData);
            setCartCount(cartData.length); // Inicializa el contador del carrito
        };

        fetchCart();
    }, [setCartCount]);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    }

    const handleIncrease = async (producto_id) => {
        // const refresh = localStorage.getItem('refresh');
        // const response = await increaseItemQuantity({ refresh, producto_id });
        // if (response) {
        //     const newCart = cartItems.map(item =>
        //         item.producto_id === producto_id ? { ...item, cantidad: item.cantidad + 1 } : item
        //     );
        //     setCartItems(newCart);
        //     setCartCount(newCart.length);
        // }
    }

    const handleDecrease = async (producto_id) => {
        // const refresh = localStorage.getItem('refresh');
        // const response = await decreaseItemQuantity({ refresh, producto_id });
        // if (response) {
        //     const newCart = cartItems.map(item =>
        //         item.producto_id === producto_id ? { ...item, cantidad: item.cantidad - 1 } : item
        //     );
        //     setCartItems(newCart);
        //     setCartCount(newCart.length);
        // }
    }

    const handleDelete = async (producto_id) => {
        const refresh = localStorage.getItem('refresh');
        const response = await deleteCartItem({ refresh, producto_id });
        if (response) {
            const newCart = cartItems.filter(item => item.producto_id !== producto_id);
            setCartItems(newCart);
        }

        const cartQuantity = await getCartNumber({ refresh });
        setCartCount(cartQuantity);
    }

    return (
        <>
            <ImgText_Banner bannerImg={bannerCart} text="Bienvenido al carrito de" underline_text="compras!" />
            
            <Box sx={{ p: '0 80px' }}>
                {cartItems.length === 0 ? (
                    <Typography variant="body1">Tu carrito está vacío</Typography>
                ) : (
                    <div>
                        {cartItems.map((item) => (
                            <CartItem 
                                key={item.id} 
                                item={item} 
                                handleIncrease={handleIncrease} 
                                handleDecrease={handleDecrease} 
                                handleDelete={handleDelete} 
                            />
                        ))}
                    </div>
                )}
                
                <Typography variant="h6">
                    Total: ${calculateTotal()}
                </Typography>
            </Box>
        </>
    );
};
