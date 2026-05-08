import { motion } from 'framer-motion';
import { projectsData } from '../../../data/projectsData';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent engineering projects, focusing on scalable backend architectures and AI integrations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              
              {/* Gradient Header with Project Icon */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center border-b border-gray-200">
                <span className="text-5xl" role="img" aria-label={project.title}>
                  {index === 0 ? '🏗️' : index === 1 ? '🤖' : '🧠'}
                </span>
              </div>
              
              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-700 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                  >
                    GitHub Repo →
                  </a>
                </div>
              </div>
              
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}