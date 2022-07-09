import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import axios from 'axios';
import Typewriter from 'typewriter-effect'
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
        backgroundColor: theme.palette.mode === 'dark' ? '#1d2025' : '#1d2025',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <div className="about">
            <CssBaseline />
            <Container maxWidth="xxl">
                <Box sx={{ bgcolor: '#1d2025', height: 'auto',flexGrow: 1 }} display="grid" gridTemplateColumns="repeat(1, 2fr)" gap={2}>
                    <Grid container 
                        spacing={8} 
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <Grid item xs={12} md={4} xl={4}>
                            <Item>
                                <img style={{ width: '400px' }} src={enPC} alt="en_pc" />
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={8} xl={8}>
                            <Item>
                                <p style={{ color: 'white', fontSize: '24px' }}> Hola, Soy Carla Faes <br /> actualmente soy Desarrolladora Web Full Stack, tambien soy estudiante de Tecnicatura Universitaria en Programacion. <br /> Me gusta aprender nuevas tecnologias, y trabajar en equipo.</p>
                                <p style={{ color: 'white', fontSize: '22px' }}>...Otros cosas que me gusta hacer son:
                                    {tab}
                                </p>
                                <Typewriter
                                    style={{ color: 'white', fontSize: '22px' }}
                                    options={{
                                        strings: ['Desarrollo FrontEnd👩‍💻', 'Pintura artistica 🎨', 'Estudiar autodidacta👓 '],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}