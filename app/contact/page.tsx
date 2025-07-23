import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
                Contact Us
              </h1>
              <p className="text-gray-600 text-lg">
                Have a question or want to work together? Reach out to us.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Contact Form */}
                  <div className="p-8 md:p-12">
                    <h2 className="text-2xl font-bold text-[#1E1E1E] mb-6">Send Us a Message</h2>
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
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input type="text" id="subject" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-[#2592EB] focus:border-[#2592EB] text-gray-900" />
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
                  
                  {/* Contact Info */}
                  <div className="bg-[#F5F9FF] p-8 md:p-12">
                    <h2 className="text-2xl font-bold text-[#1E1E1E] mb-6">Contact Information</h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-[#2592EB]/10 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-[#1E1E1E]">Address</h3>
                          <p className="text-gray-600">
                            B623, RK Iconic, Near Sheetal Park,<br />
                            150ft Ring Road, Rajkot 360007,<br />
                            Gujarat, India
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-[#2592EB]/10 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-[#1E1E1E]">Phone</h3>
                          <p className="text-gray-600">+91 9601592298</p>
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-[#1E1E1E]">Business Hours</h3>
                          <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                        </div>
                      </div>
                      
                      <div className="pt-6">
                        <h3 className="font-medium text-[#1E1E1E] mb-3">Connect With Us</h3>
                        <div className="flex space-x-3">
                          <a href="#" className="bg-white p-2 rounded-full hover:bg-blue-50 transition-colors border border-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2592EB" viewBox="0 0 24 24">
                              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                            </svg>
                          </a>
                          <a href="#" className="bg-white p-2 rounded-full hover:bg-blue-50 transition-colors border border-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2592EB" viewBox="0 0 24 24">
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                          </a>
                          <a href="#" className="bg-white p-2 rounded-full hover:bg-blue-50 transition-colors border border-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2592EB" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </a>
                          <a href="#" className="bg-white p-2 rounded-full hover:bg-blue-50 transition-colors border border-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2592EB" viewBox="0 0 24 24">
                              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="rounded-xl overflow-hidden shadow-md h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6746310488547!2d70.7712!3d22.2909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca2a6e3ad42f%3A0xdf1ce71cfc9c3d13!2sRK%20Iconic%2C%20150%20Feet%20Ring%20Rd%2C%20Rajkot%2C%20Gujarat%20360007!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}