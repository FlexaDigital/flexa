import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Web Development',
    description: 'We develop static and dynamic websites for businesses across industries.',
    icon: '🌐',
    link: '/services/web-development',
    image: '/web-development.jpg'
  },
  {
    title: 'E-Commerce Development',
    description: 'We build scalable online stores with smooth checkout, payment gateways, and real-time inventory sync.',
    icon: '🛒',
    link: '/services/ecommerce',
    image: '/ecommerce.jpg'
  },
  {
    title: 'SEO Optimization',
    description: 'We optimize websites for search engines to drive organic traffic, improve site performance, and keyword ranking.',
    icon: '📈',
    link: '/services/seo',
    image: '/seo.jpg'
  },
  {
    title: 'App Development',
    description: 'We build high-performance mobile and web applications tailored to your business logic.',
    icon: '📱',
    link: '/services/app-development',
    image: '/app-development.jpg'
  },
  {
    title: 'Digital Marketing',
    description: 'End-to-end campaigns to grow visibility and sales via social media, email, PPC, and content.',
    icon: '📣',
    link: '/services/digital-marketing',
    image: '/digital-marketing.jpg'
  },
  {
    title: 'Custom Software Development',
    description: 'We build cloud-based ERP, CRM, inventory, HR, finance systems tailored to your operations.',
    icon: '⚙️',
    link: '/services/custom-software',
    image: '/custom-software.jpg'
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
                Our Services
              </h1>
              <p className="text-gray-600 text-lg md:text-xl">
                Comprehensive digital solutions to help your business grow and succeed in the digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-[#F5F9FF]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link 
                  href={service.link} 
                  key={index}
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-video relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-[#2592EB] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl z-20">
                        {service.icon}
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-semibold mb-3 text-[#1E1E1E] group-hover:text-[#2592EB] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {service.description}
                      </p>
                      <div className="flex items-center text-[#2592EB] font-medium">
                        <span>Learn more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#2592EB] to-[#145693] rounded-2xl overflow-hidden shadow-xl">
              <div className="p-10 md:p-16 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Transform Your Digital Presence?
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto mb-8">
                  Let&apos;s discuss how our services can help your business grow and succeed in the digital landscape.
                </p>
                <Link
                  href="#contact"
                  className="bg-white text-[#2592EB] px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-all text-sm font-medium inline-flex items-center"
                >
                  <span>Get Free Consultation</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}