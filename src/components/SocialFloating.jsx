import React from 'react';
import { Fab } from '@mui/material';
import { Facebook, Instagram, LinkedIn, MusicNote } from '@mui/icons-material';

export const SocialFloating = () => {
    const facebookUrl = "https://www.facebook.com/profile.php?id=100092230603426";
    const instagramUrl = "https://instagram.com/sniffsgps?igshid=NjIwNzIyMDk2Mg==";
    const linkedinUrl = "https://www.linkedin.com/feed/";
    const tiktokUrl = "https://www.tiktok.com/@sniffsec?_t=8ehORulmSE1&_r=1";

    return (
        <div className='social-media'>
            <Fab
                className='social-media__icon facebook'
                aria-label="facebook"
                href={facebookUrl}
                target="_blank"
            >
                <Facebook />
            </Fab>
            <Fab
                className='social-media__icon instagram'
                aria-label="instagram"
                href={instagramUrl}
                target="_blank"
            >
                <Instagram />
            </Fab>
            <Fab
                className='social-media__icon linkedin'
                aria-label="linkedin"
                href={linkedinUrl}
                target="_blank"
            >
                <LinkedIn />
            </Fab>
            <Fab
                className='social-media__icon tiktok'
                aria-label="tiktok"
                href={tiktokUrl}
                target="_blank"
            >
                <MusicNote />
            </Fab>
        </div>
    );
};