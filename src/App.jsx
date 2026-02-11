import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="poppins-regular">
      <Navbar />
      <Hero />
      <Projects />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}
