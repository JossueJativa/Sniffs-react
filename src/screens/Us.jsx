import { 
    banner, banner1, banner2, banner3, mision, vision,
    innovacion, confianza, calidad, integridad, tecnologia,
    mejoraContinua, orientacion_al_cliente, seguridad_al_cliente
} from "../assets"
import { Carrousel } from "../components"

export const Us = () => {
    const listImg = [banner1, banner2, banner3]
    return (
        <>
            <Carrousel backgroundIMG={banner} carrousel={listImg} />
            <div className="box-color">
                <div className="container-2-grid">
                    <div className="grid-item">
                        <p className="title">Nuestra <span className="cl-white">Misión</span></p>

                        <img src={mision} alt="Icono Mision" width={150} />

                        <p className="text-content">Nuestra misión es proporcionar soluciones innovadoras de rastreo satélite para ayudar a nuestros clientes a monitorear y administrar sus activos de manera eficiente y efectiva, mejorando así su seguridad y productividad.</p>
                    </div>
                    <div className="grid-item">
                    <p className="title">Nuestra <span className="cl-white">Visión</span></p>

                        <img src={vision} alt="Icono Vision" width={150} />

                        <p className="text-content">Nuestra visión es convertirnos en líderes en el mercado de rastreo satélite, brindando soluciones avanzadas y personalizadas que se adapten a las necesidades específicas de cada cliente.</p>
                    </div>
                </div>
            </div>

            <div className="container-text">
                <h4 className="title">Valores <span className="cl-blue">Corporativos</span></h4>
            </div>

            <div className="grid-4-item">
                <div className="grid-item">
                    <img src={innovacion} alt="Icono Innovacion" width={150} />
                    <p className="text-content">Innovación</p>
                </div>
                <div className="grid-item">
                    <img src={confianza} alt="Icono Confianza" width={150} />
                    <p className="text-content">Confianza</p>
                </div>
                <div className="grid-item">
                    <img src={calidad} alt="Icono Calidad" width={150} />
                    <p className="text-content">Calidad</p>
                </div>
                <div className="grid-item">
                    <img src={integridad} alt="Icono Integridad" width={150} />
                    <p className="text-content">Integridad</p>
                </div>
                <div className="grid-item">
                    <img src={tecnologia} alt="Icono Tecnologia" width={150} />
                    <p className="text-content">Tecnología</p>
                </div>
                <div className="grid-item">
                    <img src={mejoraContinua} alt="Icono Mejora Continua" width={150} />
                    <p className="text-content">Mejora Continua</p>
                </div>
                <div className="grid-item">
                    <img src={orientacion_al_cliente} alt="Icono Orientacion al Cliente" width={150} />
                    <p className="text-content">Orientación al Cliente</p>
                </div>
                <div className="grid-item">
                    <img src={seguridad_al_cliente} alt="Icono Seguridad al Cliente" width={150} />
                    <p className="text-content">Seguridad al Cliente</p>
                </div>
            </div>

            <div className="container-text">
                <h4 className="title">Testimoniales de <span className="cl-blue">Nuestros Clientes</span></h4>
            </div>
        </>
    )
}
