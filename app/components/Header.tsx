'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
      <Image src="/flexadigital.png" alt="Logo" width={160} height={70} className="h-10 w-auto" />

        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/" className="text-gray-600 hover:text-[#2592EB] text-sm font-medium transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-[#2592EB] text-sm font-medium transition-colors">
            About
          </Link>
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            ref={servicesRef}
          >
            <Link href="/services" className="text-gray-600 hover:text-[#2592EB] text-sm font-medium transition-colors flex items-center">
              Services
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            
            {/* Services Dropdown */}
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-50 dropdown-fade-in">
                <Link href="/services/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#2592EB]">
                  Web Development
                </Link>
                <Link href="/services/ecommerce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#2592EB]">
                  E-Commerce Development
                </Link>
                <Link href="/services/seo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#2592EB]">
                  SEO Optimization
                </Link>
                <Link href="/services/app-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#2592EB]">
                  App Development
                </Link>
                <Link href="/services/digital-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#2592EB]">
                  Digital Marketing
                </Link>
                <Link href="/services/custom-software" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#2592EB]">
                  Custom Software Development
                </Link>
              </div>
            )}
          </div>
          <Link href="/portfolio" className="text-gray-600 hover:text-[#2592EB] text-sm font-medium transition-colors">
            Portfolio
          </Link>
          <Link href="/tech-stack" className="text-gray-600 hover:text-[#2592EB] text-sm font-medium transition-colors">
            Tech Stack
          </Link>
          <Link href="/tech-talks" className="text-gray-600 hover:text-[#2592EB] text-sm font-medium transition-colors">
            Tech Talks
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-[#2592EB] text-sm font-medium transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          {/* Removed Let's Talk button */}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-5">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-[#2592EB] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-[#2592EB] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="space-y-2">
              <Link 
                href="/services" 
                className="text-gray-600 hover:text-[#2592EB] font-medium transition-colors block"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <div className="pl-4 space-y-2 border-l-2 border-gray-100">
                <Link href="/services/web-development" className="block text-sm text-gray-500 hover:text-[#2592EB]" onClick={() => setIsMenuOpen(false)}>
                  Web Development
                </Link>
                <Link href="/services/ecommerce" className="block text-sm text-gray-500 hover:text-[#2592EB]" onClick={() => setIsMenuOpen(false)}>
                  E-Commerce Development
                </Link>
                <Link href="/services/seo" className="block text-sm text-gray-500 hover:text-[#2592EB]" onClick={() => setIsMenuOpen(false)}>
                  SEO Optimization
                </Link>
                <Link href="/services/app-development" className="block text-sm text-gray-500 hover:text-[#2592EB]" onClick={() => setIsMenuOpen(false)}>
                  App Development
                </Link>
                <Link href="/services/digital-marketing" className="block text-sm text-gray-500 hover:text-[#2592EB]" onClick={() => setIsMenuOpen(false)}>
                  Digital Marketing
                </Link>
                <Link href="/services/custom-software" className="block text-sm text-gray-500 hover:text-[#2592EB]" onClick={() => setIsMenuOpen(false)}>
                  Custom Software Development
                </Link>
              </div>
            </div>
            <Link 
              href="/portfolio" 
              className="text-gray-600 hover:text-[#2592EB] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="/tech-stack" 
              className="text-gray-600 hover:text-[#2592EB] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tech Stack
            </Link>
            <Link 
              href="/tech-talks" 
              className="text-gray-600 hover:text-[#2592EB] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tech Talks
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-[#2592EB] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {/* Removed Let's Talk button */}
          </div>
        </div>
      )}
    </header>
  );
}