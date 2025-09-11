import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, Target, Compass, Star, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do, continuously improving and innovating.',
  },
  {
    icon: Compass,
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical practices at all times.',
  },
  {
    icon: Star,
    title: 'Innovation',
    description: 'We embrace creativity and forward-thinking approaches to solve complex challenges.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'We maintain a clear focus on our long-term goals while adapting to changing environments.',
  },
];

export default function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="vision" className="py-20 bg-gradient-section">
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
              Vision & Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our guiding principles and aspirations that drive everything we do, 
              shaping our path toward a better future for all.
            </p>
          </motion.div>

          {/* Vision & Mission Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-navy rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-background rounded-2xl p-8 m-1 shadow-large">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To be a globally recognized leader in multi-sector innovation, creating sustainable 
                  solutions that enhance communities, drive economic growth, and foster positive 
                  social change across all our areas of operation.
                </p>
                <div className="flex items-center text-primary font-semibold">
                  <span>Envisioning the future</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-navy to-primary rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-background rounded-2xl p-8 m-1 shadow-large">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To deliver exceptional value through innovative solutions, strategic partnerships, 
                  and commitment to excellence across our diverse divisions while maintaining 
                  our dedication to social responsibility and sustainable development.
                </p>
                <div className="flex items-center text-primary font-semibold">
                  <span>Driving our purpose</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The fundamental principles that guide our decisions, actions, and relationships 
                with all stakeholders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="text-center p-6 bg-card rounded-xl shadow-soft card-hover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Strategic Goals */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-card rounded-2xl p-12 shadow-large border border-border/50">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Strategic Goals 2024-2030
                </h3>
                <p className="text-lg text-muted-foreground">
                  Our roadmap for achieving sustainable growth and meaningful impact
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Expand Global Reach
                  </h4>
                  <p className="text-muted-foreground">
                    Establish presence in 10 new markets while strengthening existing operations.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Innovation Leadership
                  </h4>
                  <p className="text-muted-foreground">
                    Invest 15% of revenue in R&D and emerging technology solutions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Social Impact
                  </h4>
                  <p className="text-muted-foreground">
                    Reach 100,000 beneficiaries through our foundation programs.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}