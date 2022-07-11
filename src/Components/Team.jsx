import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Parallax from 'react-rellax'
import s from '../style/Team.module.css';

//utils
import equipo from '../utils/equipo.png';
import note from '../utils/note.png';

export default function Team() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '' : '',
        ...theme.typography.body2,
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div className={s.cont}>
            <Box sx={{ bgcolor: '', height: '100vh', flexGrow: 1 }} display="grid" gridTemplateColumns="repeat(1, 2fr)" gap={2}>
                <Grid container
                    spacing={8}
                    direction="row-reverse"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={12} md={6} xl={6}>
                        <Grid >
                            <Parallax speed={1}>
                                <img src={note} alt="note" className={s.note} />
                            </Parallax>
                        </Grid>
                        <Parallax speed={1}>
                            <p className={s.parr}> Me gusta aprender nuevas tecnologias, y considero el trabajar en equipo como parte fundamental para obtener buenos resultados.</p>
                        </Parallax>
                    </Grid>

                    <Grid item xs={12} md={6} xl={6}>
                        <img src={equipo} alt="equipo" className={s.img} />
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}