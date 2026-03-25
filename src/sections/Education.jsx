import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";
import { educationData } from '../data/portfolioData';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple/10 border border-purple/30 rounded-full mb-4">
          <GraduationCap className="w-4 h-4 text-purple" />
          <span className="text-sm font-medium text-purple">
            Education
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          My <span className="gradient-text">Education</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative border-l-2 border-purple/30">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className={`mb-12 ml-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Dot */}
              <span className="absolute -left-3 w-6 h-6 bg-gradient-to-br from-purple to-cyan rounded-full shadow-glow"></span>

              {/* Card */}
              <div className="p-6 bg-dark-card border border-purple/20 rounded-xl shadow-soft-lg hover:shadow-glow transition-all duration-300">
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white">
                  {edu.title}
                </h3>

                {/* Institute */}
                <p className="text-purple text-sm mt-1">
                  {edu.institute}
                </p>

                {/* Year */}
                <p className="text-gray-500 text-sm">
                  {edu.year}
                </p>

                {/* Percentage (separate line) */}
                <p className="text-cyan text-sm font-medium mb-2">
                  {edu.percentage}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;