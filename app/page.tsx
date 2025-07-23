import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Features from './components/Features';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FullScreenSection from './components/FullScreenSection';

export default function Home() {
  return (
    <main className="overflow-y-auto">
      <Header />
      <FullScreenSection className="bg-white">
        <Hero />
      </FullScreenSection>
      <FullScreenSection className="bg-gray-50" id="services">
        <Services />
      </FullScreenSection>
      <FullScreenSection className="bg-white" id="tech-stack">
        <TechStack />
      </FullScreenSection>
      <FullScreenSection className="bg-gray-50" id="about">
        <Features />
      </FullScreenSection>
      <FullScreenSection className="bg-white" id="portfolio">
        <Projects />
      </FullScreenSection>
      <FullScreenSection className="bg-gray-50">
        <Testimonials />
      </FullScreenSection>
      <FullScreenSection className="bg-white">
        <CTA />
      </FullScreenSection>
      <FullScreenSection className="bg-white" id="contact">
        <Contact />
      </FullScreenSection>
      <Footer />
    </main>
  );
}
