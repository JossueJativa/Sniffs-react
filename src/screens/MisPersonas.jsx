import { Button } from "@mui/material"
import { LeftProfile } from "../components/LeftProfile"

export const MisPersonas = () => {
    return (
        <div className="grid-profile">
            <div className="grid-item">
                <LeftProfile />
            </div>
            <div className="grid-item content-center">
                <h2>Invitar amigos</h2>
                <p>Copia el enlace e invita a todos tus amigos a disfrutar de nuestros planes.</p>

                <Button
                    variant='contained'
                    color='primary'
                    fullWidth
                    style={{ marginTop: 10 }}
                >
                    Copiar enlace
                </Button>
            </div>
        </div>
    )
}
