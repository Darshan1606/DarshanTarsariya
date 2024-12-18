import "./assets/style/App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <div className="topHero">
        <Navbar />
        <Hero />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6E3CBC"
          fill-opacity="1"
          d="M0,224L48,197.3C96,171,192,117,288,128C384,139,480,213,576,208C672,203,768,117,864,80C960,43,1056,53,1152,90.7C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <Skills />

      <Projects />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
