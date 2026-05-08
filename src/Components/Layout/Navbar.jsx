export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          Praveen<span className="text-blue-600">.</span>
        </h1>
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
  <li><a href="#about" className="hover:text-blue-600 transition-colors cursor-pointer">About</a></li>
  <li><a href="#skills" className="hover:text-blue-600 transition-colors cursor-pointer">Skills</a></li>
  <li><a href="#projects" className="hover:text-blue-600 transition-colors cursor-pointer">Projects</a></li>
  <li><a href="#contact" className="hover:text-blue-600 transition-colors cursor-pointer">Contact</a></li>
</ul>
      </div>
    </nav>
  );
}