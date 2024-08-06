import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Paper, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LeftProfile } from '../components/LeftProfile';
import { bannerCart } from '../assets';
import { ImgText_Banner } from '../components/ImgText_Banner';
import { decreaseItemQuantity, deleteCartItem, getCart, getCartNumber, increaseItemQuantity } from '../Controllers/cartController';
import { useCart } from '../Context/cartContext'; // Importa el hook del contexto
import { CartItem } from '../components/CartItem'; // Asegúrate de que la ruta sea correcta
import { SummaryTable } from '../components/Table';

const localStorage = window.localStorage;

const Container = styled(Box)(({ theme }) => ({
    padding: '0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '0 40px',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '0 20px',
    },
}));

const SummaryContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: '20px',
}));

const ContinueButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#131738',
    borderRadius: '50px',
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '20px', // Añadido margen inferior para separar el botón de la tabla
    [theme.breakpoints.down('sm')]: {
        width: '80%',
    },
}));

export const MisPedidos = () => {
    const [cartItems, setCartItems] = useState([]);
    const { setCartCount } = useCart(); // Usa el hook del contexto para actualizar el estado del carrito
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCart = async () => {
            const refresh = localStorage.getItem('refresh');
            const cartData = await getCart({ refresh });
            setCartItems(cartData);
        };

        const cartQuantity = async () => {
            const refresh = localStorage.getItem('refresh');
            const cartQuantity = await getCartNumber({ refresh });
            setCartCount(cartQuantity);
        };

        cartQuantity();
        fetchCart();
    }, [setCartCount]);

    const handleIncrease = async (producto_id, quantity) => {
        const refresh = localStorage.getItem('refresh');
        const response = await increaseItemQuantity({ refresh, product_id: producto_id, quantity });
        if (response) {
            const newCart = cartItems.map(item =>
                item.producto_id === producto_id ? { ...item, cantidad: item.cantidad + 1 } : item
            );
            setCartItems(newCart);
        }

        const cartQuantity = await getCartNumber({ refresh });
        setCartCount(cartQuantity);

        window.location.reload();
    }

    const handleDecrease = async (producto_id, quantity) => {
        const refresh = localStorage.getItem('refresh');
        const response = await decreaseItemQuantity({ refresh, product_id: producto_id, quantity });
        if (response) {
            const newCart = cartItems.map(item =>
                item.producto_id === producto_id ? { ...item, cantidad: item.cantidad - 1 } : item
            );
            setCartItems(newCart);
        }

        const cartQuantity = await getCartNumber({ refresh });
        setCartCount(cartQuantity);

        window.location.reload();
    }

    const handleDelete = async (producto_id) => {
        const cart_id = producto_id;
        const refresh = localStorage.getItem('refresh');
        const response = await deleteCartItem({ refresh, cart_id });
        if (response) {
            const newCart = cartItems.filter(item => item.producto_id !== producto_id);
            setCartItems(newCart);
        }

        const cartQuantity = await getCartNumber({ refresh });
        setCartCount(cartQuantity);
        window.location.reload();
    }

    const handleFinalize = () => {
        navigate('/datos-facturacion', { state: { cartItems, subtotal, iva, total } });
    };

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const iva = subtotal * 0.12;
    const total = subtotal + iva;

    return (
        <div className="grid-profile">
            <div className="grid-item">
                <LeftProfile />
            </div>
            <div className="grid-item">
                <Container>
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
                    
                    <SummaryContainer>
                        <ContinueButton
                            variant='contained'
                            href='/planes'
                        >
                            Continuar Comprando
                        </ContinueButton>
                        <SummaryTable items={cartItems} />
                        <ContinueButton
                            variant='contained'
                            onClick={handleFinalize}
                        >
                            Finalizar la compra
                        </ContinueButton>
                    </SummaryContainer>
                </Container>
            </div>
        </div>
    );
};
