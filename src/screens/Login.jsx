import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useState } from "react";

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

    const handleSubmit = (e) => { }
    return (
        <div className="login-container">
            <div className="center-form">
                <form onSubmit={handleSubmit}>
                    <h4>
                        <strong>Inicio de sesión</strong>
                    </h4>
                    <FormControl sx={{ m: 1, width: '69ch' }} variant="outlined">
                        <TextField
                            label="Email o Correo"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={handleEmail}
                            style={{ background: 'white' }}
                        />
                    </FormControl>
                    <br />
                    <FormControl sx={{ m: 1, width: '69ch' }} variant="outlined">
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
                    <FormControl sx={{ m: 1, width: '69ch' }} variant="outlined">
                        <p>
                            Al continuar, acepta las <span>Condiciones de uso</span> y el 
                            <span> Aviso de privacidad</span> de Sniffs.
                        </p>
                        <a href="#" className="custom-btn" style={{ textAlign: 'center' }}>
                            Continuar
                        </a>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '69ch' }} variant="outlined">
                        <a href="#" className="custom-btn" style={{ textAlign: 'center' }}>
                            Crear una cuenta Sniffs
                        </a>
                    </FormControl>
                    <hr />
                    <FormControl sx={{ m: 1, width: '69ch' }} variant="outlined">
                        <a href="#" className="custom-btn" style={{ textAlign: 'center' }}>
                            Iniciar con Google
                        </a>
                    </FormControl>
                </form>
            </div>
        </div>
    )
}
