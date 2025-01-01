import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CodeBracketIcon, RocketLaunchIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export const Timeline = () => {
  const achievements = [
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">2023 Year in Review</h2>
        
        <VerticalTimeline>
          {achievements.map((achievement, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(255, 255, 255)' }}
              date={achievement.date}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={achievement.icon}
            >
              <h3 className="vertical-timeline-element-title font-bold">
                {achievement.title}
              </h3>
              <p className="text-gray-600 mt-4">
                {achievement.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};