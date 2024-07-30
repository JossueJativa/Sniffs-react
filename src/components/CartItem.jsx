import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import {
    autos_mensual, autos_sniffs, camiones_mensual, camiones_sniffs,
    ganaderia_sniffs, ganaderia_mensual, mascotas_mensual, mascotas_sniffs,
    motos_mensual, motos_sniffs, personas_mensual, personas_sniffs
} from '../assets';

// Define estilos usando Box
const BoxCart = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 'auto',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1.5fr',
    gap: '10px',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    marginBottom: '20px',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr 2fr',
        gridTemplateRows: 'auto auto',
    },
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto auto auto',
    },
}));

const GridItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '10px',
    [theme.breakpoints.down('md')]: {
        padding: '5px',
    },
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
    width: '90%',
    height: '5vh',
    borderRadius: '10px',
    background: 'linear-gradient(to right, #131738, #4e497e, #131738)',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px -1px',
    [theme.breakpoints.down('sm')]: {
        width: '80%',
        fontSize: '1.2rem',
        height: '4vh',
    },
}));

const InputInfoCant = styled('input')(({ theme }) => ({
    width: '90%',
    height: '5vh',
    borderRadius: '10px',
    border: 'none',
    padding: '0% 10px',
    margin: '10px 0px',
    fontSize: '2rem',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
        height: '4vh',
    },
}));

export const CartItem = ({ item, handleIncrease, handleDecrease, handleDelete }) => {
    const productImages = {
        1: autos_mensual,
        2: autos_sniffs,
        3: motos_mensual,
        4: motos_sniffs,
        5: camiones_mensual,
        6: camiones_sniffs,
        7: personas_mensual,
        8: personas_sniffs,
        9: mascotas_mensual,
        10: mascotas_sniffs,
        11: ganaderia_mensual,
        12: ganaderia_sniffs
    };

    const productImage = productImages[parseInt(item.product_id)] || '/images/default.jpg';

    return (
        <BoxCart>
            <GridItem>
                <img src={productImage} alt="carrito" style={{ maxWidth: '100%', height: 'auto' }} />
            </GridItem>
            <GridItem>
                <div>
                    <Typography variant="h6" align="center">
                        {item.product}
                    </Typography>
                    <Typography variant="body1">
                        Incluye costo de instalación + primera cuota mensual
                    </Typography>
                </div>
            </GridItem>
            <GridItem>
                <Typography variant="h6">${(item.price).toFixed(2)}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ButtonStyled onClick={() => handleIncrease(item.id, item.quantity)}>
                        <Add />
                    </ButtonStyled>
                    <InputInfoCant type="text" value={item.quantity} readOnly />
                    {item.quantity > 1 ? (
                        <ButtonStyled onClick={() => handleDecrease(item.id, item.quantity)}>
                            <Remove />
                        </ButtonStyled>
                    ) : (
                        <ButtonStyled onClick={() => handleDelete(item.id)}>
                            <Delete />
                        </ButtonStyled>
                    )}
                </Box>
                <Typography variant="h6">${(item.price * item.quantity).toFixed(2)}</Typography>
                <ButtonStyled onClick={() => handleDelete(item.id)}>
                    <Delete />
                </ButtonStyled>
            </GridItem>
        </BoxCart>
    );
};
