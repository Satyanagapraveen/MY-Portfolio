import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  // 1. Hook into the scroll position
  const { scrollY } = useScroll();

  // 2. Map the scroll position to movement values
  const textY = useTransform(scrollY, [0, 500], [0, 200]);
  const bgY = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      
      {/* Background Decorative Element (Parallax) */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-50"
      />
      
      {/* Main Hero Content (Parallax + Fade) */}
      <motion.div 
        style={{ y: textY, opacity: opacity }}
        className="flex flex-col items-center"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Hi, I'm <span className="text-blue-600">Namburi Praveen</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-600 font-medium mb-8">
          Full-Stack Developer & Software Engineer
        </h2>
        
        <p className="max-w-2xl text-lg text-gray-500 mb-10 leading-relaxed">
          I build scalable web applications, specializing in React on the frontend and Django REST framework for backend services.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg cursor-pointer">
            View My Work
          </button>
          <button className="bg-white text-gray-800 border border-gray-200 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
            Contact Me
          </button>
        </div>
      </motion.div>

    </section>
  );
}