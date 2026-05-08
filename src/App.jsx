import Navbar from './Components/Layout/Navbar';
import Hero from './Components/Layout/Sections/Hero';
import About from './Components/Layout/Sections/About';
import Skills from './Components/Layout/Sections/Skills';
import Projects from './Components/Layout/Sections/Projects'
import Contact from './Components/Layout/Sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
      
    </div>
  );
}