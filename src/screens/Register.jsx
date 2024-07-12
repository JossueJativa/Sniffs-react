import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [idNumber, setIdNumber] = useState("");

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
    }

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    }

    return (
        <div className="login-container">
            <div className="center-form">
                <form onSubmit={handleSubmit}>
                    <h4>
                        <strong>Crear usuario</strong>
                    </h4>
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <TextField
                            label="Nombre"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={handleInputChange(setName)}
                            style={{ background: 'white' }}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <TextField
                            label="Email o Correo"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={handleInputChange(setEmail)}
                            style={{ background: 'white' }}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handleInputChange(setPassword)}
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
                        <InputLabel htmlFor="outlined-adornment-confirm-password">Confirmar Contraseña</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-confirm-password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={handleInputChange(setConfirmPassword)}
                            style={{ background: 'white' }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle confirm password visibility"
                                        onClick={handleShowConfirmPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Confirm Password"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <TextField
                            label="Celular"
                            variant="outlined"
                            fullWidth
                            value={phone}
                            onChange={handleInputChange(setPhone)}
                            style={{ background: 'white' }}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <TextField
                            label="Cédula"
                            variant="outlined"
                            fullWidth
                            value={idNumber}
                            onChange={handleInputChange(setIdNumber)}
                            style={{ background: 'white' }}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <p>
                            Al continuar, acepta las <span>Condiciones de uso</span> y el 
                            <span> Aviso de privacidad</span> de Sniffs.
                        </p>
                        <button type="submit" className="custom-btn" style={{ textAlign: 'center' }}>
                            Continuar
                        </button>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <Link to="/login" className="custom-btn" style={{ textAlign: 'center' }}>
                            Iniciar Sección
                        </Link>
                    </FormControl>
                    <hr />
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <Link to="/login" className="custom-btn" style={{ textAlign: 'center' }}>
                            Iniciar con Google
                        </Link>
                    </FormControl>
                </form>
            </div>
        </div>
    )
}