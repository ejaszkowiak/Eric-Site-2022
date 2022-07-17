import Hero from "./components/hero";
import About from "./components/about";
import Trapezoid from "./components/trapezoid";
import "./styles/core/all.css"

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Trapezoid text='Experience' upper={true}/>
      <Trapezoid text='Contact' upper={false}/>
    </div>
  );
}

export default App;
