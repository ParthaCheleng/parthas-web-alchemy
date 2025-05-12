
import { motion } from 'framer-motion';

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "HTML & CSS", level: 95 },
  { name: "React", level: 90 },
  { name: "Express.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "SQL", level: 75 },
  { name: "Git", level: 90 }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto mt-4"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            The technologies and tools I specialize in
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted/30 h-2.5 rounded-full">
                  <motion.div
                    className="h-2.5 rounded-full bg-gradient-to-r from-primary/80 to-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Removed extra tools section based on requirements */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

