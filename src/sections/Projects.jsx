import { useState, useEffect, useRef } from 'react';
import { Folder, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple/10 border border-purple/30 rounded-full mb-4">
            <Folder className="w-4 h-4 text-purple" />
            <span className="text-sm font-medium text-purple">Projects</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Some of my best projects
          </p>
        </div>

        {/* Projects Grid (ONLY 2 + CENTER) */}
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {projects.slice(0, 2).map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-dark-card border border-purple/20 rounded-2xl overflow-hidden hover:border-purple/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image */}
              <div className="relative h-58 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent transition-opacity ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`} />

                <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all ${
                    hoveredProject === project.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {/* Show Live ONLY for first project */}
                  {index === 0 && project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-purple rounded-full flex items-center justify-center text-white hover:bg-purple-600 hover:scale-110 transition-all shadow-glow"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}

                  {/* Always show GitHub */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-card border border-purple/50 rounded-full flex items-center justify-center text-white hover:bg-purple hover:border-purple hover:scale-110 transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple/10 border border-purple/20 text-purple text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/adeshsonawane46?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border-2 border-purple text-white rounded-full hover:bg-purple transition"
          >
            <Github className="mr-2 w-5 h-5" />
            View All Projects
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;