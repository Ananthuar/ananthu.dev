import Hero from "./components/Hero";
import Identity from "./components/Identity";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/30 flex flex-col">
      <Hero />
      <Identity />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

export default App;
