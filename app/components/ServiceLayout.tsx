'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

interface ServiceLayoutProps {
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  features: { title: string; description: string; icon?: string }[];
  types?: string[];
  tools?: string[];
  imagePath?: string;
  faqs?: { question: string; answer: string }[];
  benefits?: string[];
}

export default function ServiceLayout({
  title,
  description,
  longDescription,
  techStack,
  features,
  types,
  tools,
  imagePath = '/service-default.jpg',
  faqs,
  benefits,
}: ServiceLayoutProps) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Minimal and Clean */}
        <section className="pt-32 pb-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
                {title}
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                {description}
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={imagePath}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0">
                <p className="text-gray-600 mb-8">
                  {longDescription || description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#contact-form"
                    className="bg-[#2592EB] text-white px-8 py-3.5 rounded-lg hover:bg-[#145693] transition-all text-sm font-medium inline-flex items-center"
                  >
                    <span>Get Free Consultation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/portfolio"
                    className="bg-white text-[#2592EB] border border-[#2592EB] px-8 py-3.5 rounded-lg hover:bg-[#F5F9FF] transition-all text-sm font-medium inline-flex items-center"
                  >
                    <span>View Related Projects</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section (Conditional) */}
        {benefits && (
          <section className="py-16 bg-[#F5F9FF]">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">
                  Why Choose Our {title} Services
                </h2>
                <p className="text-gray-600">The advantages that set our services apart</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1 text-[#2592EB]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features Section - Cleaner Design */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">
                Our {title} Services
              </h2>
              <p className="text-gray-600">Comprehensive solutions tailored to your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group hover:bg-[#F5F9FF] p-6 rounded-xl transition-all duration-300 border border-transparent hover:border-[#2592EB]/10"
                >
                  <div className="w-12 h-12 bg-[#F5F9FF] group-hover:bg-white rounded-lg flex items-center justify-center mb-5 text-[#2592EB]">
                    {feature.icon ? (
                      <span dangerouslySetInnerHTML={{ __html: feature.icon }} />
                    ) : (
                      <span className="font-bold">{index + 1}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1E1E1E]">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section with Tabs */}
        <section className="py-20 bg-[#F5F9FF]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">
                Our Approach
              </h2>
              <p className="text-gray-600">How we deliver exceptional {title} services</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
                {['Discovery', 'Strategy', 'Implementation', 'Testing', 'Launch', 'Support'].map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-5 py-3 text-sm font-medium ${activeTab === index ? 'text-[#2592EB] border-b-2 border-[#2592EB]' : 'text-gray-500 hover:text-[#2592EB]'}`}
                  >
                    {index + 1}. {tab}
                  </button>
                ))}
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                {activeTab === 0 && (
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="bg-[#F5F9FF] p-6 rounded-xl flex items-center justify-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-16 h-16">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-3">Discovery Phase</h3>
                      <p className="text-gray-600 mb-4">We begin by understanding your business goals, target audience, and specific requirements. This involves in-depth research of your industry, competitors, and current digital presence.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5 mr-2 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Stakeholder interviews and requirement gathering</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5 mr-2 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Market and competitor analysis</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5 mr-2 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Defining project scope and objectives</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 1 && (
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="bg-[#F5F9FF] p-6 rounded-xl flex items-center justify-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-16 h-16">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-3">Strategy Development</h3>
                      <p className="text-gray-600 mb-4">Based on our findings, we create a comprehensive strategy tailored to your specific needs and goals, outlining the approach, technologies, and timeline.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5 mr-2 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Technology selection and architecture planning</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5 mr-2 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Project roadmap and milestone definition</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5 mr-2 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Resource allocation and team formation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 2 && (
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="bg-[#F5F9FF] p-6 rounded-xl flex items-center justify-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-16 h-16">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-3">Implementation</h3>
                      <p className="text-gray-600 mb-4">Our expert team brings the strategy to life, developing the solution with regular updates and opportunities for feedback throughout the process.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5 mr-2 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Agile development with regular sprints</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5 mr-2 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Progress tracking and milestone reviews</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5 mr-2 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Continuous integration and deployment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 3 && (
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="bg-[#F5F9FF] p-6 rounded-xl flex items-center justify-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-16 h-16">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                      <p className="text-gray-600 mb-4">We conduct thorough testing to ensure the solution meets all requirements and performs flawlessly across all intended platforms and scenarios.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5 mr-2 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Functional and performance testing</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5 mr-2 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Cross-browser and device compatibility</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5 mr-2 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Security and vulnerability assessment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 4 && (
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="bg-[#F5F9FF] p-6 rounded-xl flex items-center justify-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-16 h-16">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-3">Launch</h3>
                      <p className="text-gray-600 mb-4">We carefully deploy the solution to production, ensuring a smooth transition and minimal disruption to your operations.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5 mr-2 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Deployment planning and execution</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5 mr-2 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Data migration and system integration</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5 mr-2 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">User training and documentation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 5 && (
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="bg-[#F5F9FF] p-6 rounded-xl flex items-center justify-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-16 h-16">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
                      <p className="text-gray-600 mb-4">We provide continuous support and maintenance to ensure your solution remains effective, secure, and up-to-date with evolving technologies.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5 mr-2 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Regular maintenance and updates</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5 mr-2 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Performance monitoring and optimization</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5 mr-2 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Dedicated support team and knowledge base</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section - Minimal Design */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">
                Technologies We Use
              </h2>
              <p className="text-gray-600">Industry-leading tools and frameworks for optimal results</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-[#F5F9FF] px-6 py-3 rounded-lg text-[#2592EB] font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types Section (Conditional) - Cleaner Design */}
        {types && (
          <section className="py-20 bg-[#F5F9FF]">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">
                  Types of {title}
                </h2>
                <p className="text-gray-600">Solutions we offer to meet diverse business needs</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {types.map((type, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#2592EB]"
                  >
                    <p className="text-gray-700 font-medium">{type}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Tools Section (Conditional) - Cleaner Design */}
        {tools && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">
                  Tools We Use
                </h2>
                <p className="text-gray-600">Professional tools that power our {title} services</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-[#F5F9FF] p-4 rounded-lg text-center hover:bg-[#E5F1FF] transition-colors"
                  >
                    <p className="text-gray-700 font-medium">{tool}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs Section (Conditional) */}
        {faqs && (
          <section className="py-20 bg-[#F5F9FF]">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold text-[#1E1E1E] mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600">Common questions about our {title} services</p>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-3 text-[#1E1E1E]">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section - More Impactful */}
        <section id="contact-form" className="py-24 bg-gradient-to-r from-[#2592EB] to-[#145693] text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-12 bg-[#F5F9FF]">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-6">Ready to Get Started?</h2>
                    <p className="text-gray-600 mb-8">
                      Let's discuss how our {title} services can help your business grow and succeed in the digital landscape.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-[#2592EB]/10 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-[#1E1E1E]">Phone</h3>
                          <p className="text-gray-600">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#2592EB]/10 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-[#1E1E1E]">Email</h3>
                          <p className="text-gray-600">info@flexadigital.com</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#2592EB]/10 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-[#1E1E1E]">Location</h3>
                          <p className="text-gray-600">123 Business Avenue, Tech City</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                        <input type="text" id="name" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-[#2592EB] focus:border-[#2592EB] text-gray-900" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" id="email" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-[#2592EB] focus:border-[#2592EB] text-gray-900" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea id="message" rows={4} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-[#2592EB] focus:border-[#2592EB] text-gray-900"></textarea>
                      </div>
                      <button type="submit" className="w-full bg-[#2592EB] text-white px-6 py-3 rounded-lg hover:bg-[#145693] transition-all font-medium">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}