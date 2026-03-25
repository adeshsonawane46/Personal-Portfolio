import { useState, useEffect, useRef } from 'react';
import { Award, Calendar, ExternalLink, ChevronLeft, ChevronRight, Building2, Sparkles } from 'lucide-react';
import { certificates } from '../data/portfolioData';

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple/5 rounded-full blur-3xl" />
        
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
            <Award className="w-4 h-4 text-purple" />
            <span className="text-sm font-medium text-purple">Certificates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Credentials that validate my expertise
          </p>
        </div>

        {/* Certificates Carousel */}
        <div 
          className={`relative transition-all duration-700 ease-expo-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: '300ms' }}
        >
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-expo-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certificates.map((cert, index) => (
                <div
                  key={cert.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-3xl mx-auto">
                    <div className="group relative bg-dark-card border border-purple/20 rounded-3xl p-8 md:p-12 hover:border-purple/50 hover:shadow-glow transition-all duration-500 ease-expo-out">
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple/10 to-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative flex flex-col md:flex-row items-center gap-8">
                        {/* Certificate Icon */}
                        <div className="w-24 h-24 bg-purple/10 border border-purple/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple group-hover:border-purple group-hover:scale-110 transition-all duration-500 shadow-glow">
                          <Sparkles className="w-12 h-12 text-purple group-hover:text-white transition-colors duration-500" />
                        </div>

                        {/* Certificate Content */}
                        <div className="flex-1 text-center md:text-left">
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-purple transition-colors duration-300">
                            {cert.title}
                          </h3>
                          
                          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 text-gray-400">
                            <div className="flex items-center gap-2">
                              <Building2 className="w-4 h-4 text-purple" />
                              <span className="font-medium">{cert.issuer}</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 bg-purple rounded-full" />
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-cyan" />
                              <span>{cert.date}</span>
                            </div>
                          </div>

                          <a
                            href={cert.verifyUrl}
                            className="group/btn relative inline-flex items-center gap-2 px-6 py-2.5 bg-purple text-white text-sm font-medium rounded-full overflow-hidden transition-all duration-300 ease-expo-out hover:shadow-glow"
                          >
                            <span className="relative z-10">Verify Certificate</span>
                            <ExternalLink className="w-4 h-4 relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-purple to-cyan opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-dark-card border border-purple/30 rounded-full flex items-center justify-center text-gray-400 hover:text-purple hover:border-purple hover:shadow-glow transition-all duration-300 hover:scale-110"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-purple shadow-glow'
                      : 'w-2.5 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to certificate ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-dark-card border border-purple/30 rounded-full flex items-center justify-center text-gray-400 hover:text-purple hover:border-purple hover:shadow-glow transition-all duration-300 hover:scale-110"
              aria-label="Next certificate"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* All Certificates Grid (Desktop) */}
        <div className="hidden lg:grid grid-cols-4 gap-6 mt-12">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'border-purple bg-purple/10 shadow-glow'
                  : 'border-purple/20 bg-dark-card hover:border-purple/40 hover:shadow-glow'
              }`}
            >
              <Award className={`w-8 h-8 mb-3 ${index === currentIndex ? 'text-purple' : 'text-gray-500'}`} />
              <h4 className="text-sm font-semibold text-white line-clamp-2">{cert.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
