'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <div className="container mx-auto px-6 h-full flex items-center justify-center">
      <div className="bg-[#1677FF]/5 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden w-full">
        <div className="absolute w-64 h-64 bg-[#1677FF]/10 rounded-full -top-20 -right-20"></div>
        <div className="absolute w-64 h-64 bg-[#1677FF]/10 rounded-full -bottom-20 -left-20"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E1E1E]">Ready to Start Your Next Project?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 font-light">
            Let's collaborate to bring your ideas to life with innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#contact" 
              className="bg-[#1677FF] text-white px-8 py-3.5 rounded-full hover:bg-blue-600 transition-all font-medium text-sm"
            >
              Schedule a Free Consultation
            </Link>
            <Link 
              href="#portfolio" 
              className="bg-white border border-gray-200 text-gray-700 px-8 py-3.5 rounded-full hover:border-[#1677FF] hover:text-[#1677FF] transition-all font-medium text-sm"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}