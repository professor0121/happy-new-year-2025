import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

export const Vision = () => {
  const goals = [
    {
      title: "AI Integration",
      description: "Implement advanced AI solutions in production applications"
    },
    {
      title: "Web3 Development",
      description: "Master blockchain technology and smart contract development"
    },
    {
      title: "Cloud Architecture",
      description: "Design and implement serverless architectures at scale"
    },
    {
      title: "Performance Optimization",
      description: "Achieve sub-second loading times across all applications"
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
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Vision for 2024</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-bold text-xl mb-4">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};