import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
export const MainHome=()=>{
    return(
        <div>
           
            <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
        </div>
    )
}