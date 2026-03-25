import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, ArrowUp, Sparkles } from 'lucide-react';
import { socialLinks, navLinks } from '../data/portfolioData';

const iconMap = {
  Github,
  Linkedin,
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const half = Math.ceil(navLinks.length / 2);
  const leftLinks = navLinks.slice(0, half);
  const rightLinks = navLinks.slice(half);

  return (
    <footer
      ref={footerRef}
      className="relative bg-dark-lighter pt-16 pb-8 border-t border-purple/10"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Main Content */}
        <div className={`grid md:grid-cols-2 gap-10 mb-12 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>

          {/* Left Side */}
          <div>
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="flex items-center gap-2"
            >
              <Sparkles className="w-6 h-6 text-purple" />
              <span className="text-2xl font-bold text-white">
                Adesh Sonawane
              </span>
            </a>

            <p className="mt-4 text-gray-400 text-sm">
              Full Stack Developer | Software Engineer <br />
              Building scalable web applications and solving real-world problems.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-card border border-purple/20 rounded-lg flex items-center justify-center text-gray-400 hover:bg-purple hover:text-white transition"
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side - Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>

            <div className="grid grid-cols-2 gap-6 max-w-sm">

              {/* Left Column */}
              <ul className="space-y-3">
                {leftLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-gray-400 text-sm hover:text-purple transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Right Column */}
              <ul className="space-y-3">
                {rightLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-gray-400 text-sm hover:text-purple transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-purple/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Adesh Sonawane. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-purple transition"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;