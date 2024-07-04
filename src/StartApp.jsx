import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { Navbar, Footer, WhatsAppFloatingButton, SocialFloating } from './components';
import { Box, CssBaseline } from '@mui/material';

export const StartApp = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Box>
            <Footer />
            <WhatsAppFloatingButton />
            <SocialFloating />
        </Box>
    );
};
