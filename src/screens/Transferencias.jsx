import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ImgText_Banner } from '../components/ImgText_Banner';
import { banner_transferencias, bc_pichincha, bc_produbanco } from '../assets';
import { Box, Typography, Grid, Paper, TextField, Button } from '@mui/material';

export const Transferencias = () => {
    const location = useLocation();
    const { total } = location.state || {};

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        idNumber: '',
        email: '',
        file: null
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (event) => {
        setFormData(prevState => ({
            ...prevState,
            file: event.target.files[0]
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const banks = [
        {
            name: 'BANCO PICHINCHA',
            account: '2201571339',
            type: 'Ahorros',
            id: '1715838692',
            email: 'crystianmf@hotmail.com',
            logo: bc_pichincha
        },
        {
            name: 'BANCO PROMERICA',
            account: '12096043976',
            type: 'Ahorros',
            id: '1715838692',
            email: 'crystianmf@hotmail.com',
            logo: bc_produbanco
        }
    ];

    return (
        <>
            <ImgText_Banner bannerImg={banner_transferencias} text='Paga con ' underline_text='transferencia' />

            <Paper elevation={0} style={{ textAlign: 'center', padding: '20px' }}>
                <Box p={3}>
                    <Grid container spacing={3}>
                        {banks.map((bank, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Paper elevation={3} style={{ textAlign: 'center', padding: '20px' }}>
                                    <img src={bank.logo} alt={`Logo ${bank.name}`} style={{ width: '50%', marginBottom: '20px' }} />
                                    <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                        {bank.name}
                                    </Typography>
                                    <Typography variant="body1"><strong>Cuenta:</strong> {bank.account}</Typography>
                                    <Typography variant="body1"><strong>Tipo:</strong> {bank.type}</Typography>
                                    <Typography variant="body1"><strong>Cédula:</strong> {bank.id}</Typography>
                                    <Typography variant="body1"><strong>Email:</strong> {bank.email}</Typography>
                                </Paper>
                            </Grid>
                        ))}
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
