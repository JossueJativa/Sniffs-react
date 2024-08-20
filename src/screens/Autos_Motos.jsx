import { 
  bannerAutos, bannerAutos1, bannerAutos2, bannerAutos3,
  auto_moto, imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7
} from "../assets"
import { Carrousel } from "../components/Carrousel"

export const Autos_Motos = () => {
  const carrousel = [bannerAutos1, bannerAutos2, bannerAutos3]
  return (
    <>
      <Carrousel backgroundIMG={bannerAutos} carrousel={carrousel} />

      <div className="container-img-text-btn">
          <h2>Rastrea</h2>
          <p>tu vehículo o moto 24/7</p>

          <img src={auto_moto} alt="auto_moto" width={700}/>

          <a href="/planes" className="custom-btn">
            Cotiza nuestros planes
          </a>
      </div>

      <div className="flex-row">
        <div className="grid-2-item">
          <div className="item">
            <img src={imagen1} alt="icono 1" width={100}/>
          </div>
          <div className="item">
            <p>Servicio Seguro 24/7</p>
          </div>
          <div className="item">
            <img src={imagen2} alt="icono 2" width={100}/>
          </div>
          <div className="item">
            <p>Bloqueo automático para evitar robo del vehículo</p>
          </div>
          <div className="item">
            <img src={imagen3} alt="icono 3" width={100}/>
          </div>
          <div className="item">
            <p>Estacionamiento seguro del vehículo desde tu celular</p>
          </div>
          <div className="item">
            <img src={imagen4} alt="icono 4" width={100}/>
          </div>
          <div className="item">
            <p>Botones de pánico dentro del vehículo en caso de asalto</p>
          </div>
          <div className="item">
            <img src={imagen5} alt="icono 5" width={100}/>
          </div>
          <div className="item">
            <p>Comparte tu ubicación en tiempo real con tus familiares o personas de confianza</p>
          </div>
          <div className="item">
            <img src={imagen6} alt="icono 6" width={100}/>
          </div>
          <div className="item">
            <p>Configura perímetros y notificaciones a tu celular cuando este fuera de zona</p>
          </div>
        </div>
        <div className="flex-col">
          <div className="item">
            <img src={imagen7} alt="demo celular" width={100}/>
            <a href="#" className="custom-btn">Solicita un demo gratis</a>
          </div>
        </div>
      </div>
    </>
  )
}
