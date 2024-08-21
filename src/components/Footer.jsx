import { Grid } from "@mui/material";
import { iconFacebook, iconInstagram, iconLinkedin, iconTiktok, qrContact } from "../assets";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="cont-footer">
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6} md={4} className="responsive_qr">
                    <img src={ qrContact } alt="qrContact" className="qrContact"/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className="justify-content">
                        <p className="title-footer">Contáctenos: </p>
                        <br />
                        <p>Dirección: Japón N37-214 y Pasaje Mónaco</p>
                        <p>Edificio: Acquamarina Piso 3</p>
                        <p>Teléfono: (+593) 996761198</p>
                        <p>Email: crystian_munoz@sniffsec.com</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <p>Síguenos en:</p>
                    <p>
                        <Link to="https://www.facebook.com/profile.php?id=100092230603426" target="_blank" className="icon-social">
                            <img src={iconFacebook} alt="iconFacebook" className="icons"/>
                        </Link>
                    </p>
                    <p>
                        <Link to="https://instagram.com/sniffsgps?igshid=NjIwNzIyMDk2Mg==" target="_blank" className="icon-social">
                            <img src={iconInstagram} alt="iconInstagram" className="icons"/>
                        </Link>
                    </p>
                    <p>
                        <Link to="https://www.linkedin.com/feed/" target="_blank" className="icon-social">
                            <img src={iconLinkedin} alt="iconLinkedin" className="icons"/>
                        </Link>
                    </p>
                    <p>
                        <Link to="https://www.tiktok.com/@sniffsec?_t=8ehORulmSE1&_r=1" target="_blank" className="icon-social">
                            <img src={iconTiktok} alt="iconTiktok" className="icons"/>
                        </Link>
                    </p>
                </Grid>
            </Grid>
            <div className="center">
                <p>© Powered by Crystian Muñoz | 2023</p>
            </div>
        </footer>
    );
}