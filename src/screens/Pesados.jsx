import { Carrousel } from "../components/Carrousel";
import {
    bannerPesados, bannerPesados1, bannerPesados2, bannerPesados3,
    imagenpesados1, icon1, icon2, icon3, icon4, icon5, icon6
} from '../assets';

export const Pesados = () => {
    const carrousel = [bannerPesados1, bannerPesados2, bannerPesados3]
    return (
        <>
            <Carrousel backgroundIMG={bannerPesados} carrousel={carrousel} />

            <div className="grid-2-items">
                <div className="item">
                    <div className="container-img-text-btn">
                        <h2>Rastrea</h2>
                        <p>tu vehículo pesado 24/7</p>

                        <img src={imagenpesados1} alt="Pesados" width={700} />

                        <a href="/planes" className="custom-btn">
                            Cotiza nuestros planes
                        </a>
                    </div>
                </div>
                <div className="item">
                    <div className="brown-background">
                        <p>
                            Protege a tus seres queridos con el GPS adaptado para personas, la herramienta
                            de seguimiento perfecta para asegurarte de que tus seres queridos estén siempre seguros y protegidos
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid-3-item">
                <div className="item">
                    <img src={icon1} alt="icono 1" width={100} />
                    <p>Servicio Seguro 24/7</p>
                </div>
                <div className="item">
                    <img src={icon2} alt="icono 2" width={100} />
                    <p>Bloqueo automático para evitar robo del vehículo</p>
                </div>
                <div className="item">
                    <img src={icon3} alt="icono 3" width={100} />
                    <p>Estacionamiento seguro del vehículo desde tu celular</p>
                </div>
                <div className="item">
                    <img src={icon4} alt="icono 4" width={100} />
                    <p>Botones de pánico dentro del vehículo en caso de asalto</p>
                </div>
                <div className="item">
                    <img src={icon5} alt="icono 5" width={100} />
                    <p>Comparte tu ubicación en tiempo real con tus familiares o personas de confianza</p>
                </div>
                <div className="item">
                    <img src={icon6} alt="icono 6" width={100} />
                    <p>Configura perímetros y notificaciones a tu celular cuando este fuera de zona</p>
                </div>
            </div>

            <div className="container-center">
                <a href="#" className="custom-btn">
                    Solicita un demo gratis
                </a>
            </div>
        </>
    )
}
