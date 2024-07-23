import { Button, Input, TextField } from "@mui/material"
import { LeftProfile } from "../components/LeftProfile"

export const Facturacion = () => {
    return (
        <div className="grid-profile">
            <div className="grid-item">
                <LeftProfile />
            </div>
            <div className="grid-item">
                <h2>Datos de facturación</h2>
                <TextField
                    type="text"
                    fullWidth
                    variant="outlined"
                    label="Nombres Completos"
                    style={{ marginTop: 10 }}
                />

                <TextField
                    type="text"
                    fullWidth
                    variant="outlined"
                    label="Cédula/RUC/Pasaporte"
                    style={{ marginTop: 10 }}
                />

                <TextField
                    type="text"
                    fullWidth
                    variant="outlined"
                    label="Dirección"
                    style={{ marginTop: 10 }}
                />

                <TextField
                    type="text"
                    fullWidth
                    variant="outlined"
                    label="Correo Electrónico"
                    style={{ marginTop: 10 }}
                />

                <TextField
                    type="text"
                    fullWidth
                    variant="outlined"
                    label="Teléfono"
                    style={{ marginTop: 10 }}
                />

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
    )
}
