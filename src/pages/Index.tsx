import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Divisions from '@/components/Divisions';
import Foundation from '@/components/Foundation';
import Projects from '@/components/Projects';
import Vision from '@/components/Vision';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Divisions />
        <Foundation />
        <Projects />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
