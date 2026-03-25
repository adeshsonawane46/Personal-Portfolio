import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { navLinks } from '../data/portfolioData';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Determine active section
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-expo-out ${
          isScrolled
            ? 'bg-dark/80 backdrop-blur-xl border-b border-purple/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-2 group"
            >
              <Sparkles className="w-6 h-6 text-purple group-hover:text-cyan transition-colors duration-300" />
              <span className="text-2xl font-bold text-white tracking-tight group-hover:text-glow transition-all duration-300">
                Portfolio
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                    activeSection === link.href.slice(1)
                      ? 'text-purple'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple to-cyan rounded-full transition-all duration-300 ease-expo-out ${
                      activeSection === link.href.slice(1)
                        ? 'w-6 shadow-glow'
                        : 'w-0 group-hover:w-6'
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="relative px-6 py-2.5 bg-purple text-white text-sm font-medium rounded-full overflow-hidden group transition-all duration-300 ease-expo-out hover:shadow-glow-lg hover:-translate-y-0.5"
              >
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple to-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-purple hover:bg-purple/10 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-20 right-4 left-4 bg-dark-card/95 backdrop-blur-xl rounded-2xl border border-purple/20 shadow-glow-lg p-6 transition-all duration-500 ease-expo-out ${
            isMobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'bg-purple/20 text-purple shadow-glow'
                    : 'text-gray-400 hover:bg-purple/10 hover:text-white'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  transitionDelay: `${index * 30}ms`,
                }}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-purple/20">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="block w-full px-4 py-3 bg-purple text-white text-center font-medium rounded-xl hover:bg-purple-600 transition-colors duration-300 shadow-glow"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
