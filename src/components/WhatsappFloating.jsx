import React from 'react';
import { Fab, Icon } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const WhatsAppFloatingButton = () => {
    const whatsappUrl = "https://api.whatsapp.com/send?phone=593996761198&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20que%20ofrecen.";

    return (
        <Fab
            color="success"
            aria-label="whatsapp"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            href={whatsappUrl}
            target="_blank"
        >
            <WhatsAppIcon />
        </Fab>
    );
};
