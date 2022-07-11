import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import s from '../style/Tools.module.css'; 


//utils
import html from '../utils/html.png';
import css from '../utils/css.png';
import node from '../utils/nodejs.png';
import js from '../utils/js.png';
import react from '../utils/react.png';
import mysql from '../utils/mysql.png';
import api from '../utils/api.png';
import postgresql from '../utils/postgresql.png';
import redux from '../utils/redux.png';
import code from '../utils/codepc.png';

export default function Tools(){

    return(
        <div className={s.container}>
            <Grid container spacing={8} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={10} md={12} xl={4}>
                    <p className={s.pfo}>Algunas de las tecnologías que <br/> he implementado en mis proyectos son</p>
                </Grid>
                <Grid item xs={10} md={6} xl={6}>
                   <img src={html} alt="html" className={s.img} />
                     <img src={css} alt="css" className={s.img} />
                        <img src={js} alt="js" className={s.img} />
                        <img src={react} alt="react" className={s.img} />
                        <img src={node} alt="node" className={s.img} />
                        <img src={mysql} alt="mysql" className={s.img} />
                        <img src={api} alt="api" className={s.img} />
                        <img src={postgresql} alt="postgresql" className={s.img} />
                        <img src={redux} alt="redux" className={s.img} />
                </Grid>
                <Grid item xs={10} md={6} xl={6}>
                    <img src={code} alt="code" className={s.img2} />
                </Grid>
            </Grid>
        </div>
    )
}