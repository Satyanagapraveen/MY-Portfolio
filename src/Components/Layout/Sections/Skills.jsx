import { skillsData } from '../../../data/skillsData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The tools, frameworks, and architectural patterns I use to build scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}