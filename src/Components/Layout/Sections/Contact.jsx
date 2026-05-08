export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Let's Connect</h2>
        <p className="text-lg text-gray-600 mb-12">
          I am currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a 
            href="mailto:praveennamburi2006@gmail.com" 
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer"
          >
            Say Hello
          </a>
          
          <div className="flex gap-6 mt-6 sm:mt-0">
            <a 
              href="https://github.com/Satyanagapraveen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium cursor-pointer"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/praveen-namburi-04559b2a7/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}