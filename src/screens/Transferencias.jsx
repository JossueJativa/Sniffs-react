import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ImgText_Banner } from '../components/ImgText_Banner';
import { banner_transferencias, bc_pichincha, bc_produbanco } from '../assets';
import { Box, Typography, Grid, Paper, TextField, Button } from '@mui/material';
import { PaymentForm } from '../components/PaymentForm';

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

                <PaymentForm total={total} onSubmit={handleSubmit} />
            </Paper>
        </>
    );
};
