import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Parallax from 'react-rellax'
import s from '../style/Team.module.css';
import { motion, Variants  } from "framer-motion";

//utils
import equipo from '../utils/equipo.png';
import note from '../utils/note.png';

export default function Team() {
    const cardVariants= {
        offscreen: {
          y: 300
        },
        onscreen: {
          y: 40,
          rotate: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.9
          }
        }
      };

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
                        <motion.div
                               initial="offscreen"
                               whileInView="onscreen"
                               viewport={{ once: true, amount: 0.2 }}
                               variants={cardVariants}
                        >
                                <img src={note} alt="note" className={s.note} />
                                </motion.div>
                        </Grid>
                        <motion.div
                               initial="offscreen"
                               whileInView="onscreen"
                               viewport={{ once: true, amount: 0.8 }}
                               variants={cardVariants}
                        >

                            <p className={s.parr} > Me gusta aprender nuevas tecnologias, y considero el trabajar en equipo como parte fundamental para obtener buenos resultados.</p>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6} xl={6}>
                        <img src={equipo} alt="equipo" className={s.img} />
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}