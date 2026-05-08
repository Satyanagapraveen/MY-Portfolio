export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
        Hi, I'm <span className="text-blue-600">Namburi Praveen</span>
      </h1>
      
      <h2 className="text-2xl md:text-3xl text-gray-600 font-medium mb-8">
        Full-Stack Developer & Software Engineer
      </h2>
      
      <p className="max-w-2xl text-lg text-gray-500 mb-10 leading-relaxed">
        I build scalable web applications, specializing in React on the frontend and Django REST framework for backend services. Welcome to my digital portfolio.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg cursor-pointer">
          View My Work
        </button>
        <button className="bg-white text-gray-800 border border-gray-200 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
          Contact Me
        </button>
      </div>
    </section>
  );
}