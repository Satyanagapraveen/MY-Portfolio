import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-lg border-4 border-white overflow-hidden">
              <img 
                src="/profile-picture.jpeg" 
                alt="Namburi Praveen - Software Engineer" 
                className="w-full h-full object-cover"
                loading='lazy'
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 text-lg text-gray-600 leading-relaxed"
          >
            <p>
              I am a third-year B.Tech student specializing in Software Engineering and Full-Stack Development. I have a deep passion for building robust web applications from the ground up, seamlessly connecting intuitive user interfaces with powerful backend architectures.
            </p>
            <p>
              Currently, my tech stack revolves around React for the frontend and Django REST framework for the backend. I am also actively exploring advanced AI architectural patterns, utilizing tools like Llama 3.2, ChromaDB, and Retrieval-Augmented Generation (RAG) to build smarter, locally-deployed applications.
            </p>
            <p>
              When I'm not coding, participating in hackathons, or brainstorming zero-investment business ideas with my team, you can usually find me keeping up with the latest in Telugu cinema.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}