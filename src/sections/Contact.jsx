import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Dribbble, Copy, Check } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Dribbble,
};

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
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

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400">Feel free to reach out via email</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 p-4 bg-dark-card border border-purple/20 rounded-xl hover:border-purple hover:shadow-glow transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple/10 rounded-xl flex items-center justify-center">
                  <item.icon className="text-purple" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{item.label}</p>
                  <p className="text-white">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border border-purple/20 rounded-xl hover:bg-purple hover:text-white transition-all"
                  >
                    {Icon && <Icon />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE (EMAIL ONLY) */}
          <div className="bg-dark-card border border-purple/20 rounded-2xl p-8 text-center space-y-6">

            <h3 className="text-2xl font-bold text-white">
              Email Me 📩
            </h3>

            <p className="text-gray-400">
              Click below to send me an email or copy my address.
            </p>

            {/* EMAIL BUTTON */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="block w-full py-3 bg-purple text-white rounded-xl hover:bg-purple-600 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
            >
              Email Me
            </a>

            {/* COPY BUTTON */}
            <button
              onClick={handleCopy}
              className="w-full py-3 border border-purple/30 text-purple rounded-xl hover:bg-purple/10 transition-all flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check size={18} /> Copied!
                </>
              ) : (
                <>
                  <Copy size={18} /> Copy Email
                </>
              )}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;