import Mailer from "./Mailer"
import Box from '@mui/material/Box';
import s from '../style/Contact.module.css';
import Grid from '@mui/material/Grid';
import { motion, Variants  } from "framer-motion";

//utils
import contact from '../utils/contact.png';
import chat from '../utils/chat.png';

export default function Contact() {
    // const { scrollYProgress } = useViewportScroll();
    // const scale = useTransform(scrollYProgress, [2, 0.2], [0, 1.5]);
    const cardVariants= {
        offscreen: {
          y: 300
        },
        onscreen: {
          y: 50,
          rotate: -10,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };
    

    return (
        <div className={s.cont}>
            <Box sx={{ height: '100vh', flexGrow: 1 }} display="grid" gridTemplateColumns="repeat(1, 1fr)" gap={4}>
                <Grid container
                    spacing={3}
                    direction={"row-reverse"}
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={10} md={11} xl={4}>
                        <h3 className={s.title}>
                            Si tenes alguna duda, <br />o queres que hablemos sobre tu proyecto <br /> ponte en contacto conmigo a traves de este formulario.<br />
                            Gracias por tu interés.
                        </h3>
                    </Grid>
                    <Grid item xs={12} md={8} xl={6} >
                        <Mailer />
                    </Grid>
                    <Grid item xs={12} md={4} xl={6} >
                        <motion.div
                               initial="offscreen"
                               whileInView="onscreen"
                               viewport={{ once: true, amount: 0.8 }}
                        >
                            
                            <motion.img src={chat} alt="chat" className={s.img} variants={cardVariants}/>
                        </motion.div>

                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}