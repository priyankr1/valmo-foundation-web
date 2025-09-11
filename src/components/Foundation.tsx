import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, BookOpen, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const initiatives = [
  {
    icon: BookOpen,
    title: 'Educational Programs',
    description: 'Providing scholarships and educational resources to underprivileged students.',
    impact: '500+ Students Supported',
  },
  {
    icon: Users,
    title: 'Community Development',
    description: 'Building stronger communities through infrastructure and social programs.',
    impact: '25+ Communities Reached',
  },
  {
    icon: Heart,
    title: 'Healthcare Access',
    description: 'Improving healthcare accessibility in underserved areas.',
    impact: '10,000+ People Served',
  },
  {
    icon: Award,
    title: 'Skills Training',
    description: 'Empowering individuals with vocational skills and career opportunities.',
    impact: '300+ Graduates Placed',
  },
];

export default function Foundation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="foundation" className="py-20 bg-gradient-section">
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
              VALMO Foundation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our commitment to social responsibility drives meaningful change in communities 
              through education, healthcare, and sustainable development initiatives.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-hero rounded-2xl transform rotate-3"></div>
                <div className="relative bg-card rounded-2xl p-8 shadow-large">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Making a Difference
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    The VALMO Foundation represents our unwavering commitment to giving back 
                    to society. Through strategic partnerships and community-focused programs, 
                    we work to address some of the most pressing challenges facing our world today.
                  </p>
                  <div className="flex items-center text-primary font-semibold">
                    <span>Learn about our impact</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3">Our Mission</h4>
                <p className="text-muted-foreground">
                  To create sustainable positive impact in communities through education, 
                  healthcare, and economic development programs.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3">Our Approach</h4>
                <p className="text-muted-foreground">
                  We believe in collaborative solutions that empower communities and create 
                  lasting change through strategic partnerships and innovative programs.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-3">Our Impact</h4>
                <p className="text-muted-foreground">
                  Through measurable outcomes and transparent reporting, we ensure every 
                  initiative creates meaningful, sustainable impact for those we serve.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Initiatives Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                className="text-center p-6 bg-card rounded-xl shadow-soft card-hover"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <initiative.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {initiative.title}
                </h4>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {initiative.description}
                </p>
                <div className="text-primary font-semibold text-sm">
                  {initiative.impact}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-card rounded-2xl p-12 shadow-large border border-border/50">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Join Our Mission
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Partner with us to create lasting positive change in communities around the world.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="btn-cta px-8 py-4 text-lg">
                  Get Involved
                </Button>
                <Button variant="outline" className="btn-secondary px-8 py-4 text-lg">
                  View Programs
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}