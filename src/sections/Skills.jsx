import { useState, useEffect, useRef } from 'react';
import { Monitor, Server, Database, Wrench } from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap = {
  Monitor,
  Server,
  Database,
  Wrench,
};

const CircularProgress = ({ progress, isVisible, delay }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedProgress / 100) * circumference;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 1500;
        const steps = 60;
        const increment = progress / steps;
        let current = 0;
        const interval = setInterval(() => {
          current += increment;
          if (current >= progress) {
            current = progress;
            clearInterval(interval);
          }
          setAnimatedProgress(Math.floor(current));
        }, duration / steps);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, progress, delay]);

  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        {/* Background Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="rgba(168, 85, 247, 0.1)"
          strokeWidth="8"
        />
        {/* Progress Circle with glow */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-expo-out"
          filter="url(#glow)"
        />
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
      {/* Percentage Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold gradient-text">{animatedProgress}%</span>
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple/5 rounded-full blur-3xl" />
        
        {/* Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-expo-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple/10 border border-purple/30 rounded-full mb-4">
            <Wrench className="w-4 h-4 text-purple" />
            <span className="text-sm font-medium text-purple">Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with daily
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon];
            return (
              <div
                key={skill.id}
                className={`group relative bg-dark-card border border-purple/20 rounded-2xl p-6 hover:border-purple/50 hover:shadow-glow transition-all duration-500 ease-expo-out hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple/10 to-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-purple/10 border border-purple/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple group-hover:border-purple group-hover:scale-110 transition-all duration-500 shadow-glow">
                    {IconComponent && <IconComponent className="w-7 h-7 text-purple group-hover:text-white transition-colors duration-300" />}
                  </div>

                  {/* Category */}
                  <h3 className="text-lg font-bold text-white mb-4 text-center group-hover:text-purple transition-colors duration-300">
                    {skill.category}
                  </h3>

                  {/* Circular Progress */}
                  <CircularProgress 
                    progress={skill.progress} 
                    isVisible={isVisible} 
                    delay={500 + index * 200}
                  />

                  {/* Sub Skills */}
                  <div className="mt-6 flex flex-wrap gap-2 justify-center">
                    {skill.skills.map((subSkill, subIndex) => (
                      <span
                        key={subSkill}
                        className={`px-3 py-1 bg-purple/10 border border-purple/20 text-purple text-xs font-medium rounded-full hover:bg-purple/20 hover:border-purple/40 transition-all duration-300 ${
                          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                        }`}
                        style={{ 
                          transitionDelay: `${800 + index * 150 + subIndex * 50}ms`,
                          transitionProperty: 'opacity, transform, color, border-color, background-color',
                          transitionDuration: '300ms'
                        }}
                      >
                        {subSkill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
