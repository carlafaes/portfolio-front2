import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import axios from 'axios';
import Typewriter from 'typewriter-effect'
import s from '../style/About.module.css';
import Parallax from 'react-rellax'
import Team from './Team';
import Projects from './Projects';
import Navbar from './Navbar';

//utils
import www from '../utils/www.png';
import enPC from '../utils/en_pc.png';
export default function About() {
    const [info, setInfo] = useState({});
    console.log(info);
    const tab = <>&nbsp;</>;

    useEffect(() => {
        axios.get('https://portfolio-carlafaes.herokuapp.com/about')
            .then(
                res => setInfo(res.data[0])
            )
    }, [])

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#0b0214' : '#0b0214',
        ...theme.typography.body2,
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <div className="about">
            {/* <CssBaseline /> */}
            <Navbar />
            <Box sx={{ bgcolor: '#1d2025', height: '100vh', flexGrow: 1 }} display="grid" gridTemplateColumns="repeat(1, 2fr)" gap={1}>
                <Grid container
                    spacing={8}
                    direction="row-reverse"
                    justifyContent="center"
                    alignItems="center">

                    <Grid item xs={10} md={4} xl={4}>
                        <img style={{ width: '400px' }} src={enPC} alt="en_pc" />

                    </Grid>
                    <Grid item xs={10} md={7} xl={7}>
                        <Grid item xs={4} md={4} xl={2}>
                            <Parallax speed={-5}>
                                <img src={www} alt="www" className={s.img} />
                            </Parallax>
                        </Grid>
                        <Grid item xs={4} md={4} xl={8}>
                        </Grid>
                        <Grid item xs={4} md={4} xl={2}>
                        </Grid>
                        <p className={s.parr}> Hola, Soy Carla Faes <br /> actualmente soy Desarrolladora Web Full Stack, tambien soy estudiante de Tecnicatura Universitaria en Programacion. <br /></p>
                        <p className={s.parr}>...Otras cosas que me gusta hacer son:
                            {tab}
                        </p>
                        <div className={s.typewriter}>
                            <Typewriter
                                options={{
                                    strings: ['Desarrollo FrontEnd👩‍💻', 'Pintura artistica 🎨', 'Estudiar autodidacta👓 '],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>

                    </Grid>

                </Grid>
            </Box>
            <Team />
            <Projects />
        </div>
    );
}