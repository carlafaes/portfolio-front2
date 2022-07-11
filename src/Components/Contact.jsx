import Mailer from "./Mailer"
import Box from '@mui/material/Box';
import s from '../style/Contact.module.css';

export default function Contact() {
    return(
        <div className={s.cont}>
              <Box sx={{  height: '100vh', flexGrow: 1 }} display="grid" gridTemplateColumns="repeat(1, 2fr)" gap={2}>
            <h3 className={s.title}>
                Si tenes alguna duda, <br/>o queres que hablemos sobre tu proyecto <br/> ponte en contacto conmigo a traves de este formulario.<br/>
                Gracias por tu interés.
            </h3>
            <Mailer/>
            </Box>
        </div>
    )
}