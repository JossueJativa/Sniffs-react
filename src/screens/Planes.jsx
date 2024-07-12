import { Link } from "react-router-dom"
import { 
    bannerPlanes, autos_planes, motos_planes, camiones_planes, personas_planes,
    mascotas_planes, ganadería_planes
} from "../assets"
import { Carrousel } from "../components"
import { Typography } from "@mui/material"

export const Planes = () => {
    return (
        <>
            <Carrousel backgroundIMG={bannerPlanes} carrousel={[]} />

            <div className="context-to-center">
                <p>
                    No solo nos preocupa tu vehículo, moto o camion, también cuidamos lo mas valioso que te rodea, tu familia y tus mascotas y si eres ganadero,
                    también pensamos en ellos.
                </p>

                <br />

                <p><strong>Echa un vistazo a nuestros increíbles servicios</strong></p>

                <div className="grid-3-item">
                    <div className="item">
                        <div className="img-text">
                            <div className="background-img">
                                <img src={autos_planes} alt="icon" width={100} />
                            </div>
                            <Link to="/planes_autos">
                                <Typography variant="p">Autos</Typography>
                            </Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img-text">
                            <div className="background-img">
                                <img src={motos_planes} alt="icon" width={100} />
                            </div>
                            <Link to="/planes_motos">
                                <Typography variant="p">Motos</Typography>
                            </Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img-text">
                            <div className="background-img">
                                <img src={camiones_planes} alt="icon" width={100} />
                            </div>
                            <Link to="/pesados">
                                <Typography variant="p">Camiones</Typography>
                            </Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img-text">
                            <div className="background-img">
                                <img src={personas_planes} alt="icon" width={100} />
                            </div>
                            <Link to="/personas">
                                <Typography variant="p">Personas</Typography>
                            </Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img-text">
                            <div className="background-img">
                                <img src={mascotas_planes} alt="icon" width={100} />
                            </div>
                            <Link to="/mascotas">
                                <Typography variant="p">Mascotas</Typography>
                            </Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img-text">
                            <div className="background-img">
                                <img src={ganadería_planes} alt="icon" width={100} />
                            </div>
                            <Link to="/ganaderia">
                                <Typography variant="p">Ganadería</Typography>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
