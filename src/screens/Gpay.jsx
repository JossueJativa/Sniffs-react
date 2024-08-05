import React, { useState } from 'react';
import { img_deuna, qr_deuna, banner_gpay } from '../assets';
import { ImgText_Banner } from '../components/ImgText_Banner';
import { Box, Typography, Grid, Paper, TextField, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';

export const Gpay = () => {
    const location = useLocation();
    const { total } = location.state || {};

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        idNumber: '',
        email: '',
        file: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de envío del formulario
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

                <Typography variant="h6" style={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#131738', marginTop: '100px' }}>
                    Al finalizar tu transferencia, envía el comprobante en el siguiente formulario
                </Typography>
                
                {/* Total a pagar */}
                <Typography variant="h6" style={{ color: '#131738' }}>
                    Total a pagar: ${total}
                </Typography>

                <Box component="form" sx={{ mt: 4, maxWidth: '800px', margin: '0 auto' }} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="fullName"
                                label="Nombres completos"
                                name="fullName"
                                autoComplete="name"
                                variant="outlined"
                                value={formData.fullName}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="phone"
                                label="Teléfono"
                                name="phone"
                                autoComplete="tel"
                                variant="outlined"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="idNumber"
                                label="Cédula/RUC/Pasaporte"
                                name="idNumber"
                                autoComplete="id-number"
                                variant="outlined"
                                value={formData.idNumber}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Correo Electrónico"
                                name="email"
                                autoComplete="email"
                                variant="outlined"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                variant="contained"
                                component="label"
                                fullWidth
                                style={{
                                    background: formData.file ? 'green' : '#131738',
                                    color: '#fff',
                                    height: '56px'
                                }}
                            >
                                Seleccionar archivo
                                <input
                                    type="file"
                                    hidden
                                    onChange={handleFileChange}
                                />
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                style={{ background: '#131738', color: '#fff', height: '56px' }}
                            >
                                Enviar comprobante
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    );
};
