import { CodeBracketIcon, RocketLaunchIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    title: "Cloud Migration Success",
    date: "Q1 2023",
    description: "Led successful migration of legacy systems to cloud infrastructure, reducing operational costs by 40%",
    icon: <RocketLaunchIcon className="w-6 h-6" />
  },
  {
    title: "Performance Optimization",
    date: "Q2 2023",
    description: "Implemented advanced caching strategies, improving application response time by 60%",
    icon: <ChartBarIcon className="w-6 h-6" />
  },
  {
    title: "Microservices Architecture",
    date: "Q3 2023",
    description: "Designed and implemented scalable microservices architecture handling 1M+ daily requests",
    icon: <CodeBracketIcon className="w-6 h-6" />
  }
];