
import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "ClimaSphere",
    description: "A sleek and responsive weather app providing real-time forecasts, location-based data, and detailed weather insights with a clean UI.",
    image: "/weather-app-thumbnail.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "WeatherAPI", "Vercel"],
    liveUrl: "https://clima-sphere-view.vercel.app/",
    githubUrl: "https://github.com/ParthaCheleng/clima-sphere-view"
  },
  {
    title: "GlobalPulse",
    description: "A real-time news application delivering the latest headlines across categories, with personalized feeds and seamless browsing experience.",
    image: "/news-app-thumbnail.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "NewsAPI", "Vercel"],
    liveUrl: "https://global-pulse-frontend.vercel.app/",
    githubUrl: "https://github.com/ParthaCheleng/global-pulse-frontend"
  },
  {
    title: "tastyTune",
    description: "A modern recipe app featuring step-by-step cooking guides, ingredient filters, dark mode, and a personalized favorites section.",
    image: "/food-app-thumbnail.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Supabase", "Spoonacular API"],
    liveUrl: "https://tasty-tune-creator.vercel.app/",
    githubUrl: "https://github.com/ParthaCheleng/tasty-tune-creator"
  },
  {
    title: "HandiCraft",
    description: "A smart todo app with task creation, deadline tracking, and a clean, intuitive interface.",
    image: "/handicraft.png",
    tags: ["React.js", "Vite", "Typescript", "Tailwind CSS", "Supabase", "Vercel"],
    liveUrl: "https://handicraft-two.vercel.app/",
    githubUrl: "https://github.com/ParthaCheleng/craft-bloom-shop"
  }
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-4"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <motion.div 
                  className="absolute inset-0 flex flex-col justify-end p-6"
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                    y: hoveredProject === index ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <div className="flex gap-3">
                      <a 
                        href={project.githubUrl} 
                        className="p-2 rounded-full bg-background/30 backdrop-blur-sm hover:bg-primary/60 transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C19.1375 20.1625 22 16.4125 22 12C22 6.475 17.525 2 12 2Z" fill="currentColor"/>
                        </svg>
                      </a>
                      <a 
                        href={project.liveUrl} 
                        className="p-2 rounded-full bg-background/30 backdrop-blur-sm hover:bg-primary/60 transition-colors"
                        aria-label="View live demo"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1 bg-primary/20 backdrop-blur-sm text-white rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="https://github.com/ParthaCheleng" 
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View More Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
