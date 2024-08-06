import React, { useState, useEffect } from 'react';
import { Button, TextField } from "@mui/material";
import { LeftProfile } from "../components/LeftProfile";
import { getBillDetails, createBill } from '../Controllers/facturadorController';

export const Facturacion = () => {
    const [initialValues, setInitialValues] = useState({
        nombres: '',
        cedula: '',
        direccion: '',
        email: '',
        telefono: '',
    });
    const [formValues, setFormValues] = useState({
        nombres: '',
        cedula: '',
        direccion: '',
        email: '',
        telefono: '',
    });

    useEffect(() => {
        const bill_id = localStorage.getItem('bill_id');
        if (bill_id) {
            const fetchBillDetails = async () => {
                const refresh = localStorage.getItem('refresh');
                const response = await getBillDetails({ refresh, bill_id });
                const fetchedValues = {
                    nombres: response.name,
                    cedula: response.cedula ?? '',
                    direccion: response.address,
                    email: response.email,
                    telefono: response.phone,
                };
                setInitialValues(fetchedValues);
                setFormValues(fetchedValues);
            };
            fetchBillDetails();
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const refresh = localStorage.getItem('refresh');

        const fieldsChanged = ['nombres', 'direccion', 'email', 'telefono'].some(
            field => formValues[field] !== initialValues[field]
        );

        if (fieldsChanged) {
            const newBillData = {
                nombres: formValues.nombres,
                cedula: formValues.cedula ?? '',
                direccion: formValues.direccion,
                email: formValues.email,
                telefono: formValues.telefono,
            };
            
            try {
                const response = await createBill({ refresh, ...newBillData });
                if (response.success) {
                    localStorage.setItem('bill_id', response.id);
                    alert('Factura creada con éxito');
                } else {
                    alert('Error al crear la nueva factura');
                }
            } catch (error) {
                console.error('Error al crear la nueva factura:', error);
                alert('Error al crear la nueva factura');
            }
        } else {
            alert('No se han realizado cambios en los datos facturables.');
        }
    };

    return (
        <div className="grid-profile">
            <div className="grid-item">
                <LeftProfile />
            </div>
            <div className="grid-item">
                <h2>Datos de facturación</h2>
                <form onSubmit={handleSubmit}>
                    <TextField
                        type="text"
                        fullWidth
                        variant="outlined"
                        label="Nombres Completos"
                        name="nombres"
                        value={formValues.nombres}
                        onChange={handleChange}
                        style={{ marginTop: 10 }}
                    />

                    <TextField
                        type="text"
                        fullWidth
                        variant="outlined"
                        label="Cédula/RUC/Pasaporte"
                        name="cedula"
                        value={formValues.cedula}
                        onChange={handleChange}
                        style={{ marginTop: 10 }}
                    />

                    <TextField
                        type="text"
                        fullWidth
                        variant="outlined"
                        label="Dirección"
                        name="direccion"
                        value={formValues.direccion}
                        onChange={handleChange}
                        style={{ marginTop: 10 }}
                    />

                    <TextField
                        type="text"
                        fullWidth
                        variant="outlined"
                        label="Correo Electrónico"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        style={{ marginTop: 10 }}
                    />

                    <TextField
                        type="text"
                        fullWidth
                        variant="outlined"
                        label="Teléfono"
                        name="telefono"
                        value={formValues.telefono}
                        onChange={handleChange}
                        style={{ marginTop: 10 }}
                    />

                    <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                        type="submit"
                        style={{ marginTop: 10 }}
                    >
                        Guardar Cambios
                    </Button>
                </form>
            </div>
        </div>
    );
};
