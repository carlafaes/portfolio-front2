import About from "./About"
import Team from "./Team"
import Projects from "./Projects"
import Navbar from "./Navbar"
import Tools from "./Tools"
import Contact from "./Contact"

export default function All() {
    return (
        <div>
            <About />
            <Team />
            <Projects />
            <Tools />
            <Contact />
        </div>
    )
}