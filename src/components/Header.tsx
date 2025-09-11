import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'About Us', href: '#about' },
  { name: 'Our Divisions', href: '#divisions' },
  { name: 'Foundation', href: '#foundation' },
  { name: 'School Projects', href: '#projects' },
  { name: 'Vision & Mission', href: '#vision' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="section-padding">
        <div className="container-width flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <h1 className="text-2xl font-bold text-gradient">VALMO</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {item.name}
              </motion.button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="btn-cta"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background shadow-large rounded-lg mt-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md w-full text-left transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 pt-2">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="btn-cta w-full"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}