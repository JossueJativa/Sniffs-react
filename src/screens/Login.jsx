import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Alert, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useState } from "react";
import { login } from "../Controllers/userController";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
    const location = useLocation();
    const { error_message } = location.state || {};
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!email || !password) {
            setErrorMessage("Por favor, complete todos los campos.");
            return;
        }

        try {
            const response = await login({ username: email, password });

            if (response) {
                localStorage.setItem('token', response.access);
                localStorage.setItem('refresh', response.refresh);
                navigate('/');
                window.location.reload();
            } else {
                setErrorMessage("Credenciales incorrectas, por favor intente nuevamente.");
            }
        } catch (error) {
            console.error("Error durante el inicio de sesión:", error);
            setErrorMessage("Ocurrió un error, por favor intente nuevamente más tarde.");
        }
    }

    return (
        <div className="login-container">
            <div className="center-form">
                {error_message && <Alert severity="error" style={{
                    width: '100%',
                    marginBottom: '1rem',
                    textAlign: 'center',
                    color: 'red',
                }}>{ error_message }</Alert>}
                <form onSubmit={handleSubmit}>
                    <h4>
                        <strong>Inicio de sesión</strong>
                    </h4>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <TextField
                            label="Email, Celular o Usuario"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={handleEmail}
                            style={{ background: 'white' }}
                        />
                    </FormControl>
                    <br />
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handlePassword}
                            style={{ background: 'white' }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <p>
                            Al continuar, acepta las <span>Condiciones de uso</span> y el 
                            <span> Aviso de privacidad</span> de Sniffs.
                        </p>
                        <button type="submit" href="#" className="custom-btn" style={{ textAlign: 'center' }}>
                            Continuar
                        </button>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <a href="/register" className="custom-btn" style={{ textAlign: 'center' }}>
                            Crear una cuenta Sniffs
                        </a>
                    </FormControl>
                    <hr />
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <a href="/register" className="custom-btn" style={{ textAlign: 'center' }}>
                            Iniciar con Google
                        </a>
                    </FormControl>
                </form>
            </div>
        </div>
    )
}