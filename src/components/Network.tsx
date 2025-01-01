import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

export const Network = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Engineering Manager",
      text: "An exceptional engineer who consistently delivers high-quality solutions."
    },
    {
      name: "Michael Rodriguez",
      role: "Tech Lead",
      text: "Brings both technical expertise and innovative thinking to every project."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Professional Network</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Connect With Me</h3>
            <div className="flex justify-center gap-6">
              <a href="https://github.com" className="text-gray-600 hover:text-gray-900">GitHub</a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900">Twitter</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};