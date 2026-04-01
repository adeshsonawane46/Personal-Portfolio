import { useState, useEffect, useRef } from 'react';
import { ArrowDown, Download, ExternalLink, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const roles = personalInfo.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 800);
      }
    
      else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-purple/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-cyan/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple/10 rounded-full blur-[150px]" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-purple rounded-full animate-float shadow-glow" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-cyan rounded-full animate-float-slow shadow-glow-cyan" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-pink-glow rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float-slow" style={{ animationDelay: '1.5s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-700 ease-expo-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Greeting */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple/10 border border-purple/30 rounded-full"
              style={{ transitionDelay: '200ms' }}
            >
              <Sparkles className="w-4 h-4 text-purple" />
              <span className="text-sm font-medium text-purple">{personalInfo.greeting}</span>
            </div>

            {/* Name */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
              style={{ transitionDelay: '300ms' }}
            >
              {personalInfo.name}
            </h1>

            {/* Role with Typewriter Effect */}
            <div className="h-12 flex items-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold gradient-text">
                {displayText}
                <span 
                  className={`inline-block w-0.5 h-8 bg-purple ml-1 transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
                />
              </h2>
            </div>

            {/* Description */}
            <p 
              className={`text-lg text-gray-400 max-w-lg leading-relaxed transition-all duration-700 ease-expo-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '500ms' }}
            >
              {personalInfo.description}
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 ease-expo-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '600ms' }}
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="group relative inline-flex items-center px-8 py-3.5 bg-purple text-white font-medium rounded-full overflow-hidden transition-all duration-300 ease-expo-out hover:shadow-glow-lg hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple to-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <a
                href={personalInfo.resumeLink}
                className="group inline-flex items-center px-8 py-3.5 bg-transparent text-white font-medium rounded-full border-2 border-purple/50 hover:border-purple hover:shadow-glow transition-all duration-300 ease-expo-out hover:-translate-y-1"
              >
                Download CV
                <Download className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>

            {/* Social Proof */}
            <div 
              className={`flex items-center gap-6 pt-6 transition-all duration-700 ease-expo-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '700ms' }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple to-cyan border-2 border-dark flex items-center justify-center text-white text-xs font-bold shadow-glow"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">8+ Projects</p>
                <p className="text-xs text-gray-500">Built</p>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div 
            className={`relative flex justify-center lg:justify-end transition-all duration-1000 ease-expo-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transitionDelay: '400ms' }}
          >
            {/* Decorative Ring */}
            <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
              <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px]">
                {/* Outer rotating ring with glow */}
                <div className="absolute inset-0 border-2 border-dashed border-purple/40 rounded-full animate-spin-slow shadow-glow" />
                
                {/* Inner pulsing ring */}
                <div className="absolute inset-4 border border-cyan/30 rounded-full animate-pulse-glow-cyan" />
                
                {/* Gradient ring */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple/20 to-cyan/20 blur-xl" />
                
                {/* Floating accent shapes */}
                <div className="absolute -top-4 left-1/2 w-8 h-8 bg-purple rounded-lg animate-float rotate-45 shadow-glow" />
                <div className="absolute top-1/4 -right-4 w-6 h-6 bg-cyan rounded-full animate-float-slow shadow-glow-cyan" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-1/4 -left-4 w-10 h-10 bg-purple-500/50 rounded-xl animate-float shadow-glow" style={{ animationDelay: '1s' }} />
                <div className="absolute -bottom-2 right-1/4 w-5 h-5 bg-pink-glow rounded-full animate-float-slow shadow-[0_0_20px_rgba(236,72,153,0.5)]" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>

            {/* Profile Image Container */}
            <div className="relative z-10 lg:-translate-x-9">
              <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-4 border-purple/50 shadow-glow-lg animate-pulse-glow">
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-expo-out"
                />
              </div>
              
              {/* Status Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-dark-card border border-purple/30 rounded-full shadow-glow flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="text-sm font-medium text-white">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="text-xs text-gray-500 font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-purple/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-purple rounded-full animate-bounce shadow-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
