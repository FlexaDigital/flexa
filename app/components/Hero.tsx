'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="container mx-auto px-6 h-full flex items-center">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 w-full">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E1E1E] leading-tight tracking-tight">
            Building <span className="text-[#2592EB]">Smart Digital</span> Solutions
          </h1>
          <p className="text-lg text-gray-500 max-w-lg font-light">
            We transform your ideas into exceptional digital experiences with cutting-edge technology and minimalist design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link 
              href="#contact" 
              className="bg-[#2592EB] text-white px-8 py-3.5 rounded-full hover:bg-[#145693] transition-all font-medium text-center text-sm"
            >
              Get a Free Quote
            </Link>
            <Link 
              href="#portfolio" 
              className="border border-gray-200 text-gray-700 px-8 py-3.5 rounded-full hover:border-[#2592EB] hover:text-[#2592EB] transition-all font-medium text-center text-sm"
            >
              See Our Work
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg aspect-square">
            {/* Modern minimal illustration */}
            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl flex items-center justify-center overflow-hidden">
              <div className="absolute w-64 h-64 bg-[#2592EB]/10 rounded-full -top-10 -right-10"></div>
              <div className="absolute w-48 h-48 bg-[#2592EB]/5 rounded-full -bottom-10 -left-10"></div>
              <div className="relative z-10 p-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2592EB" className="w-32 h-32">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}