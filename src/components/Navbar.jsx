import React from 'react';
import { ThemeProvider } from "@emotion/react";
import { AppBar, Box, Container, Toolbar, MenuItem, Button, Menu, Divider, IconButton, Drawer, List, ListItem, ListItemText, Typography, CssBaseline } from "@mui/material";
import { lightTheme } from "../themes/ThemesUI";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
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
                <Typography variant="h6" component="div" sx={{ p: 2 }}>
                    Ingresar
                </Typography>
                <ListItem button component={Link} to="/login">
                    <ListItemText primary="Sniffs personas" />
                </ListItem>
                <ListItem button component={Link} to="">
                    <ListItemText primary="Sniffs empresas" />
                </ListItem>
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
                                <Button
                                    id="demo-customized-button"
                                    aria-controls={open ? 'demo-customized-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    variant="contained"
                                    disableElevation
                                    onClick={handleClick}
                                    endIcon={<KeyboardArrowDownIcon />}
                                >
                                    Ingresar
                                </Button>
                                <Menu
                                    id="demo-customized-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'demo-customized-button',
                                    }}
                                >
                                    <MenuItem component={Link} to="/login" onClick={handleClose}>Sniffs personas</MenuItem>
                                    <MenuItem component={Link} to="" onClick={handleClose}>Sniffs empresas</MenuItem>
                                </Menu>
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
}
