import { useState, useEffect } from "react";
import { Box, Button, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import { bannerCart } from "../assets";
import { ImgText_Banner } from "../components/ImgText_Banner";
import { deleteCartItem, getCart } from '../Controllers/cartController';

const localStorage = window.localStorage;

export const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            const refresh = localStorage.getItem("refresh");
            const cartData = await getCart({ refresh });
            setCartItems(cartData);
        };

        fetchCart();
    }, []);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    }

    const handleDelete = async (cart_id) => {
        const refresh = localStorage.getItem("refresh");
        const response = await deleteCartItem({ refresh, cart_id });
        if (response) {
            const newCart = cartItems.filter((item) => item.id !== cart_id);
            setCartItems(newCart);
        }
    }

    return (
        <>
            <ImgText_Banner bannerImg={bannerCart} text="Bienvenido al carrito de" underline_text="compras!" />
            
            <Box sx={{ p: 2 }}>
                <Typography variant="h4" gutterBottom>
                    Tu Carrito
                </Typography>
                
                {cartItems.length === 0 ? (
                    <Typography variant="body1">Tu carrito está vacío</Typography>
                ) : (
                    <List>
                        {cartItems.map((item) => (
                            <ListItem key={item.id}>
                                <ListItemAvatar>
                                    <Avatar src={item.image} alt={item.name} />
                                </ListItemAvatar>
                                <ListItemText 
                                    primary={item.product} 
                                    secondary={`Cantidad: ${item.quantity} - Precio: $${item.price}`} 
                                />
                                <Button 
                                    variant="contained" 
                                    color="error" 
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Eliminar
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                )}
                
                <Typography variant="h6">
                    Total: ${calculateTotal()}
                </Typography>
            </Box>
        </>
    );
};
