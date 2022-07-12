import React,{useEffect} from 'react'
import style from '../style/pdf.module.css'


export default function Download(){

useEffect(()=>{
    if(typeof window.orientation !== 'undefined'){
            document.getElementById('link_Download_Pdf').click()
            window.close()
    }
},[])

    return(
        <div className={style.download}>
            <object 
            data={require('../utils/cv.pdf')} 
            type="application/pdf"
            width='100%'
            height='100%' >
                    <br/>
                    <a href={require('../utils/cv.pdf')} id='link_Download_Pdf'>
                    If your device cannot display the pdf, click here to download it.
                    </a>
            </object>
        </div>
    )
}