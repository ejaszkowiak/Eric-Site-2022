import Hero from "./components/hero";
import About from "./components/about";
import Trapezoid from "./components/trapezoid";
import ProjectCard from "./components/projectCard";
import "./styles/core/all.css"
import JobyLogo from "./components/assets/joby-logo.png"
import VolvoLogo from "./components/assets/volvo-logo.png"
import JobyImg from "./components/assets/Joby Pics/IMG_0724.jpg"

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Trapezoid text='Experience' upper={true}/>
      <ProjectCard 
        logo={VolvoLogo}
        image={JobyImg}
        role="Test Engineering Intern"
        text="Test Engineering Intern in during summer 2022. Performed tests on electric vehicle prototype and diesel compactors. Designed Solar energy solutions for EV’s.

Utilized Dewesoft and Ipetronik softwares to test pressure transducers, thermocouples, accelerometers, etc. Worked with Automotive CAN networks"
        link="https://www.volvocars.com/us"
        reverse={false}
      />
      <ProjectCard 
        logo={JobyLogo}
        image={JobyImg}
        role="Test Equipment Design Engineering Intern"
        text="Designed and carried out tests for eVTOL aircraft components. Utilized rapid prototyping for equipment upgrades involving dampeners, laser sights, machined aluminum, and steel. Designed parts to be made by waterjet, laser cutter, 3D printer, and CNC.

Equipment designed in SolidWorks and Catia, working in tandem with fellow engineers to produce testing equipment involving fracture testing, water flow rate ability, and impact hardness."
        link="https://www.jobyaviation.com/"
        reverse={true}
      />
      <Trapezoid text='Contact' upper={false}/>
    </div>
  );
}

export default App;
