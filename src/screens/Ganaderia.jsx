import {
    bannerGanaderia, bannerGanaderia1, bannerGanaderia2, bannerGanaderia3,
    imagen7, ganaderia1, ganaderia2, ganaderia3, ganaderia4, ganaderia5, ganaderia6
} from '../assets';
import { Carrousel } from '../components';

export const Ganaderia = () => {
    const carrousel = [bannerGanaderia1, bannerGanaderia2, bannerGanaderia3];
    return (
        <>
            <Carrousel backgroundIMG={bannerGanaderia} carrousel={carrousel} />

            <div className="grid-2-items">
                <div className="item">
                    <div className="container-img-text-btn">
                        <h2>Cuidado</h2>
                        <p>A tu ganado 24/7</p>

                        <img src={ganaderia1} alt="Personas" width={700} />

                        <a href="/planes" className="custom-btn">
                            Cotiza nuestros planes
                        </a>
                    </div>
                </div>
                <div className="item">
                    <div className="brown-background">
                        <p>
                            Nuestro GPS esta diseñado específicamente para el seguimiento de ganado, lo que significa que te permite ubicar
                            tus animales en todo momento. Con nuestra tecnología, podrás monitorear la ubicación de tu ganado desde tu teléfono
                            móvil o cualquier dispositivo conectado a internet
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid-3-item">
                <div className="item">
                    <img src={ganaderia2} alt="icono 1" width={100} />
                    <p>Localiza en tiempo real</p>
                </div>
                <div className="item">
                    <img src={ganaderia3} alt="icono 2" width={100} />
                    <p>Recibe alertas de seguridad</p>
                </div>
                <div className="item">
                    <img src={ganaderia4} alt="icono 3" width={100} />
                    <p>Monitoreo de la actividad fisica</p>
                </div>
                <div className="item">
                    <img src={ganaderia5} alt="icono 4" width={100} />
                    <p>Historial de ubicaciones</p>
                </div>
                <div className="item">
                    <img src={ganaderia6} alt="icono 5" width={100} />
                    <p>Alertas de bateria baja</p>
                </div>
                <div className="item">
                    <p><strong>Descarga nuestra app</strong></p>
                    <img src={imagen7} alt="demo celular" width={300} />
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
