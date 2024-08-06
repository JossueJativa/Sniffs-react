// PaymentForm.js
import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, Box } from '@mui/material';

export const PaymentForm = ({ total, onSubmit }) => {
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
        if (onSubmit) onSubmit(formData);
    };

    return (
        <>
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
        </>
    );
};