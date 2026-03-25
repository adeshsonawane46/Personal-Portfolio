import { useState, useEffect, useRef } from 'react';
import { Trophy, Users, Monitor, BookOpen, Mic, Star, Heart, Medal } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const iconMap = {
  Trophy,
  Users,
  Monitor,
  BookOpen,
  Mic,
  Star,
  Heart,
};

const Achievements = () => {
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
      id="achievements"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-expo-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple/10 border border-purple/30 rounded-full mb-4">
            <Medal className="w-4 h-4 text-purple" />
            <span className="text-sm font-medium text-purple">Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Notable <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Notable accomplishments and achievements.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon];
            return (
              <div
                key={achievement.id}
                className={`group relative bg-dark-card border border-purple/20 rounded-2xl p-6 hover:border-purple/50 hover:shadow-glow transition-all duration-500 ease-expo-out hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple/10 to-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-purple/10 border border-purple/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple group-hover:border-purple group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-glow">
                    {IconComponent && <IconComponent className="w-7 h-7 text-purple group-hover:text-white transition-colors duration-500" />}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-purple/10 rounded-bl-xl rounded-tr-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-purple text-xs font-bold">#{index + 1}</span>
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

export default Achievements;
