import { Button, TextField } from "@mui/material"
import { LeftProfile } from "../components/LeftProfile"
import { jwtDecode } from "jwt-decode";
import { logout } from "../Controllers/userController";
import { useNavigate } from "react-router-dom";

const localStorage = window.localStorage;

export const AccesoSeguridad = () => {
    const navigate = useNavigate();

    const handleChangePassword = async () => {}

    const handleDeleteAccount = async () => {}

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
                navigate('/login');
                window.location.reload();
            } else {
                console.error("Error al cerrar sesión");
            }
        }
    };

    return (
        <div className="grid-profile">
            <div className="grid-item">
                <LeftProfile />
            </div>
            <div className="grid-item">
                <h2>Inicio de sección</h2>
                <p>Para agregar una contraseña a tu cuenta por primera vez, ingresa a la página para restablecer la contraseña para que podamos verificar tu identidad.</p>

                <div className="profile-data" style={{ display: 'flex', alignItems: 'center', marginTop: 10, width: '100%' }}>
                    <TextField
                        type="text"
                        fullWidth
                        variant="outlined"
                        label="Contraseña"
                    />
                </div>
                <div className="profile-data" style={{ display: 'flex', alignItems: 'center', marginTop: 10, width: '100%' }}>
                    <TextField
                        type="text"
                        fullWidth
                        variant="outlined"
                        label="Contraseña nueva"
                    />
                </div>
                <div className="profile-data" style={{ display: 'flex', alignItems: 'center', marginTop: 10, width: '100%' }}>
                    <TextField
                        type="text"
                        fullWidth
                        variant="outlined"
                        label="Confirmar contraseña"
                    />
                </div>
                <Button
                    variant='contained'
                    color='primary'
                    fullWidth
                    style={{ marginTop: 10 }}
                    onClick={handleChangePassword}
                >
                    Cambiar contraseña
                </Button>
                <h2>Seguridad</h2>
                <p>Cerrar sesión en todos los dispositivos ¿Iniciaste sesión en Canva en un dispositivo de uso compartido y olvidaste cerrar sesión? No hay problema: puedes cerrar sesión en todos tus dispositivos.</p>
                <Button
                    variant='contained'
                    color='primary'
                    fullWidth
                    style={{ marginTop: 10 }}
                    onClick={handleLogout}
                >
                    Cerrar sesión
                </Button>
                <h2>Eliminar cuenta</h2>
                <p>Si eliminas tu cuenta, ya no podrás acceder a ninguno de tus planes ni iniciar sesión en Sniffs.</p>
                <Button
                    variant='contained'
                    color='error'
                    fullWidth
                    style={{ marginTop: 10 }}
                    onClick={handleDeleteAccount}
                >
                    Eliminar cuenta
                </Button>
            </div>
        </div>
    )
}
