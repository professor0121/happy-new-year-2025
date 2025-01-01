import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import { ContactForm } from './ContactForm';
import { Newsletter } from './Newsletter';

export const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Get in Touch</h2>
          
          <div className="max-w-lg mx-auto">
            <ContactForm />
            <Newsletter />
          </div>
        </motion.div>
      </div>
    </section>
  );
};