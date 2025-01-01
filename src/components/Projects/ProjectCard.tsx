import { motion } from 'framer-motion';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
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
  );
};