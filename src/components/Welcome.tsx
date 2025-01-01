import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

export const Welcome = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Welcome to My Digital Space</h2>
          <p className="text-xl text-gray-600 mb-6">
            As a Software Engineer and Web Developer, I bridge the gap between complex engineering challenges and elegant web solutions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold mb-2">500K+ Users</h3>
              <p className="text-gray-600">Impacted through scalable solutions</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold mb-2">15+ Projects</h3>
              <p className="text-gray-600">Successfully delivered in 2023</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold mb-2">99.9% Uptime</h3>
              <p className="text-gray-600">Across all production systems</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};