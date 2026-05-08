export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          Praveen<span className="text-blue-600">.</span>
        </h1>
        
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <li className="hover:text-blue-600 transition-colors cursor-pointer">About</li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer">Skills</li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer">Projects</li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}