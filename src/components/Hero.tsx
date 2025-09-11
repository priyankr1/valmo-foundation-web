import { motion } from 'framer-motion';
import { ArrowDown, Building2, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Building2, label: 'Divisions', value: '5+' },
    { icon: Users, label: 'Team Members', value: '50+' },
    { icon: Target, label: 'Projects', value: '100+' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_2px,transparent_2px)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="section-padding relative z-10 text-center text-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Building Tomorrow's
              <span className="block text-transparent bg-gradient-to-r from-blue-200 to-white bg-clip-text">
                Solutions Today
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              VALMO is a dynamic organization committed to excellence across multiple divisions, 
              driving innovation and creating lasting impact in our communities.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                onClick={() => scrollToSection('#about')}
                className="bg-white text-primary hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-lg shadow-large hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Discover Our Story
              </Button>
              <Button
                onClick={() => scrollToSection('#divisions')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Explore Divisions
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          className="text-white hover:text-blue-200 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
}