import React, { useState } from "react";
import { Grid, Typography, Button, Dialog, DialogContent, DialogActions } from "@mui/material";
import { ImgText_Banner } from "../components/ImgText_Banner";
import { banner_formasPago, btn_deuna, btn_efectivo, btn_gpay, btn_payphone, btn_transferencia, img_mujer } from "../assets";

export const FormasPago = ({ total }) => {
    const [openTransferencia, setOpenTransferencia] = useState(false);
    const [openEfectivo, setOpenEfectivo] = useState(false);

    const handleOpenTransferencia = () => {
        setOpenTransferencia(true);
    };

    const handleCloseTransferencia = () => {
        setOpenTransferencia(false);
    };

    const handleOpenEfectivo = () => {
        setOpenEfectivo(true);
    };

    const handleCloseEfectivo = () => {
        setOpenEfectivo(false);
    };

    return (
        <>
            <ImgText_Banner bannerImg={banner_formasPago} text="Formas de " underline_text="pago" />

            <Typography variant="h5" align="center" gutterBottom>
                ¡Escoge la forma de pago de tu preferencia!
            </Typography>

            <Grid container spacing={3} justifyContent="center" alignItems="center">
                <Grid item xs={4} style={{ textAlign: "center" }}>
                    <Button onClick={handleOpenTransferencia} style={{ padding: 0, border: 'none', background: 'none' }}>
                        <img src={btn_transferencia} alt="Transferencia" style={{ width: "300px" }} />
                    </Button>
                </Grid>
                <Grid item xs={4} style={{ textAlign: "center" }}>
                    <img src={img_mujer} alt="Mujer" style={{ width: "100%", maxWidth: "400px" }} />
                </Grid>
                <Grid item xs={4} style={{ textAlign: "center" }}>
                    <Button onClick={handleOpenEfectivo} style={{ padding: 0, border: 'none', background: 'none' }}>
                        <img src={btn_efectivo} alt="Efectivo" style={{ width: "300px" }} />
                    </Button>
                </Grid>
                <Grid item xs={4} />
            </Grid>

            {/* Modal para Transferencia */}
            <Dialog open={openTransferencia} onClose={handleCloseTransferencia} maxWidth="md" fullWidth>
                <DialogContent>
                    <img src={btn_deuna} alt="Modal Transferencia 1"  style={{ width: "400px" }}/>
                    <img src={btn_transferencia} alt="Modal Transferencia 2"  style={{ width: "400px" }}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseTransferencia} color="primary">Cerrar</Button>
                </DialogActions>
            </Dialog>

            {/* Modal para Efectivo */}
            <Dialog open={openEfectivo} onClose={handleCloseEfectivo} maxWidth="md" fullWidth>
                <DialogContent>
                    <img src={btn_payphone} alt="Modal Efectivo 1"  style={{ width: "400px" }}/>
                    <img src={btn_gpay} alt="Modal Efectivo 2"  style={{ width: "400px" }}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEfectivo} color="primary">Cerrar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
