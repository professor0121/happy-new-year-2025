import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';

export const Projects = () => {
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
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};