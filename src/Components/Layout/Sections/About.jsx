export default function About() {
  return (
    <section id="about" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-2xl shadow-lg border-4 border-white flex items-center justify-center overflow-hidden">
              <span className="text-gray-400">Photo Placeholder</span>
            </div>
          </div>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              I am a third-year B.Tech student specializing in Software Engineering and Full-Stack Development. I have a deep passion for building robust web applications from the ground up, seamlessly connecting intuitive user interfaces with powerful backend architectures.
            </p>
            <p>
              Currently, my tech stack revolves around React for the frontend and Django REST framework for the backend. I am also actively exploring advanced AI architectural patterns, utilizing tools like Llama 3.2, ChromaDB, and Retrieval-Augmented Generation (RAG) to build smarter, locally-deployed applications.
            </p>
            <p>
              When I'm not coding, participating in hackathons, or brainstorming zero-investment business ideas with my team, you can usually find me keeping up with the latest in Telugu cinema.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}