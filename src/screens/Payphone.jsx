import React, { useState, useEffect } from 'react';
import { ImgText_Banner } from '../components/ImgText_Banner';
import { Box, Grid, Typography, Button, TextField, Container } from "@mui/material";
import { banner_payphone, img_payphone } from '../assets';
import { useLocation } from 'react-router-dom';

export const Payphone = () => {
    const location = useLocation();
    const { total, subtotal, iva } = location.state || {};

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        idNumber: '',
        email: '',
        file: null,
    });

    useEffect(() => {
        const initializePayphoneButton = () => {
            if (!document.getElementById("pp-button").children.length) {
                var ppButton = document.getElementById("pp-button");
                var totalAmount = ppButton.getAttribute("data-total") * 100;
                var client = ppButton.getAttribute("data-client");
                var email = ppButton.getAttribute("data-email");
                var id = ppButton.getAttribute("data-id");

                payphone.Button({
                    token: "JAgsEPn-84KHQizOQUadPo37rlEf8rJ4jwJGWmaqK-Qz4Rt4JRzf7WQUJXzpRAvHsEsmUIL1SZUaOEBxsgSHP3m6-iYE5BlTBN1_vsGbcPfYtyPmYSDfctGsXLmddW-Esg0RzibtuACI6ufjwxYxIY2Jb2_A9VmFmDcCBuFcA8iPU_EgQsljQtOYrACdVTrDL8NYmcF-EGMJhsYh75LNh1Yu07gdor92gXiuBDhkyu5LaWNH-pCZ0F_CQu6MndHSPTS9MmGc_kxyLAx31QcVogLBALS9JjVrFHOiFNWw40lJUiI7Zbvc_JX4AQK6JSEnxGNXS1payCq9tXRQpT4vrSgCf90",

                    btnHorizontal: true,
                    btnCard: true,

                    createOrder: function (actions) {
                        return actions.prepare({
                            amount: parseInt(totalAmount),
                            amountWithoutTax: parseInt(totalAmount),
                            currency: "USD",
                            clientTransactionId: id,
                            lang: "es",
                            email: email,
                            documentId: client
                        }).then(function (paramlog) {
                            console.log(paramlog);
                            return paramlog;
                        }).catch(function (paramlog2) {
                            console.log(paramlog2);
                            return paramlog2;
                        });
                    },

                    onComplete: function (model, actions) {
                        // Aquí puedes manejar la lógica después de completar la transacción
                    }
                }).render("#pp-button");
            }
        };

        try {
            initializePayphoneButton();
        } catch (error) {
            console.log("No se pudo cargar el botón de pago", error);
        }
    }, []);

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
    };

    return (
        <>
            <ImgText_Banner bannerImg={banner_payphone} text='Paga con ' underline_text='payphone' />

            <Container>
                <img src={img_payphone} alt='Imagen payphone' style={{ width: '100%' }} />

                <button id='pp-button'
                    data-total={total}
                    data-client={20}
                    data-email='jossuedavidjt@gmail.com'
                    data-id="your-transaction-id"
                    style={{ width: '100%', height: 'auto', display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: '50px' }}>
                </button>

                <Box display="flex" justifyContent="center" mt={2} style={{ padding: '0 100px' }}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={4} style={{ padding: '0 100px' }}>
                            <Box textAlign="center" height="100%" display="flex" flexDirection="column" justifyContent="center">
                                <Typography variant="h6" className='circle-color'>1</Typography>
                                <Typography style={{ fontWeight: 'bold', color: '#131738', marginTop: '10px' }}>
                                    Abre el link de pago.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} style={{ padding: '0 100px', borderLeft: '3px solid #b6955f', borderRight: '3px solid #b6955f' }}>
                            <Box textAlign="center" height="100%" display="flex" flexDirection="column" justifyContent="center">
                                <Typography variant="h6" className='circle-color'>2</Typography>
                                <Typography style={{ fontWeight: 'bold', color: '#131738', marginTop: '10px' }}>
                                    Llena todos los datos.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} style={{ padding: '0 100px' }}>
                            <Box textAlign="center" height="100%" display="flex" flexDirection="column" justifyContent="center">
                                <Typography variant="h6" className='circle-color'>3</Typography>
                                <Typography style={{ fontWeight: 'bold', color: '#131738', marginTop: '10px' }}>
                                    Realiza el pago
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Typography variant="h6" style={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#131738', marginTop: '100px' }}>
                        Al finalizar tu transferencia, envía el comprobante en el siguiente formulario
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
                </Grid>
            </Container>
        </>
    );
};
