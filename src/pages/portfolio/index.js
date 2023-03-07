

import Header from "./header";
import Banner from "./banner";
import About from "./about";
import Skills from "./skills";
// import Welcome from "./welcome";
import Experiences from "./experiences";
import Projects from "./project";
import Contact from "./contact";


const Main = ()=>{
    return(
        <>
            <Header />
            <Banner/>
            <main id="main">
                <About/>
                <Skills />
                <Experiences />
                <Projects />
                <Contact />
            </main>
            {/* <Welcome /> */}
            {/* <Experiences /> */}
        </>
    )

}

export default Main;