import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import s from '../style/Tools.module.css'; 

export default function Tools(){

    return(
        <div className={s.container}>
            <Grid container spacing={8} direction="row-reverse" justifyContent="center" alignItems="center">
                <Grid item xs={10} md={4} xl={4}>
                    <p>Algunas de las tecnologías que he implementado en mis proyectos son</p>
                </Grid>
            </Grid>
        </div>
    )
}