import { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const Experience = () => {
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
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cyan/10 rounded-full blur-3xl" />
        
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
            <Briefcase className="w-4 h-4 text-purple" />
            <span className="text-sm font-medium text-purple">Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hands-on experience through internships and real-world projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line with glow */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5">
            <div className="absolute inset-0 bg-gradient-to-b from-purple via-cyan to-purple/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple via-cyan to-purple/20 blur-sm" />
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative transition-all duration-700 ease-expo-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                <div className={`flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-5 h-5 rounded-full border-4 border-dark flex items-center justify-center ${
                      exp.current ? 'bg-purple shadow-glow' : 'bg-cyan shadow-glow-cyan'
                    }`}>
                      {exp.current && (
                        <div className={`absolute inset-0 rounded-full animate-ping ${exp.current ? 'bg-purple' : 'bg-cyan'}`} style={{ opacity: 0.5 }} />
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <div className="group relative bg-dark-card border border-purple/20 rounded-2xl p-6 hover:border-purple/50 hover:shadow-glow transition-all duration-500 ease-expo-out hover:-translate-y-2">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple/10 to-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative">
                        {/* Current Badge */}
                        {exp.current && (
                          <span className="inline-block px-3 py-1 bg-purple/20 border border-purple/30 text-purple text-xs font-semibold rounded-full mb-3 shadow-glow">
                            Current
                          </span>
                        )}

                        {/* Role */}
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple transition-colors duration-300">
                          {exp.role}
                        </h3>

                        {/* Company */}
                        <div className={`flex items-center gap-2 mb-3 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}>
                          <Building2 className="w-4 h-4 text-purple" />
                          <span className="text-gray-300 font-medium">{exp.company}</span>
                        </div>

                        {/* Period */}
                        <div className={`flex items-center gap-2 mb-4 text-sm text-gray-500 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}>
                          <Calendar className="w-4 h-4 text-cyan" />
                          <span>{exp.period}</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Skills */}
                        <div className={`flex flex-wrap gap-2 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}>
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-purple/10 border border-purple/20 text-purple text-xs font-medium rounded-full hover:bg-purple/20 hover:border-purple/40 transition-all duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
