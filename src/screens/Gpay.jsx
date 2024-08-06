import React from 'react';
import { img_deuna, qr_deuna, banner_gpay } from '../assets';
import { ImgText_Banner } from '../components/ImgText_Banner';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';
import {PaymentForm} from '../components/PaymentForm';

export const Gpay = () => {
    const location = useLocation();
    const { total } = location.state || {};

    const handleFormSubmit = (formData) => {
        // Handle form submission here
        console.log('Form submitted', formData);
    };

    return (
        <>
            <ImgText_Banner bannerImg={banner_gpay} text="Paga con " underline_text="Gpay" />
            <Paper elevation={0} style={{ textAlign: 'center', padding: '20px' }}>
                <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#131738' }}>
                    Abre tu aplicación de G-pay, escanea el código y realiza el pago
                </Typography>
                <img src={qr_deuna} alt="QR DeUna" style={{ marginBottom: '100px' }}/>

                <Box display="flex" justifyContent="center" mt={2} style={{ padding: '0 100px' }}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={4} style={{ padding: '0 100px' }}>
                            <Box textAlign="center" height="100%" display="flex" flexDirection="column" justifyContent="center">
                                <Typography variant="h6" className='circle-color'>1</Typography>
                                <Typography style={{ fontWeight: 'bold', color: '#131738', marginTop: '10px' }} >
                                    Entra a la app y elige pagar.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} style={{ padding: '0 100px', borderLeft: '3px solid #b6955f', borderRight: '3px solid #b6955f' }}>
                            <Box textAlign="center" height="100%" display="flex" flexDirection="column" justifyContent="center">
                                <Typography variant="h6" className='circle-color'>2</Typography>
                                <Typography style={{ fontWeight: 'bold', color: '#131738', marginTop: '10px' }}>
                                    Escanea el código QR de arriba.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} style={{ padding: '0 100px' }}>
                            <Box textAlign="center" height="100%" display="flex" flexDirection="column" justifyContent="center">
                                <Typography variant="h6" className='circle-color'>3</Typography>
                                <Typography style={{ fontWeight: 'bold', color: '#131738', marginTop: '10px' }}>
                                    Ingresa el monto y confirma el pago.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <PaymentForm total={total} onSubmit={handleFormSubmit} />
            </Paper>
        </>
    );
};
