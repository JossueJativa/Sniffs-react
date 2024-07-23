import React, { useEffect, useState } from 'react';
import { LeftProfile } from '../components/LeftProfile';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { getUser } from '../Controllers/userController';
import { Button, TextField, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import EditIcon from '@mui/icons-material/Edit';

export const Perfil = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: '',
        photo: ''
    });
    const [isEditing, setIsEditing] = useState({
        username: false,
        email: false,
        phone: false
    });

    useEffect(() => {
        const data = localStorage.getItem('token');
        const decoded = jwtDecode(data);

        const user_id = decoded.user_id;
        const refresh = localStorage.getItem('refresh');

        const fetchUser = async () => {
            const response = await getUser({ user_id, refresh });

            if (response) {
                setUser(response);
            } else {
                console.log('Error al obtener el usuario');
            }
        };

        fetchUser();
    }, []);

    const handleEditClick = (field) => {
        setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    return (
        <div className="grid-profile">
            <div className="grid-item">
                <LeftProfile />
            </div>
            <div className="grid-item content-center">
                <div className="profile-data" style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                    <img src={user.photo} alt="User Photo" width={100} />
                </div>
                <Button
                    variant='contained'
                    color='error'
                    style={{ marginTop: 10 }}
                >
                    Eliminar Foto
                </Button>
                <Button
                    component="label"
                    role={undefined}
                    variant='contained'
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    style={{ marginTop: 10 }}
                >
                    Subir Foto
                    <input type="file" hidden />
                </Button>

                <div className="profile-data" style={{ display: 'flex', alignItems: 'center', marginTop: 10, width: '100%' }}>
                    <TextField
                        type="text"
                        value={user.username}
                        disabled={!isEditing.username}
                        fullWidth
                        variant="outlined"
                        label="Username"
                    />
                    <IconButton onClick={() => handleEditClick('username')} style={{ marginLeft: 10 }}>
                        <EditIcon />
                    </IconButton>
                </div>

                <div className="profile-data" style={{ display: 'flex', alignItems: 'center', marginTop: 10, width: '100%' }}>
                    <TextField
                        type="email"
                        value={user.email}
                        disabled={!isEditing.email}
                        fullWidth
                        variant="outlined"
                        label="Email"
                    />
                    <IconButton onClick={() => handleEditClick('email')} style={{ marginLeft: 10 }}>
                        <EditIcon />
                    </IconButton>
                </div>

                <div className="profile-data" style={{ display: 'flex', alignItems: 'center', marginTop: 10, width: '100%' }}>
                    <TextField
                        type="tel"
                        value={user.phone}
                        disabled={!isEditing.phone}
                        fullWidth
                        variant="outlined"
                        label="Phone"
                    />
                    <IconButton onClick={() => handleEditClick('phone')} style={{ marginLeft: 10 }}>
                        <EditIcon />
                    </IconButton>
                </div>

                <Button
                    variant='contained'
                    color='primary'
                    fullWidth
                    style={{ marginTop: 10 }}
                >
                    Guardar Cambios
                </Button>
            </div>
        </div>
    );
};
