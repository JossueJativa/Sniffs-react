import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

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

const IconTrash = styled(Button)(({ theme }) => ({
    width: '0%',
    height: '12% !important',
    backgroundColor: 'white',
    color: '#b6955f',
    border: 'none',
    fontSize: '0px',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingLeft: '100%',
}));

export const CartItem = ({ item, handleIncrease, handleDecrease, handleDelete }) => {
    const id = item.id;
    const productImages = {
        1: 'https://cdn-imgix.headout.com/microbrands-banner-image/image/26220a7c6aecf53b10f90006c1bad1e0-IMG_220916_0019_V2.jpg',
    };
    

    return (
        <BoxCart>
            <GridItem>
                <img src={productImages[id]} alt="carrito" style={{ maxWidth: '100%', height: 'auto' }} />
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
                <Typography variant="h6">${item.price}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ButtonStyled onClick={() => handleIncrease(id)}>
                        <Add />
                    </ButtonStyled>
                    <InputInfoCant type="text" value={item.quantity} readOnly />
                    {item.quantity > 1 ? (
                        <ButtonStyled onClick={() => handleDecrease(id)}>
                            <Remove />
                        </ButtonStyled>
                    ) : (
                        <ButtonStyled onClick={() => handleDelete(id)}>
                            <Delete />
                        </ButtonStyled>
                    )}
                </Box>
                <Typography variant="h6">${item.price * item.quantity}</Typography>
                <ButtonStyled onClick={() => handleDelete(id)}>
                    <Delete />
                </ButtonStyled>
            </GridItem>
        </BoxCart>
    );
};
