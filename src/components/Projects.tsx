import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

export const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "High-performance React application with 100k+ daily users",
      stack: ["React", "Node.js", "PostgreSQL"],
      metrics: "99.9% uptime, 1.2s load time"
    },
    {
      title: "AI Analytics Dashboard",
      description: "Real-time data visualization platform with ML integration",
      stack: ["Python", "TensorFlow", "D3.js"],
      metrics: "Processing 1M+ data points daily"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud architecture supporting global operations",
      stack: ["AWS", "Terraform", "Docker"],
      metrics: "40% cost reduction achieved"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Technical Showcase</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-bold text-xl mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{project.metrics}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};