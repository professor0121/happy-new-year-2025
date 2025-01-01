import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      
      <motion.div 
        className="container mx-auto px-6 text-center relative z-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Happy New Year
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> 2025</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Engineering Excellence Meets Web Innovation
        </motion.p>

        <motion.div
          className="w-64 h-64 mx-auto mb-12 rounded-full overflow-hidden border-4 border-white/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <img 
            src="public/WhatsApp Image 2025-01-01 at 10.21.34_8bc99d4a.jpg" 
            alt="Professional headshot"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};