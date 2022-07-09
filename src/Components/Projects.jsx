import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function Projects() {
    const [projects,setProjects]=useState([]);
    console.log(projects);

    useEffect(()=>{
        axios.get('https://portfolio-carlafaes.herokuapp.com/portfolio')
        .then(
            res => setProjects(res.data)
        )
    },[setProjects])

    return (
        <div style={{height:'100vh'}}>
            <h1>Estos son algunos de los proyectos que he realizado. Algunos de ellos los hice junto con grandes personas y programadores.</h1>
        </div>
    )
}