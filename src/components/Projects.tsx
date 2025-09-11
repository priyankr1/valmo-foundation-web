import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Library, Users, Laptop, Building, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    icon: GraduationCap,
    title: 'Modern Learning Centers',
    category: 'Educational Infrastructure',
    description: 'State-of-the-art learning facilities equipped with modern technology and resources to enhance educational outcomes.',
    status: 'Completed',
    beneficiaries: '2,500+ Students',
    image: 'from-blue-500 to-blue-600',
  },
  {
    icon: Library,
    title: 'Digital Library Network',
    category: 'Technology Integration',
    description: 'Comprehensive digital library system connecting rural schools with global educational resources.',
    status: 'In Progress',
    beneficiaries: '1,200+ Students',
    image: 'from-green-500 to-green-600',
  },
  {
    icon: Users,
    title: 'Teacher Training Program',
    category: 'Professional Development',
    description: 'Intensive training programs to enhance teaching methodologies and integrate modern educational approaches.',
    status: 'Ongoing',
    beneficiaries: '150+ Educators',
    image: 'from-purple-500 to-purple-600',
  },
  {
    icon: Laptop,
    title: 'STEM Innovation Labs',
    category: 'Science & Technology',
    description: 'Hands-on laboratories focused on Science, Technology, Engineering, and Mathematics education.',
    status: 'Planning',
    beneficiaries: '800+ Students',
    image: 'from-orange-500 to-orange-600',
  },
  {
    icon: Building,
    title: 'School Infrastructure',
    category: 'Construction & Renovation',
    description: 'Complete renovation and construction of school buildings to provide safe, modern learning environments.',
    status: 'Completed',
    beneficiaries: '3,000+ Students',
    image: 'from-red-500 to-red-600',
  },
  {
    icon: TreePine,
    title: 'Green Campus Initiative',
    category: 'Environmental Sustainability',
    description: 'Creating eco-friendly school environments with sustainable practices and environmental education.',
    status: 'In Progress',
    beneficiaries: '10+ Schools',
    image: 'from-teal-500 to-teal-600',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Completed': return 'bg-green-100 text-green-800 border-green-200';
    case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Ongoing': return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'Planning': return 'bg-orange-100 text-orange-800 border-orange-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="py-20 bg-background">
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
              School Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming educational landscapes through innovative projects that enhance learning 
              environments and empower students with modern tools and resources.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-8 shadow-soft card-hover h-full border border-border/50">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${project.image} rounded-xl shadow-medium`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="text-muted-foreground">
                      <span className="font-medium">Impact:</span> {project.beneficiaries}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-hero rounded-2xl p-12 text-white mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Our Impact in Numbers</h3>
              <p className="text-xl text-blue-100">
                Measuring success through tangible outcomes and lasting change
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '25+', label: 'Schools Transformed' },
                { number: '5,000+', label: 'Students Impacted' },
                { number: '200+', label: 'Teachers Trained' },
                { number: '15+', label: 'Communities Served' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
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
                Support Our Educational Mission
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join us in creating better educational opportunities and brighter futures for students everywhere.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="btn-cta px-8 py-4 text-lg">
                  Partner With Us
                </Button>
                <Button variant="outline" className="btn-secondary px-8 py-4 text-lg">
                  View All Projects
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}