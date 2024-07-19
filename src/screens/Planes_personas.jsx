import React, { useState, useEffect } from 'react';
import { planes_personas_banner } from "../assets";
import { ImgText_Banner } from "../components/ImgText_Banner";
import CheckIcon from '@mui/icons-material/Check';
import { getProduct } from '../Controllers/productController';

export const Planes_Personas = () => {
    const [products, setProducts] = useState([]);
    const productIds = [7, 8]; // Define los IDs de los productos que deseas mostrar

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

    return (
        <>
            <ImgText_Banner bannerImg={planes_personas_banner} text="PROTEGE A LOS QUE MAS" underline_text="AMAS" />

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
                                        <a href="#" className="custom-btn">
                                            Añadir al carrito
                                        </a>
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
        </>
    );
}
