import Navbar from './Components/Layout/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />
      
      {/* Temporary placeholder to test scrolling */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-gray-800">Portfolio Content Goes Here</h2>
        <div className="h-[2000px] bg-gray-200 mt-10 rounded-lg border-2 border-dashed border-gray-400 flex items-center justify-center">
          <p className="text-gray-500">Scroll down to see the Navbar stick to the top.</p>
        </div>
      </main>
    </div>
  );
}