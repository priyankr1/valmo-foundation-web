import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const quickLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Our Divisions', href: '#divisions' },
  { name: 'Foundation', href: '#foundation' },
  { name: 'School Projects', href: '#projects' },
];

const services = [
  { name: 'Real Estate Development', href: '#' },
  { name: 'Technology Solutions', href: '#' },
  { name: 'Business Consulting', href: '#' },
  { name: 'Engineering Services', href: '#' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white/3 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_2px,transparent_2px)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="section-padding py-16">
          <div className="container-width">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">VALMO</h3>
                <p className="text-blue-200 mb-6 leading-relaxed">
                  Building tomorrow's solutions today through innovation, 
                  excellence, and commitment to sustainable development.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-blue-300" />
                    <span className="text-blue-200">123 Innovation Drive, Business District</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-blue-300" />
                    <span className="text-blue-200">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-blue-300" />
                    <span className="text-blue-200">info@valmo.com</span>
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-blue-200 hover:text-white transition-colors hover:underline"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => scrollToSection('#vision')}
                      className="text-blue-200 hover:text-white transition-colors hover:underline"
                    >
                      Vision & Mission
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('#contact')}
                      className="text-blue-200 hover:text-white transition-colors hover:underline"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6">Our Services</h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className="text-blue-200 hover:text-white transition-colors hover:underline"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-blue-200 hover:text-white hover:bg-white/20 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
                <p className="text-blue-200 mb-6">
                  Subscribe to our newsletter for the latest updates and insights.
                </p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <Button className="w-full bg-white text-navy hover:bg-blue-50 font-semibold">
                    Subscribe
                  </Button>
                </div>

                <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                  <h5 className="font-semibold mb-2">VALMO Foundation</h5>
                  <p className="text-sm text-blue-200">
                    Supporting education and community development initiatives worldwide.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="section-padding py-6">
            <div className="container-width">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-blue-200 text-sm mb-4 md:mb-0">
                  © 2024 VALMO. All rights reserved. | Privacy Policy | Terms of Service
                </div>
                
                <motion.button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-blue-200 hover:text-white hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}