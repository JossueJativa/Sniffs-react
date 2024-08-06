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
import { Planes_Autos } from './screens/Planes_Autos';
import { Planes_Motos } from './screens/Planes_Motos';
import { Planes_Camiones } from './screens/Planes_camiones';
import { Planes_Personas } from './screens/Planes_personas';
import { Planes_Mascotas } from './screens/Planes_Mascotas';
import { Planes_Ganaderia } from './screens/Planes_Ganaderia';
import { Register } from './screens/Register';
import { Perfil } from './screens/Perfil';
import { PrivateRoute } from './PrivateRoute';
import { AccesoSeguridad } from './screens/AccesoSeguridad';
import { MisPersonas } from './screens/MisPersonas';
import { Facturacion } from './screens/Facturacion';
import { Cart } from './screens/Cart';
import { DatosFacturacion } from './screens/DatosFacturacion';
import { FormasPago } from './screens/FormasPago';
import { DeUna } from './screens/DeUna';
import { Transferencias } from './screens/Transferencias';
import { Payphone } from './screens/Payphone';
import { Gpay } from './screens/Gpay';
import { MisPedidos } from './screens/MisPedidos';
import { HistorialCompras } from './screens/HistorialCompras';

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
                    <Route path='/register' element={<Register />} />
                    <Route path='/planes_autos' element={<Planes_Autos />} />
                    <Route path='/planes_motos' element={<Planes_Motos />} />
                    <Route path='/planes_camiones' element={<Planes_Camiones />} />
                    <Route path="planes_personas" element={<Planes_Personas />} />
                    <Route path="planes_mascotas" element={<Planes_Mascotas />} />
                    <Route path="planes_ganaderia" element={<Planes_Ganaderia />} />

                    <Route element={<PrivateRoute />}>
                        <Route path="/profile" element={<Perfil />} />
                        <Route path='/acceso-y-seguridad' element={<AccesoSeguridad />} />
                        <Route path='/mis-personas' element={<MisPersonas />} />
                        <Route path='/mis-facturaciones' element={<Facturacion />} />
                        <Route path='/mis-pedidos' element={<MisPedidos />} />
                        <Route path='/historial' element={<HistorialCompras />} />
                        <Route path='/carrito' element={<Cart />} />
                        <Route path='/datos-facturacion' element={<DatosFacturacion />} />
                        <Route path='/formas-pago' element={<FormasPago />} />
                        <Route path='/de-una' element={<DeUna />} />
                        <Route path='/transferencias' element={<Transferencias />} />
                        <Route path='/payphone' element={<Payphone />} />
                        <Route path='/gpay' element={<Gpay />} />
                    </Route>

                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </Box>
            <Footer />
            <WhatsAppFloatingButton />
            <SocialFloating />
        </Box>
    );
};
