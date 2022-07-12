import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Parallax from 'react-rellax'
import Carousel from 'react-elastic-carousel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {CardActionArea, CardActions } from '@mui/material';
import s from '../style/Projects.module.css';

//utils
import code from '../utils/code1.png';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    

    const breakPoints = [
        { width: 100, itemsToShow: 1 },
        { width: 500, itemsToShow: 1 },
        { width: 1200, itemsToShow: 1 },
        { width: 1500, itemsToShow: 1 },
    ];
    const carouselRef = React.useRef(null);
    const totalPages = projects.length;
    let resetTimeout = projects[0];

    useEffect(() => {
        axios.get('https://portfolio-carlafaes.herokuapp.com/portfolio')
            .then(
                res => setProjects(res.data)
            )
    }, [setProjects])

    return (
        <div style={{ height: '100vh' }}>
            <Box sx={{ bgcolor: '#1d2025', height: '100vh', flexGrow: 1 }} display="grid" gridTemplateColumns="repeat(1, 1fr)" gap={2}>
                <Grid container
                    spacing={6}
                    direction={"row"}
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={12} md={4} xl={4}>
                        <Parallax speed={-0.5}>
                        <h1 className={s.title}>Estos son algunos de los proyectos que he realizado. Algunos de ellos los hice junto con grandes personas y programadores.</h1>
                        </Parallax>
                        <Grid item xs={12} md={4} xl={4}>
                            <Parallax speed={1.5}>
                            <img src={code} alt="code" className={s.img} />
                            </Parallax>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8} xl={4}>
                        <Carousel
                            breakPoints={breakPoints}
                            enableAutoPlay
                            autoPlaySpeed={3000}
                            itemPadding={[10, 10]}
                            focusOnSelect={false}
                            ref={carouselRef}
                            onNextEnd={({ index }) => {
                                clearTimeout(resetTimeout);
                                if (index + 1 === totalPages) {
                                    if (carouselRef?.current?.goTo) {
                                        resetTimeout = setTimeout(() => {
                                            if (carouselRef?.current?.goTo) {
                                                carouselRef.current.goTo(0);
                                            }
                                        }, 2500);
                                    }
                                }
                            }}
                        >
                            {projects ? projects.map((project, index) => (
                                <div key={index}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={project.image}
                                                alt="green_project"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {project.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {project.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Link 
                                            href={project.link}
                                            >
                                            Ver más
                                            </Link>
                                        </CardActions>
                                    </Card>
                                </div>
                            ))
                                :
                                <div>Loading...</div>}
                        </Carousel>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}