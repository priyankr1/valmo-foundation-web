import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Globe, Users, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality in everything we do.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Expanding our impact across communities and industries worldwide.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Fostering teamwork and innovation through diverse perspectives.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pioneering new solutions and approaches for tomorrow\'s challenges.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="section-padding">
        <div className="container-width">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              About VALMO
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              VALMO stands as a beacon of innovation and excellence, bringing together diverse 
              expertise and unwavering commitment to create meaningful impact across multiple sectors.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded with a vision to transform industries and communities, VALMO has grown 
                  into a multifaceted organization that bridges innovation with practical solutions.
                </p>
                <p>
                  Our journey began with a simple belief: that excellence, integrity, and 
                  collaboration can create lasting positive change. Today, we operate across 
                  multiple divisions, each contributing unique expertise to our collective mission.
                </p>
                <p>
                  From education initiatives through the VALMO Foundation to cutting-edge 
                  projects that shape the future, we remain committed to our core values 
                  while embracing new opportunities for growth and impact.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-8 shadow-large card-hover">
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  What Sets Us Apart
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Diverse portfolio spanning multiple industries and sectors
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Strong commitment to community development and education
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Innovation-driven approach to solving complex challenges
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Sustainable practices that benefit both business and society
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-6 bg-card rounded-xl shadow-soft card-hover"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}