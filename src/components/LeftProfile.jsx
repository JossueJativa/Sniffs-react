import React, { useEffect, useState } from 'react';
import { getUser, logout } from '../Controllers/userController';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Button } from '@mui/material';

const localStorage = window.localStorage;

export const LeftProfile = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            const refresh = localStorage.getItem('refresh');
            if (token && refresh) {
                setLoading(true);
                const decoded = jwtDecode(token);
                const user_id = decoded.user_id;
                try {
                    const userData = await getUser({ user_id, refresh });
                    setUser(userData);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
                setLoading(false);
            } else {
                setLoading(false);
            }
        };
        fetchUserData();
    }, []);

    const handleLogout = async () => {
        const access = localStorage.getItem('token');
        const refresh = localStorage.getItem('refresh');

        if (access && refresh) {
            const decoded = jwtDecode(access);
            const user_id = decoded.user_id;

            const response = await logout({ user_id, refresh });

            if (response) {
                localStorage.removeItem('token');
                localStorage.removeItem('refresh');
                setUser(null);
                navigate('/login');
                console.log('Sesión cerrada');
                window.location.reload();
            } else {
                console.error("Error al cerrar sesión");
            }
        }
    };

    if (loading) {
        return <div className='left-content-perfil'>Loading...</div>;
    }

    return (
        <div className='left-content-perfil'>
            {user ? (
                <>
                    <div className="grid-2-items">
                        <div className="grid-item">
                            <img src={user.photo} alt='Avatar' width={100} />
                        </div>
                        <div className="grid-item">
                            <h3>{user.username}</h3>
                            <h4>{user.email}</h4>
                        </div>
                    </div>
                    <br />
                    <div className='list-items'>
                        <Button variant='text' startIcon={<AccountCircleIcon style={{ color: '#131738' }} />} href='/profile'>
                            <p>Mi perfil</p>
                        </Button>
                        <Button variant='text' startIcon={<SecurityIcon style={{ color: '#131738' }} />} href='/acceso-y-seguridad'>
                            <p>Acceso y seguridad</p>
                        </Button>
                        <Button variant='text' startIcon={<PeopleIcon style={{ color: '#131738' }} />} href='/personas'>
                            <p>Personas</p>
                        </Button>
                        <Button variant='text' startIcon={<DescriptionIcon style={{ color: '#131738' }} />} href='/facturacion'>
                            <p>Facturación</p>
                        </Button>
                        <Button variant='text' startIcon={<CheckCircleIcon style={{ color: '#131738' }} />} href='/mis-pedidos'>
                            <p>Mis pedidos</p>
                        </Button>
                        <Button variant='text' startIcon={<ShoppingCartIcon style={{ color: '#131738' }} />} href='/historial-compras'>
                            <p>Historial compras</p>
                        </Button>
                        <Button variant='text' startIcon={<PowerSettingsNewIcon style={{ color: '#131738' }} />} onClick={handleLogout}>
                            <p>Cerrar sesión</p>
                        </Button>
                    </div>
                </>
            ) : (
                <p>User not found</p>
            )}
        </div>
    );
};
