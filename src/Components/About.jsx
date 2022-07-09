import { useEffect,useState } from "react";
import axios from 'axios';

export default function About(){
    const [info, setInfo] = useState({});
    console.log(info);
    const tab = <>&nbsp;</>;

    useEffect(() => {
        axios.get('https://portfolio-carlafaes.herokuapp.com/about')
          .then(
            res => setInfo(res.data[0])
          )
      }, [])

    return (
        <div className="about">
        <h1>About</h1>
        <p>
            This is a simple React app that I built to learn React.
        </p>
        </div>
    );
}