import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    details: ['123 Innovation Drive', 'Business District', 'Your City, State 12345'],
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@valmo.com', 'contact@valmo.com'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="py-20 bg-background">
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
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start a conversation? We'd love to hear from you. 
              Reach out and let's explore how we can work together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Let's Connect
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Whether you're interested in our services, want to partner with us, 
                  or have questions about our foundation initiatives, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-soft card-hover"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-hero rounded-xl p-6 text-white">
                <div className="flex items-center mb-4">
                  <MessageSquare className="w-6 h-6 mr-3" />
                  <h4 className="text-xl font-semibold">Quick Response Promise</h4>
                </div>
                <p className="text-blue-100">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-large border border-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company (Optional)
                    </label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full resize-none"
                    />
                  </div>

                  <Button className="w-full btn-cta py-4 text-lg">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <div className="bg-card rounded-2xl p-8 shadow-large border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Visit Our Office
              </h3>
              <div className="bg-gradient-to-r from-primary/10 to-navy/10 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">
                    Interactive map coming soon
                  </p>
                  <p className="text-muted-foreground">
                    123 Innovation Drive, Business District
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