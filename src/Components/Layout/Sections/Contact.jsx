import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg text-gray-600 mb-12"
        >
          I am currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <a 
            href="mailto:praveennamburi2006@gmail.com" 
            aria-label="Send an email to Namburi Praveen"
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer"
          >
            Say Hello
          </a>
          
          <div className="flex gap-6 mt-6 sm:mt-0">
            <a 
              href="https://github.com/Satyanagapraveen" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit Namburi Praveen's GitHub profile"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium cursor-pointer"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/praveen-namburi-04559b2a7/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit Namburi Praveen's LinkedIn profile"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium cursor-pointer"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}