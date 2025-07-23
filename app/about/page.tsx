import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

// Team members data
const teamMembers = [
  {
    name: 'Rahul Sharma',
    position: 'Founder & CEO',
    image: '/team-member-1.jpg',
    bio: 'With over 10 years of experience in web development and digital marketing, Rahul leads our team with vision and expertise.'
  },
  {
    name: 'Priya Patel',
    position: 'Lead Designer',
    image: '/team-member-2.jpg',
    bio: 'Priya brings creative solutions to every project with her background in UI/UX design and brand identity development.'
  },
  {
    name: 'Amit Desai',
    position: 'Technical Director',
    image: '/team-member-3.jpg',
    bio: 'Amit oversees all technical aspects of our projects, specializing in full-stack development and cloud architecture.'
  },
  {
    name: 'Neha Gupta',
    position: 'Digital Marketing Specialist',
    image: '/team-member-4.jpg',
    bio: 'Neha crafts effective digital marketing strategies that drive growth and engagement for our clients.'
  }
];

// Expertise areas
const expertiseAreas = [
  {
    title: 'Web Development',
    description: 'Custom websites built with modern technologies that deliver exceptional user experiences.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that engage users and solve real problems.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that balances aesthetics with functionality for intuitive digital experiences.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Scalable online stores with seamless checkout experiences and robust inventory management.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that increase visibility and drive conversions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    )
  },
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions that streamline operations and solve complex business challenges.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  }
];

// Company values
const companyValues = [
  {
    title: 'Innovation',
    description: 'We embrace new technologies and approaches to deliver cutting-edge solutions.'
  },
  {
    title: 'Quality',
    description: 'We maintain the highest standards in every aspect of our work.'
  },
  {
    title: 'Collaboration',
    description: 'We work closely with our clients to ensure their vision becomes reality.'
  },
  {
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical business practices.'
  }
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
                About FlexaDigital
              </h1>
              <p className="text-gray-600 text-lg">
                We're a team of passionate digital experts committed to transforming ideas into impactful digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-[#F5F9FF]">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/about-company.jpg"
                      alt="FlexaDigital office"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-[#1E1E1E] mb-6">Our Story</h2>
                  <p className="text-gray-600 mb-4">
                    Founded in 2018, FlexaDigital began with a simple mission: to help businesses thrive in the digital landscape through innovative technology solutions and strategic digital marketing.
                  </p>
                  <p className="text-gray-600 mb-4">
                    What started as a small team of three passionate tech enthusiasts has grown into a full-service digital agency serving clients across industries throughout India and beyond.
                  </p>
                  <p className="text-gray-600">
                    Today, we pride ourselves on our ability to combine technical expertise with creative thinking to deliver solutions that not only meet our clients' needs but exceed their expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">Our Expertise</h2>
              <p className="text-gray-600">
                We offer a comprehensive range of digital services to help your business grow.
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                    <div className="text-[#2592EB] mb-4">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-[#1E1E1E]">{area.title}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-[#F5F9FF]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">Our Values</h2>
              <p className="text-gray-600">
                The principles that guide our work and relationships.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {companyValues.map((value, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#2592EB]">
                    <h3 className="text-xl font-semibold mb-2 text-[#1E1E1E]">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">Meet Our Team</h2>
              <p className="text-gray-600">
                The talented people behind our success.
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div className="relative aspect-square">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[#1E1E1E]">{member.name}</h3>
                      <p className="text-[#2592EB] text-sm mb-3">{member.position}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-[#2592EB] to-[#145693] text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <div className="text-white/80">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-white/80">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">5+</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-white/80">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-[#F5F9FF] rounded-2xl overflow-hidden shadow-lg">
              <div className="p-10 md:p-16 text-center">
                <h2 className="text-3xl font-bold text-[#1E1E1E] mb-6">
                  Ready to Work Together?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                  Let's discuss how we can help your business grow with our digital expertise.
                </p>
                <Link
                  href="/contact"
                  className="bg-[#2592EB] text-white px-8 py-3.5 rounded-lg hover:bg-[#145693] transition-all text-sm font-medium inline-flex items-center"
                >
                  <span>Get in Touch</span>
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