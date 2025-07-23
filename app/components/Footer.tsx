'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  // No longer automatically opening footer on scroll down
  useEffect(() => {
    // Initialize footer as closed
    setIsOpen(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <>
      {/* Footer open button at end of page */}
      <div className="flex justify-center mb-6 sm:mb-8 w-full px-4 max-w-xs sm:max-w-md mx-auto">
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#2592EB] text-white px-4 sm:px-6 py-2.5 rounded-lg shadow-lg hover:bg-[#145693] transition-all flex items-center justify-center w-full"
        >
          <span className="font-medium">Footer</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

      {/* Footer modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-white/70 backdrop-blur-md z-50 flex items-end justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="w-full max-h-[90vh] overflow-y-auto rounded-t-3xl shadow-xl animate-slide-up bg-white">
            <div className="sticky top-0 bg-white z-10 flex justify-end pt-4 px-6">
              <button 
                onClick={() => setIsOpen(false)}
                className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="container mx-auto px-6 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {/* About */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1E1E1E] mb-4">About FlexaDigital</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    We are a full-service digital agency specializing in web development, mobile apps, UI/UX design, and digital marketing solutions.
                  </p>
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

                {/* Navigation */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1E1E1E] mb-4">Navigation</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-gray-500 text-sm hover:text-[#2592EB] transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="#about" className="text-gray-500 text-sm hover:text-[#2592EB] transition-colors">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="#services" className="text-gray-500 text-sm hover:text-[#2592EB] transition-colors">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="#portfolio" className="text-gray-500 text-sm hover:text-[#2592EB] transition-colors">
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link href="#tech-stack" className="text-gray-500 text-sm hover:text-[#2592EB] transition-colors">
                        Tech Stack
                      </Link>
                    </li>
                    <li>
                      <Link href="#contact" className="text-gray-500 text-sm hover:text-[#2592EB] transition-colors">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1E1E1E] mb-4">Services</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-gray-500 text-sm hover:text-[#2592EB] transition-colors">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-500 text-sm hover:text-[#2592EB] transition-colors">
                        Mobile Apps
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-500 text-sm hover:text-[#2592EB] transition-colors">
                        UI/UX Design
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-500 text-sm hover:text-[#2592EB] transition-colors">
                        SEO Optimization
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-500 text-sm hover:text-[#2592EB] transition-colors">
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-500 text-sm hover:text-[#2592EB] transition-colors">
                        Cloud Solutions
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Newsletter */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1E1E1E] mb-4">Newsletter</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Subscribe to our newsletter to receive updates on the latest digital trends.
                  </p>
                  <form onSubmit={handleSubmit} className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="px-4 py-2.5 rounded-l-full w-full text-gray-600 focus:outline-none border border-gray-200 text-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-[#2592EB] text-white px-4 py-2.5 rounded-r-full hover:bg-[#145693] transition-all text-sm"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-500 text-xs mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} FlexaDigital. All rights reserved.
                  </p>
                  <div className="flex space-x-6">
                    <Link href="#" className="text-gray-500 hover:text-[#2592EB] text-xs">
                      Privacy Policy
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-[#2592EB] text-xs">
                      Terms of Service
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-[#2592EB] text-xs">
                      Cookie Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}