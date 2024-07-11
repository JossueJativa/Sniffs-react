import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { Navbar, Footer, WhatsAppFloatingButton, SocialFloating } from './components';
import { Box, CssBaseline } from '@mui/material';
import { Us } from './screens/Us';
import { Autos_Motos } from './screens/Autos_Motos';
import { Pesados } from './screens/Pesados';
import { Personas } from './screens/Personas';
import { Mascotas } from './screens/Mascotas';
import { Ganaderia } from './screens/Ganaderia';
import { Planes } from './screens/Planes';
import { Login } from './screens/Login';

export const StartApp = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/nosotros" element={<Us />} />
                    <Route path='/autos-motos' element={<Autos_Motos />} />
                    <Route path='/pesados' element={<Pesados />} />
                    <Route path='/personas' element={<Personas />} />
                    <Route path='/mascotas' element={<Mascotas />} />
                    <Route path='/ganaderia' element={<Ganaderia />} />
                    <Route path='/planes' element={<Planes />} />
                    <Route path='/login' element={<Login />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </Box>
            <Footer />
            <WhatsAppFloatingButton />
            <SocialFloating />
        </Box>
    );
};
