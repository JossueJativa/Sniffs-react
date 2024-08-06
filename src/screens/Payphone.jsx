import React, { useState, useEffect } from 'react';
import { ImgText_Banner } from '../components/ImgText_Banner';
import { Box, Grid, Typography, Button, TextField, Container } from "@mui/material";
import { banner_payphone, img_payphone } from '../assets';
import { useLocation } from 'react-router-dom';
import { PaymentForm } from '../components/PaymentForm';

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

                <PaymentForm total={total} onSubmit={handleSubmit} />
            </Container>
        </>
    );
};
