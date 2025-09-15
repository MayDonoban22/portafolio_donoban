import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page">
      <Navbar />

      <section id="hero" className="min-h-screen flex items-center">
        <Hero />
      </section>

      <section id="about-me" className="py-20">
        <About />
      </section>

      <section id="skills" className="py-20 bg-[var(--color-secondary)]">
        <Skills />
      </section>

      <section id="projects" className="py-20">
        <Projects />
      </section>

      <section id="contacts" className="py-20 bg-[var(--color-secondary)]">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
