import { projectsData } from '../../../data/projectsData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent engineering projects, focusing on scalable backend architectures and AI integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-200 flex items-center justify-center border-b border-gray-200">
                <span className="text-gray-500 font-medium">Project Image</span>
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
                  <a href={project.githubLink} className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                    GitHub Repo →
                  </a>
                  <a href={project.liveLink} className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                    Live Demo →
                  </a>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}