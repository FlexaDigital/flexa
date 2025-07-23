'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Sample portfolio projects
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    image: '/portfolio/ecommerce.jpg',
    description: 'A fully responsive e-commerce platform with advanced filtering, payment integration, and inventory management.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#'
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    category: 'Custom Software',
    image: '/portfolio/healthcare.jpg',
    description: 'Comprehensive healthcare management system for patient records, appointment scheduling, and billing.',
    technologies: ['React', 'Express', 'PostgreSQL', 'Docker'],
    link: '#'
  },
  {
    id: 3,
    title: 'Real Estate Marketplace',
    category: 'Web Development',
    image: '/portfolio/realestate.jpg',
    description: 'Property listing platform with advanced search, virtual tours, and agent management.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
    link: '#'
  },
  {
    id: 4,
    title: 'Fitness Tracking App',
    category: 'App Development',
    image: '/portfolio/fitness.jpg',
    description: 'Mobile application for tracking workouts, nutrition, and progress with personalized recommendations.',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    link: '#'
  },
  {
    id: 5,
    title: 'Corporate Branding Website',
    category: 'Web Development',
    image: '/portfolio/corporate.jpg',
    description: 'Modern corporate website with custom animations, blog integration, and multilingual support.',
    technologies: ['Next.js', 'Tailwind CSS', 'Strapi CMS'],
    link: '#'
  },
  {
    id: 6,
    title: 'Inventory Management System',
    category: 'Custom Software',
    image: '/portfolio/inventory.jpg',
    description: 'Cloud-based inventory management system with barcode scanning, reporting, and supplier management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
    link: '#'
  },
  {
    id: 7,
    title: 'Food Delivery Platform',
    category: 'E-Commerce',
    image: '/portfolio/food.jpg',
    description: 'Online food ordering and delivery platform with real-time tracking and restaurant management.',
    technologies: ['React', 'Express', 'PostgreSQL', 'Redis'],
    link: '#'
  },
  {
    id: 8,
    title: 'Educational Learning Platform',
    category: 'Web Development',
    image: '/portfolio/education.jpg',
    description: 'Interactive learning platform with course management, video streaming, and progress tracking.',
    technologies: ['Next.js', 'Django', 'PostgreSQL', 'AWS'],
    link: '#'
  },
  {
    id: 9,
    title: 'Travel Booking App',
    category: 'App Development',
    image: '/portfolio/travel.jpg',
    description: 'Mobile application for booking flights, hotels, and activities with personalized recommendations.',
    technologies: ['Flutter', 'Node.js', 'MongoDB'],
    link: '#'
  }
];

// Project categories for filtering
const categories = [
  'All',
  'Web Development',
  'E-Commerce',
  'App Development',
  'Custom Software'
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
                Our Portfolio
              </h1>
              <p className="text-gray-600 text-lg">
                Explore our recent projects and see how we've helped businesses transform their digital presence.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      index === 0 
                        ? 'bg-[#2592EB] text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <div key={project.id} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                      <div className="relative aspect-video overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-lg">{project.title}</span>
                        </div>
                        <div className="absolute top-4 left-4 bg-[#2592EB]/90 text-white text-xs font-medium py-1 px-2 rounded z-20">
                          {project.category}
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-semibold mb-3 text-[#1E1E1E] group-hover:text-[#2592EB] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4 flex-grow">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <Link 
                          href={project.link} 
                          className="text-[#2592EB] font-medium text-sm flex items-center"
                        >
                          View Project
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-[#F5F9FF]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">Our Project Process</h2>
              <p className="text-gray-600">
                How we approach each project to ensure successful outcomes
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm relative">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#2592EB] text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1E1E1E]">Discovery</h3>
                  <p className="text-gray-600">
                    We begin by understanding your business goals, target audience, and project requirements.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm relative">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#2592EB] text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1E1E1E]">Planning</h3>
                  <p className="text-gray-600">
                    We create a detailed project plan with timelines, milestones, and resource allocation.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm relative">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#2592EB] text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1E1E1E]">Execution</h3>
                  <p className="text-gray-600">
                    Our team develops the solution with regular updates and opportunities for feedback.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm relative">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#2592EB] text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1E1E1E]">Delivery</h3>
                  <p className="text-gray-600">
                    We launch your project with thorough testing and provide ongoing support and maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">Client Testimonials</h2>
              <p className="text-gray-600">
                What our clients say about working with us
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#F5F9FF] p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h3 className="font-semibold text-[#1E1E1E]">John Smith</h3>
                      <p className="text-gray-500 text-sm">CEO, TechCorp</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "FlexaDigital transformed our online presence with a beautiful, functional website that has significantly increased our customer engagement and sales."
                  </p>
                </div>
                
                <div className="bg-[#F5F9FF] p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h3 className="font-semibold text-[#1E1E1E]">Sarah Johnson</h3>
                      <p className="text-gray-500 text-sm">Marketing Director, StyleHub</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "The e-commerce platform developed by FlexaDigital exceeded our expectations. Their attention to detail and commitment to quality is unmatched."
                  </p>
                </div>
                
                <div className="bg-[#F5F9FF] p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h3 className="font-semibold text-[#1E1E1E]">Michael Brown</h3>
                      <p className="text-gray-500 text-sm">Founder, HealthPlus</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Working with FlexaDigital on our healthcare app was a seamless experience. Their technical expertise and innovative approach helped us create a product our users love."
                  </p>
                </div>
                
                <div className="bg-[#F5F9FF] p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h3 className="font-semibold text-[#1E1E1E]">Emily Davis</h3>
                      <p className="text-gray-500 text-sm">Operations Manager, LogiTech</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "The inventory management system developed by FlexaDigital has streamlined our operations and reduced errors by 75%. Their support team is responsive and always helpful."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#2592EB] to-[#145693] text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Let's discuss how we can help bring your vision to life with our expertise in digital solutions.
              </p>
              <Link
                href="/contact"
                className="bg-white text-[#2592EB] px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-all text-sm font-medium inline-flex items-center"
              >
                <span>Contact Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}