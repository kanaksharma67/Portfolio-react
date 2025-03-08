

import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Technologies from './Components/Technologies';

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 selection:bg-cyan-500 selection:text-cyan-900">
        {/* Background Container - Full Height */}
        <div className="fixed top-0 -z-10 w-full min-h-screen bg-neutral-950"></div>

        {/* Gradient Background - Expands with Content */}
        <div className="absolute inset-0 -z-10 min-h-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        {/* Main Content */}
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies/>
          <Experience/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    </>
  );
}

export default App;
