import Hero from "./components/Hero";
import Identity from "./components/Identity";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Recognition from "./components/Recognition";
import Contact from "./components/Contact";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  return (
    <>
      <LoadingScreen />
      <main id="top" className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/30 flex flex-col">
        <Hero />
        <Identity />
        <About />
        <div id="projects">
          <Projects />
        </div>
        <Skills />
        <Experience />
        <Education />
        <Recognition />
        <Contact />
      </main>
    </>
  );
}

export default App;
