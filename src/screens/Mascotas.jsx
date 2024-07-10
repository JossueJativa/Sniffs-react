import { 
    bannerMascotas, bannerMascotas1, bannerMascotas2, bannerMascotas3,
    mascotasimg, iconoMascotas1, iconoMascotas2, iconoMascotas3, iconoMascotas4, iconoMascotas5, imagen7
} from '../assets';
import { Carrousel } from '../components';

export const Mascotas = () => {
    const carrousel = [ bannerMascotas1, bannerMascotas2, bannerMascotas3];
    return (
        <>
            <Carrousel backgroundIMG={bannerMascotas} carrousel={carrousel} />

            <div className="grid-2-items">
                <div className="item">
                    <div className="container-img-text-btn">
                        <h2>Vigila</h2>
                        <p>A tus mascotas 24/7</p>

                        <img src={mascotasimg} alt="Personas" width={700} />

                        <a href="#" className="custom-btn">
                            Cotiza nuestros planes
                        </a>
                    </div>
                </div>
                <div className="item">
                    <div className="brown-background">
                        <p>
                            Vigila a tus mascotas utilizando nuestra tecnología satélite Sniffs y rastrea su ubicación en tiempo real
                            de esta manera puedes prevenir su perdida o robo
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid-3-item">
                <div className="item">
                    <img src={iconoMascotas1} alt="icono 1" width={100} />
                    <p>Localiza en tiempo real</p>
                </div>
                <div className="item">
                    <img src={iconoMascotas2} alt="icono 2" width={100} />
                    <p>Recibe alertas de seguridad</p>
                </div>
                <div className="item">
                    <img src={iconoMascotas3} alt="icono 3" width={100} />
                    <p>Monitoreo de la actividad fisica</p>
                </div>
                <div className="item">
                    <img src={iconoMascotas4} alt="icono 4" width={100} />
                    <p>Historial de ubicaciones</p>
                </div>
                <div className="item">
                    <img src={iconoMascotas5} alt="icono 5" width={100} />
                    <p>Alertas de bateria baja</p>
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
