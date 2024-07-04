import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { Carrousel } from '../components';
import {
    backgroundCarrousel, img1, img2, img3, img4, img5,
    icon1, icon2, icon3, icon4, icon5, icon6
} from '../assets';

export const Home = () => {
    const listImg = [img1, img2, img3, img4, img5];

    return (
        <div className="main-img">
            <Carrousel backgroundIMG={backgroundCarrousel} carrousel={listImg} />

            <Grid container spacing={2} rowGap={2} columnGap={2} className="container-icons">
                <Grid item xs={12} md={4} className="text">
                    <Typography variant="h4" component="h2" gutterBottom>
                        Beneficios
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};