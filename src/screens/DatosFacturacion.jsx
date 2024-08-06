import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Paper, styled, FormControlLabel, Checkbox } from '@mui/material';
import { banner_facturador } from "../assets";
import { ImgText_Banner } from "../components/ImgText_Banner";
import { SummaryTable } from '../components/Table';
import { createBill, getBillDetails } from '../Controllers/facturadorController';

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 80px',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        padding: '0 40px',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '0 20px',
    },
}));

const FormContainer = styled(Box)(({ theme }) => ({
    flex: 1,
    marginRight: '20px',
    [theme.breakpoints.down('md')]: {
        marginRight: '0',
        marginBottom: '20px',
    },
}));

const SummaryContainer = styled(Paper)(({ theme }) => ({
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
}));

const ContinueButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#131738',
    borderRadius: '50px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    marginTop: '20px',
    color: 'white',
}));

export const DatosFacturacion = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { cartItems } = location.state;

    const [formValues, setFormValues] = useState({
        nombres: '',
        cedula: '',
        direccion: '',
        email: '',
        telefono: '',
        acceptTerms: false,
    });

    const [formErrors, setFormErrors] = useState({
        nombres: '',
        cedula: '',
        direccion: '',
        email: '',
        telefono: '',
        acceptTerms: '',
    });

    useEffect(() => {
        const bill_id = localStorage.getItem('bill_id');
        if (bill_id) {
            const fetchBillDetails = async () => {
                const refresh = localStorage.getItem('refresh');
                const response = await getBillDetails({ refresh, bill_id });
                setFormValues({
                    nombres: response.name,
                    cedula: response.identity ?? '',
                    direccion: response.address,
                    email: response.email,
                    telefono: response.phone,
                    acceptTerms: true,
                });
            };
            fetchBillDetails();
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        setFormValues({
            ...formValues,
            [name]: name === 'acceptTerms' ? checked : value,
        });
    };

    // Validate form
    const validateForm = () => {
        let isValid = true;
        const errors = {};

        if (!formValues.nombres) {
            errors.nombres = 'Este campo es obligatorio';
            isValid = false;
        }
        if (!formValues.cedula) {
            errors.cedula = 'Este campo es obligatorio';
            isValid = false;
        }
        if (!formValues.direccion) {
            errors.direccion = 'Este campo es obligatorio';
            isValid = false;
        }
        if (!formValues.email) {
            errors.email = 'Este campo es obligatorio';
            isValid = false;
        }
        if (!formValues.telefono) {
            errors.telefono = 'Este campo es obligatorio';
            isValid = false;
        }
        if (!formValues.acceptTerms) {
            errors.acceptTerms = 'Debe aceptar los términos y condiciones';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const bill = {
                name: formValues.nombres,
                address: formValues.direccion,
                email: formValues.email,
                phone: formValues.telefono,
            };

            const refresh = localStorage.getItem('refresh');

            const callAPI = async () => {
                const response = await createBill({ refresh, bill });
                localStorage.setItem('bill_id', response.id);
            };

            callAPI();

            const total = cartItems.reduce((acc, item) => acc + item.price, 0);
            navigate('/formas-pago', { state: { total, cartItems } });
        }
    };

    return (
        <>
            <ImgText_Banner bannerImg={banner_facturador} text="Datos de " underline_text="facturación" />
            <Container>
                <FormContainer>
                    <Typography variant="h6" gutterBottom style={{
                        color: '#b6955f',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        width: '100%'
                    }}>
                        DETALLE DE LA FACTURACIÓN:
                    </Typography>
                    <TextField
                        fullWidth
                        label="Nombres Completos"
                        variant="filled"
                        margin="normal"
                        name="nombres"
                        value={formValues.nombres}
                        onChange={handleChange}
                        error={!!formErrors.nombres}
                        helperText={formErrors.nombres}
                    />
                    <TextField
                        fullWidth
                        label="Cédula/ Ruc/ Pasaporte"
                        variant="filled"
                        margin="normal"
                        name="cedula"
                        value={formValues.cedula}
                        onChange={handleChange}
                        error={!!formErrors.cedula}
                        helperText={formErrors.cedula}
                    />
                    <TextField
                        fullWidth
                        label="Dirección Domicilio"
                        variant="filled"
                        margin="normal"
                        name="direccion"
                        value={formValues.direccion}
                        onChange={handleChange}
                        error={!!formErrors.direccion}
                        helperText={formErrors.direccion}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        variant="filled"
                        margin="normal"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        error={!!formErrors.email}
                        helperText={formErrors.email}
                    />
                    <TextField
                        fullWidth
                        label="Teléfono"
                        variant="filled"
                        margin="normal"
                        name="telefono"
                        value={formValues.telefono}
                        onChange={handleChange}
                        error={!!formErrors.telefono}
                        helperText={formErrors.telefono}
                    />
                </FormContainer>
                <SummaryContainer>
                    <Typography variant="h6" align="center" gutterBottom style={{
                        color: '#b6955f',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        width: '100%'
                    }}>
                        TU PEDIDO
                    </Typography>
                    <SummaryTable items={cartItems} />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="acceptTerms"
                                checked={formValues.acceptTerms}
                                onChange={handleChange}
                            />
                        }
                        label={
                            <Typography variant="body2">
                                Sus datos personales se utilizarán para procesar su pedido, regular su experiencia en este sitio web y para otros fines descritos en nuestra política de privacidad.
                            </Typography>
                        }
                        style={{ marginTop: '20px' }}
                    />
                    {formErrors.acceptTerms && (
                        <Typography variant="body2" color="error" style={{ marginTop: '8px' }}>
                            {formErrors.acceptTerms}
                        </Typography>
                    )}
                    <ContinueButton variant='contained' onClick={handleSubmit}>
                        REALIZAR EL PEDIDO
                    </ContinueButton>
                </SummaryContainer>
            </Container>
        </>
    );
};
