import { useState, useEffect, useRef } from 'react';
import { ArrowRight, User, Zap } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countedStats, setCountedStats] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          
          // Animate stats counting
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCountedStats(prev => {
                const newStats = [...prev];
                newStats[index] = Math.floor(current);
                return newStats;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple/5 to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        
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
            <User className="w-4 h-4 text-purple" />
            <span className="text-sm font-medium text-purple">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Crafting <span className="gradient-text">Digital Experiences</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My journey in the world of technology and design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div 
            className={`relative transition-all duration-1000 ease-expo-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative">
              {/* Decorative Frame with glow */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-purple/30 rounded-2xl shadow-glow" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-purple/20 to-cyan/20 rounded-2xl" />
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-soft-lg border border-purple/20">
                <img
                  src={personalInfo.aboutImage}
                  alt="About"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-expo-out"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-dark-card border border-purple/30 rounded-xl shadow-glow p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple to-cyan rounded-xl flex items-center justify-center shadow-glow">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            {/* Paragraphs */}
            <div 
              className={`space-y-4 transition-all duration-700 ease-expo-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="text-gray-400 leading-relaxed">
                I'm Adesh Sonawane, a Computer Science engineering student at Lovely Professional University and a passionate <span className="text-purple font-medium">Full Stack Developer</span> specializing in the MERN stack. I enjoy building scalable web applications and solving real-world problems through technology.
              </p>
                      
              <p className="text-gray-400 leading-relaxed">
                I continuously work on improving my <span className="text-cyan font-medium">problem-solving skills</span>, including data structures and algorithms, while staying updated with modern web technologies. My approach combines technical expertise with attention to design, ensuring every project is both functional and visually appealing.
              </p>
            </div>

            {/* Stats Grid */}
            <div 
              className={`grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 transition-all duration-700 ease-expo-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '600ms' }}
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group text-center p-4 rounded-xl bg-dark-card border border-purple/20 hover:border-purple/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                >
                  <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                    {countedStats[index]}{stat.suffix}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div 
              className={`pt-4 transition-all duration-700 ease-expo-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '800ms' }}
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="group relative inline-flex items-center px-6 py-3 bg-purple text-white font-medium rounded-full overflow-hidden transition-all duration-300 ease-expo-out hover:shadow-glow hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center">
                  Let's Talk
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple to-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
