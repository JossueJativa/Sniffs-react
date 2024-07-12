import { planes_autos_banner } from "../assets"
import { ImgText_Banner } from "../components/ImgText_Banner"
import CheckIcon from '@mui/icons-material/Check';

export const Planes_Autos = () => {
    return (
        <>
            <ImgText_Banner bannerImg={planes_autos_banner} text="VIAJA SEGURO EN" underline_text="TU AUTO" />

            <div className="container">
                <h1>Obtén tu plan a tu comodidad</h1>

                <div className="grid-2-items">
                    <div className="item">
                        <div className="container-plan">
                            <h2>Plan Mensual $14.99</h2>
                            <div className="information-text">
                                <p>Contrato mensual</p>
                                <div className="grid-2-items" style={{
                                    justifyContent: "space-between !important",
                                    widows: "100%",
                                    padding: "0",
                                }}>
                                    <div className="items">
                                        <span>Instalación</span>
                                    </div>
                                    <div className="items"><span>$189.00</span></div>
                                </div>

                                <br />
                                <div className="container">
                                    <a href="#" className="custom-btn">
                                        Añadir al carrito
                                    </a>
                                </div>

                                <br />
                                <p><span><CheckIcon /></span>Servicio seguro 24/7</p>
                                <p><span><CheckIcon /></span>Bloqueo Automático para evitar robo del vehículo</p>
                                <p><span><CheckIcon /></span>Estacionamiento seguro del vehículo desde tu celular</p>
                                <p><span><CheckIcon /></span>Botones de pánico dentro del vehículo en caso de asalto</p>
                                <p><span><CheckIcon /></span>Comparte tu ubicación en tiempo real con tus familiares o personas de confianza</p>
                                <p><span><CheckIcon /></span>Configura perímetros y notificaciones a tu celular cuando este fuera de zona</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="container-plan">
                            <h2>Plan Anual $143.88</h2>
                            <div className="information-text">
                                <p>Contrato mensual</p>
                                <div className="grid-2-items" style={{
                                    justifyContent: "space-between !important",
                                    widows: "100%",
                                    padding: "0"
                                }}>
                                    <div className="items"><span>Instalación</span></div>
                                    <div className="items"><span>$179.99</span></div>
                                    <div className="items"><span>9 meses restantes</span></div>
                                    <div className="items"><span>$11.99</span></div>
                                </div>
                                
                                <br />
                                <div className="container">
                                    <a href="#" className="custom-btn">
                                        Añadir al carrito
                                    </a>
                                </div>

                                <br />
                                <p><span><CheckIcon /></span>Servicio seguro 24/7</p>
                                <p><span><CheckIcon /></span>Bloqueo Automático para evitar robo del vehículo</p>
                                <p><span><CheckIcon /></span>Estacionamiento seguro del vehículo desde tu celular</p>
                                <p><span><CheckIcon /></span>Botones de pánico dentro del vehículo en caso de asalto</p>
                                <p><span><CheckIcon /></span>Comparte tu ubicación en tiempo real con tus familiares o personas de confianza</p>
                                <p><span><CheckIcon /></span>Configura perímetros y notificaciones a tu celular cuando este fuera de zona</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
