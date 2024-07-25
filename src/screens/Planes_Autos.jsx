import React, { useState, useEffect } from 'react';
import { planes_autos_banner } from "../assets";
import { ImgText_Banner } from "../components/ImgText_Banner";
import CheckIcon from '@mui/icons-material/Check';
import { getProduct } from '../Controllers/productController';
import { addProduct } from '../Controllers/cartController';
import { Button, Snackbar, Alert } from '@mui/material';

export const Planes_Autos = () => {
    const [products, setProducts] = useState([]);
    const [alert, setAlert] = useState({ open: false, message: '', severity: '' });
    const productIds = [1, 2]; // Define los IDs de los productos que deseas mostrar

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await Promise.all(
                    productIds.map(async (id) => await getProduct({ product_id: id }))
                );
                setProducts(productsData.filter(product => product !== null));
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        fetchProducts();
    }, []);

    if (products.length === 0) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = (product_id) => {
        const fetchAddToCart = async () => {
            try {
                const response = await addProduct({ product_id, refresh: localStorage.getItem('refresh') });

                if (response) {
                    setAlert({ open: true, message: 'Producto añadido al carrito.', severity: 'success' });
                    window.location.reload();
                } else {
                    setAlert({ open: true, message: 'Error al añadir el producto al carrito.', severity: 'error' });
                }
            } catch (error) {
                console.error("Error adding product to cart:", error);
                setAlert({ open: true, message: 'Error al añadir el producto al carrito.', severity: 'error' });
            }
        }
        fetchAddToCart();
    }

    const handleCloseAlert = () => {
        setAlert({ ...alert, open: false });
    }

    return (
        <>
            <ImgText_Banner bannerImg={planes_autos_banner} text="VIAJA SEGURO EN" underline_text="TU AUTO" />

            <div className="container">
                <h1>Obtén tu plan a tu comodidad</h1>

                <div className="grid-2-items">
                    {products.map(product => (
                        <div className="item" key={product.id}>
                            <div className="container-plan">
                                <h2>{product.name} ${product.price}</h2>
                                <div className="information-text">
                                    <p>Contrato mensual</p>
                                    <div className="grid-2-items" style={{
                                        justifyContent: "space-between !important",
                                        width: "100%",
                                        padding: "0",
                                    }}>
                                        <div className="items">
                                            <span>Precio mensual</span>
                                        </div>
                                        <div className="items"><span>${product.mensual_sales}</span></div>
                                        <div className="items">
                                            <span>Instalación</span>
                                        </div>
                                        <div className="items"><span>${product.installation}</span></div>
                                    </div>

                                    <br />
                                    <div className="container">
                                        <Button
                                            variant="contained"
                                            className='custom-btn'
                                            onClick={() => handleAddToCart(product.id)}
                                        >
                                            Añadir al carrito
                                        </Button>
                                    </div>

                                    <br />
                                    <p><span><CheckIcon /></span>Servicio seguro 24/7</p>
                                    <p><span><CheckIcon /></span>Bloqueo Automático para evitar robo del vehículo</p>
                                    <p><span><CheckIcon /></span>Estacionamiento seguro del vehículo desde tu celular</p>
                                    <p><span><CheckIcon /></span>Botones de pánico dentro del vehículo en caso de asalto</p>
                                    <p><span><CheckIcon /></span>Comparte tu ubicación en tiempo real con tus familiares o personas de confianza</p>
                                    <p><span><CheckIcon /></span>Configura perímetros y notificaciones a tu celular cuando este fuera de zona</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity={alert.severity} sx={{ width: '100%' }}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </>
    );
}
