import Navbar from './Components/Layout/Navbar';
import Hero from './Components/Layout/Sections/Hero';
import About from './Components/Layout/Sections/About';
import Skills from './Components/Layout/Sections/Skills';



export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills/>
      </main>
      
    </div>
  );
}