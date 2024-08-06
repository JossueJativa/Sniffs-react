import React, { useState } from 'react';
import { img_deuna, qr_deuna, banner_deuna } from '../assets';
import { ImgText_Banner } from '../components/ImgText_Banner';
import { Box, Typography, Grid, Paper, TextField, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { PaymentForm } from '../components/PaymentForm';

export const DeUna = () => {
    const location = useLocation();
    const { total } = location.state || {};

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        idNumber: '',
        email: '',
        file: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de envío del formulario
    };

    return (
        <>
            <ImgText_Banner bannerImg={banner_deuna} text="Paga con " underline_text="DeUna" />
            <Paper elevation={0} style={{ textAlign: 'center', padding: '20px' }}>
                <img src={img_deuna} alt="Banco Pichincha QR" style={{ width: '30%' }} />
                <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#131738' }}>
                    Escanea el código y realiza el pago en tres pasos.
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

                <PaymentForm total={total} onSubmit={handleSubmit} />
            </Paper>
        </>
    );
};
