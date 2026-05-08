import Navbar from './Components/Layout/Navbar';
import Hero from './Components/Layout/Sections/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />
      
      <main>
        <Hero />
      </main>
      
    </div>
  );
}