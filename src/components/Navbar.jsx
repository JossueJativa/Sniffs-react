import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "@emotion/react";
import { AppBar, Box, Container, Toolbar, MenuItem, Button, Menu, Divider, IconButton, Drawer, List, ListItem, ListItemText, Typography, CssBaseline, Badge } from "@mui/material";
import { lightTheme } from "../themes/ThemesUI";
import { logo } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { logout, getUser } from '../Controllers/userController';
import { jwtDecode } from 'jwt-decode';
import { getCartNumber } from '../Controllers/cartController';
import { useCart } from '../Context/cartContext'; // Asegúrate de la ruta correcta

export const Navbar = () => {
    const [anchorElProfile, setAnchorElProfile] = useState(null);
    const [anchorElLogin, setAnchorElLogin] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const { cartCount, setCartCount } = useCart();
    const openProfile = Boolean(anchorElProfile);
    const openLogin = Boolean(anchorElLogin);
    const navigate = useNavigate();

    useEffect(() => {
        const refresh = localStorage.getItem('refresh');
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (token && refresh) {
                setLoggedIn(true);
                const decoded = jwtDecode(token);
                const user_id = decoded.user_id;
                const userData = await getUser({ user_id, refresh });
                setUser(userData);
            } else {
                setLoggedIn(false);
            }
        };
        fetchUserData();
    }, []);

    useEffect(() => {
        const refresh = localStorage.getItem('refresh');
        const fetchCartNumber = async () => {
            const cartNumber = await getCartNumber({ refresh });
            if (cartNumber > 0)
                setCartCount(cartNumber);
            else 
                setCartCount(0);
        }
        fetchCartNumber();
    }, [setCartCount]);

    const handleClickProfile = (event) => {
        setAnchorElProfile(event.currentTarget);
    };

    const handleCloseProfile = () => {
        setAnchorElProfile(null);
    };

    const handleClickLogin = (event) => {
        setAnchorElLogin(event.currentTarget);
    };

    const handleCloseLogin = () => {
        setAnchorElLogin(null);
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleLogout = async () => {
        const access = localStorage.getItem('token');
        const refresh = localStorage.getItem('refresh');

        const decoded = jwtDecode(access);
        const user_id = decoded.user_id;

        const response = await logout({ user_id, refresh });

        if (response) {
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');
            setLoggedIn(false);
            setUser(null);
            navigate('/login');
            setAnchorElLogin(null);
        } else {
            console.error("Error al cerrar sesión");
        }
    };

    const drawer = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button component={Link} to="/nosotros">
                    <ListItemText primary="Nosotros" />
                </ListItem>
                <ListItem button component={Link} to="/autos-motos">
                    <ListItemText primary="Autos/Motos" />
                </ListItem>
                <ListItem button component={Link} to="/pesados">
                    <ListItemText primary="Pesados" />
                </ListItem>
                <ListItem button component={Link} to="/personas">
                    <ListItemText primary="Personas" />
                </ListItem>
                <ListItem button component={Link} to="/mascotas">
                    <ListItemText primary="Mascotas" />
                </ListItem>
                <ListItem button component={Link} to="/ganaderia">
                    <ListItemText primary="Ganadería" />
                </ListItem>
                <ListItem button component={Link} to="/planes">
                    <ListItemText primary="Planes" />
                </ListItem>
                <Divider />
                {!loggedIn ? (
                    <>
                        <Typography variant="h6" component="div" sx={{ p: 2 }}>
                            Ingresar
                        </Typography>
                        <ListItem button component={Link} to="/login">
                            <ListItemText primary="Sniffs personas" />
                        </ListItem>
                        <ListItem button component={Link} to="">
                            <ListItemText primary="Sniffs empresas" />
                        </ListItem>
                    </>
                ) : (
                    <>
                        <Typography variant="h6" component="div" sx={{ p: 2 }}>
                            Perfil
                        </Typography>
                        <ListItem button component={Link} to="/profile">
                            <ListItemText primary="Mi cuenta" />
                        </ListItem>
                        <ListItem button component={Link} to="/acceso-y-seguridad">
                            <ListItemText primary="Acceso y seguridad" />
                        </ListItem>
                        <ListItem button component={Link} to="/mis-personas">
                            <ListItemText primary="Personas" />
                        </ListItem>
                        <ListItem button component={Link} to="/mis-facturaciones">
                            <ListItemText primary="Facturas" />
                        </ListItem>
                        <ListItem button component={Link} to="/mis-pedidos">
                            <ListItemText primary="Mis pedidos" />
                        </ListItem>
                        <ListItem button component={Link} to="/historial">
                            <ListItemText primary="Historial de compras" />
                        </ListItem>
                        <ListItem button onClick={handleLogout}>
                            <ListItemText primary="Cerrar sesión" />
                        </ListItem>
                    </>
                )}
            </List>
        </Box>
    );

    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                            <Link to="/">
                                <img src={logo} alt="logo" width={80} />
                            </Link>
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', width: '100%' }}>
                                <MenuItem component={Link} to="/nosotros">Nosotros</MenuItem>
                                <MenuItem component={Link} to="/autos-motos">Autos/Motos</MenuItem>
                                <MenuItem component={Link} to="/pesados">Pesados</MenuItem>
                                <MenuItem component={Link} to="/personas">Personas</MenuItem>
                                <MenuItem component={Link} to="/mascotas">Mascotas</MenuItem>
                                <MenuItem component={Link} to="/ganaderia">Ganadería</MenuItem>
                                <MenuItem component={Link} to="/planes">Planes</MenuItem>
                                {loggedIn && (
                                    <MenuItem component={Link} to="/carrito">
                                        <Badge badgeContent={cartCount} color="secondary">
                                            <ShoppingCartIcon />
                                        </Badge>
                                    </MenuItem>
                                )}
                                {loggedIn ? (
                                    <>
                                        <Button
                                            id="profile-button"
                                            aria-controls={openProfile ? 'profile-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={openProfile ? 'true' : undefined}
                                            variant="contained"
                                            disableElevation
                                            onClick={handleClickProfile}
                                            endIcon={<KeyboardArrowDownIcon />}
                                        >
                                            <img src={user?.photo} alt="User" style={{ width: 40, height: 40, borderRadius: '50%', marginRight: 10 }} />
                                        </Button>
                                        <Menu
                                            id="profile-menu"
                                            anchorEl={anchorElProfile}
                                            open={openProfile}
                                            onClose={handleCloseProfile}
                                            MenuListProps={{
                                                'aria-labelledby': 'profile-button',
                                            }}
                                        >
                                            <MenuItem component={Link} to="/profile" onClick={handleCloseProfile}>Mi cuenta</MenuItem>
                                            <MenuItem component={Link} to="/acceso-y-seguridad" onClick={handleCloseProfile}>Acceso y seguridad</MenuItem>
                                            <MenuItem component={Link} to="/mis-personas" onClick={handleCloseProfile}>Personas</MenuItem>
                                            <MenuItem component={Link} to="/mis-facturaciones" onClick={handleCloseProfile}>Facturas</MenuItem>
                                            <MenuItem component={Link} to="/mis-pedidos" onClick={handleCloseProfile}>Mis pedidos</MenuItem>
                                            <MenuItem component={Link} to="/historial" onClick={handleCloseProfile}>Historial de compras</MenuItem>
                                            <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
                                        </Menu>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            id="login-button"
                                            aria-controls={openLogin ? 'login-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={openLogin ? 'true' : undefined}
                                            variant="contained"
                                            disableElevation
                                            onClick={handleClickLogin}
                                            endIcon={<KeyboardArrowDownIcon />}
                                        >
                                            Ingresar
                                        </Button>
                                        <Menu
                                            id="login-menu"
                                            anchorEl={anchorElLogin}
                                            open={openLogin}
                                            onClose={handleCloseLogin}
                                            MenuListProps={{
                                                'aria-labelledby': 'login-button',
                                            }}
                                        >
                                            <MenuItem component={Link} to="/login" onClick={handleCloseLogin}>Sniffs personas</MenuItem>
                                            <MenuItem component={Link} to="" onClick={handleCloseLogin}>Sniffs empresas</MenuItem>
                                        </Menu>
                                    </>
                                )}
                            </Box>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={toggleDrawer(!drawerOpen)}
                                sx={{ display: { xs: 'flex', md: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 2 }}
            >
                {drawer}
            </Drawer>
            <Box component="main" sx={{ mt: 4, p: 2 }}>
            </Box>
        </ThemeProvider>
    );
};
