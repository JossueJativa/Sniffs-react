import { 
    bannerPersonas, bannerPersonas1, bannerPersonas2, bannerPersonas3,
    persona1, persona2, persona3, persona4, persona5, persona6, imagen7
} from '../assets';
import { Carrousel } from '../components';

export const Personas = () => {
    const carrousel = [ bannerPersonas1, bannerPersonas2, bannerPersonas3 ];
    return (
        <>
            <Carrousel backgroundIMG={bannerPersonas} carrousel={carrousel} />

            <div className="grid-2-items">
                <div className="item">
                    <div className="container-img-text-btn">
                        <h2>Rastrea</h2>
                        <p>tu vehículo pesado 24/7</p>

                        <img src={persona1} alt="Personas" width={700} />

                        <a href="#" className="custom-btn">
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
                    <img src={persona2} alt="icono 1" width={100} />
                    <p>Servicio Seguro 24/7</p>
                </div>
                <div className="item">
                    <img src={persona3} alt="icono 2" width={100} />
                    <p>Bloqueo automático para evitar robo del vehículo</p>
                </div>
                <div className="item">
                    <img src={persona4} alt="icono 3" width={100} />
                    <p>Estacionamiento seguro del vehículo desde tu celular</p>
                </div>
                <div className="item">
                    <img src={persona5} alt="icono 4" width={100} />
                    <p>Botones de pánico dentro del vehículo en caso de asalto</p>
                </div>
                <div className="item">
                    <img src={persona6} alt="icono 5" width={100} />
                    <p>Comparte tu ubicación en tiempo real con tus familiares o personas de confianza</p>
                </div>
                <div className="item">
                    <p><strong>Descarga nuestra app</strong></p>
                    <img src={imagen7} alt="demo celular" width={300}/>
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
