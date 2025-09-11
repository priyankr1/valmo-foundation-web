import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Code, Briefcase, Cog, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const divisions = [
  {
    icon: Building,
    title: 'Real Estate & Development',
    description: 'Comprehensive property development and management solutions for residential and commercial projects.',
    features: ['Property Development', 'Asset Management', 'Investment Advisory', 'Market Analysis'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Code,
    title: 'Technology Solutions',
    description: 'Cutting-edge software development and IT solutions tailored for modern business needs.',
    features: ['Custom Software', 'Web Development', 'Mobile Apps', 'IT Consulting'],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Briefcase,
    title: 'Business Consulting',
    description: 'Strategic consulting services to help organizations optimize operations and achieve growth.',
    features: ['Strategic Planning', 'Process Optimization', 'Market Entry', 'Digital Transformation'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Cog,
    title: 'Engineering Services',
    description: 'Professional engineering solutions across multiple disciplines and industries.',
    features: ['Civil Engineering', 'Mechanical Design', 'Project Management', 'Quality Assurance'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Zap,
    title: 'Innovation Labs',
    description: 'Research and development initiatives focused on emerging technologies and future solutions.',
    features: ['R&D Projects', 'Prototype Development', 'Technology Transfer', 'Innovation Strategy'],
    color: 'from-red-500 to-red-600',
  },
];

export default function Divisions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="divisions" className="py-20 bg-background">
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
              Our Divisions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              VALMO operates across multiple specialized divisions, each bringing unique expertise 
              and innovative solutions to meet diverse market needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {divisions.map((division, index) => (
              <motion.div
                key={division.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-8 shadow-soft card-hover h-full border border-border/50">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${division.color} rounded-xl mb-6 shadow-medium`}>
                    <division.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {division.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {division.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-6">
                    {division.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full btn-secondary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-hero rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our divisions can work together to bring your vision to life.
              </p>
              <Button 
                className="bg-white text-primary hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-lg shadow-large hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start a Conversation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}