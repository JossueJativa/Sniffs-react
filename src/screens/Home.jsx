import React from 'react';
import { Typography } from '@mui/material';
import { Carrousel } from '../components';
import {
    img1, img2, img3, img4, img5,
    icon1, icon2, icon3, icon4, icon5, icon6,
    autos_motos, camiones, personas, mascotas, ganadería,
    WhatsApp, demo, descarga,
    banner
} from '../assets';
import { Link } from 'react-router-dom';

export const Home = () => {
    const listImg = [img1, img2, img3, img4, img5];

    return (
        <div className="main-img">
            <Carrousel backgroundIMG={banner} carrousel={listImg} />

            <div className="container-2-grid">
                <div className="grid-item text-center">
                    <Typography variant="h3">Beneficios</Typography>
                </div>
                <div className="grid-item text-center">
                    <div className="grid-3-items">
                        <div className="box-container">
                            <img src={icon1} alt="icon" width={100} />
                            <Typography variant="p">Servicio Seguro 24/7</Typography>
                        </div>
                        <div className="box-container">
                            <img src={icon2} alt="icon" width={100} />
                            <Typography variant="p">Bloqueo Automático para evitar robo del vehículo</Typography>
                        </div>
                        <div className="box-container">
                            <img src={icon3} alt="icon" width={100} />
                            <Typography variant="p">Estacionamiento seguro del vehículo desde tu celular</Typography>
                        </div>
                        <div className="box-container">
                            <img src={icon4} alt="icon" width={100} />
                            <Typography variant="p">Botones de pánico dentro del vehículo en caso de asalto</Typography>
                        </div>
                        <div className="box-container">
                            <img src={icon5} alt="icon" width={100} />
                            <Typography variant="p">Comparte tu ubicación en tiempo real con tus familiares o personas de confianza</Typography>
                        </div>
                        <div className="box-container">
                            <img src={icon6} alt="icon" width={100} />
                            <Typography variant="p">Configura perímetros y notificaciones a tu celular cuando este fuera de zona</Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-2-grid">
                <div className="grid-item text-center">
                    <Typography variant="h3">Soluciones</Typography>
                </div>
                <div className="grid-item text-center">
                    <div className="grid-5-items">
                        <div className="img-text">
                            <div className="background-img">
                                <img src={autos_motos} alt="icon" width={100} />
                            </div>
                            <Link to="/autos-motos">
                                <Typography variant="p">Autos y Motos</Typography>
                            </Link>
                        </div>
                        <div className="img-text">
                            <div className="background-img">
                                <img src={camiones} alt="icon" width={100} />
                            </div>
                            <Link to="/camiones">
                                <Typography variant="p">Camiones</Typography>
                            </Link>
                        </div>
                        <div className="img-text">
                            <div className="background-img">
                                <img src={personas} alt="icon" width={100} />
                            </div>
                            <Link to="/personas">
                                <Typography variant="p">Personas</Typography>
                            </Link>
                        </div>
                        <div className="img-text">
                            <div className="background-img">
                                <img src={mascotas} alt="icon" width={100} />
                            </div>
                            <Link to="/mascotas">
                                <Typography variant="p">Mascotas</Typography>
                            </Link>
                        </div>
                        <div className="img-text">
                            <div className="background-img">
                                <img src={ganadería} alt="icon" width={100} />
                            </div>
                            <Link to="/ganaderia">
                                <Typography variant="p">Ganadería</Typography>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-primary">
                <Typography variant="h3">La calidad es la mejor inversión</Typography>
            </div>
            <div className="container-2-grid">
                <div className="grid-item text-center">
                    <Typography variant="h3">Adquiere tu GPS</Typography>
                </div>
                <div className="grid-item text-center">
                    <div className="grid-3-items">
                        <div className="button-box">
                            <img src={WhatsApp} alt="icon" width={100} />
                            <Typography variant="p">Escríbenos a nuestro chat de WhatsApp y un asesor se pondrá en contacto contigo</Typography>
                        </div>
                        <div className="button-box">
                            <img src={demo} alt="icon" width={100} />
                            <Typography variant="p">Descarga nuestra aplicación desde tu dispositivo Movil</Typography>
                        </div>
                        <div className="button-box">
                            <img src={descarga} alt="icon" width={100} />
                            <Typography variant="p">Solicita un demo y descubre como funciona</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};