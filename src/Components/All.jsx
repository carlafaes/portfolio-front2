import About from "./About"
import Team from "./Team"
import Projects from "./Projects"
import Navbar from "./Navbar"
import Tools from "./Tools"
import Contact from "./Contact"
import Footer from "./Footer"

export default function All() {
    return (
        <div style={{backgroundColor:'#1d2025'}}>
            <About />
            <br/>
            <Team />
            <br/>
            <Projects />
            <br/>
            <Tools />
            <br/>
            <Contact />
            <br/>
            <Footer/>
        </div>
    )
}