
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Senior Front-End Developer",
    company: "Tech Innovations Inc.",
    date: "Jan 2022 - Present",
    description: "Lead the front-end development team in creating responsive web applications using React, TypeScript, and modern CSS frameworks. Improved site performance by 40% through code optimization.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    date: "Mar 2020 - Dec 2021",
    description: "Developed and maintained full-stack applications with React, Node.js, and MongoDB. Collaborated with designers to implement UI/UX improvements across multiple projects.",
    skills: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "Web Developer",
    company: "Creative Web Agency",
    date: "Jun 2018 - Feb 2020",
    description: "Built responsive websites for clients across various industries. Implemented SEO best practices and optimized website performance for improved user experience.",
    skills: ["HTML/CSS", "JavaScript", "WordPress", "PHP"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-4"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            My professional journey and the companies I've had the privilege to work with
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-muted rounded-full"></div>

            {/* Experience items */}
            {experiences.map((experience, index) => (
              <div key={index} className="mb-12 md:mb-24">
                <motion.div 
                  className={`flex flex-col md:flex-row md:gap-8 relative ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>

                  {/* Date - left side on desktop */}
                  <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} px-10`}>
                    <span className="text-primary font-semibold text-lg">{experience.date}</span>
                  </div>

                  {/* Content - right side on desktop */}
                  <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:pl-10'}`}>
                    <div className="p-6 rounded-xl bg-muted/5 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <p className="text-accent font-medium mb-3">{experience.company}</p>
                      <p className="text-muted-foreground mb-4">{experience.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {experience.skills.map((skill, i) => (
                          <span key={i} className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <span className="block md:hidden text-sm text-muted-foreground font-medium mt-4">{experience.date}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
