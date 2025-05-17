import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            <motion.div 
              className="w-full md:w-2/5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="h-[400px] w-full md:w-[300px] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <img 
                    src="/about-img.png" 
                    alt="Portrait of Partha" 
                    className="w-full h-full object-top object-contain transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-2xl"></div>
                <div className="absolute top-6 left-6 -z-10 w-full h-full bg-accent/20 rounded-2xl"></div>
              </div>
            </motion.div>

            <motion.div 
              className="w-full md:w-3/5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-2">About Me</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>

              <p className="text-lg text-muted-foreground mb-6">
                Hey there! I'm Partha — a full-stack web wizard on a mission to craft pixel-perfect, jaw-droppingly smooth digital adventures. 
                I accidentally clicked “View Source” back in college, and boom — I’ve been coding ever since like it’s my favorite side quest.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                I love building everything from cozy little biz sites to full-blown web apps with all the bells and whistles. 
                My superpower? Crafting interfaces so smooth, even your grandma could use them — fast, friendly, and fun all the way!
              </p>

              <p className="text-lg text-muted-foreground">
                When I’m not slaying bugs with my keyboard sword, I’m on a side quest bingeing Interstellar (again) or grinding through indie games. Code or content, I just love turning tech into tales.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-10">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Name</h3>
                  <p className="text-muted-foreground">Partha Jyoti Cheleng</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Email</h3>
                  <p className="text-muted-foreground">parthajyoti2000@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Location</h3>
                  <p className="text-muted-foreground">Assam, India</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Availability</h3>
                  <p className="text-muted-foreground">Open to opportunities</p>
                </div>
              </div>

              <div className="mt-10">
                <a 
                  href="/Partha_Jyoti_Cheleng_Resume.pdf"
                  download
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  Download resume
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
