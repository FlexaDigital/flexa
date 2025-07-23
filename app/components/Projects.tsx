'use client';

import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "bg-gradient-to-br from-blue-100 to-blue-200"
    },
    {
      title: "Health & Fitness App",
      category: "Mobile Development",
      image: "bg-gradient-to-br from-green-100 to-green-200"
    },
    {
      title: "Financial Dashboard",
      category: "UI/UX Design",
      image: "bg-gradient-to-br from-purple-100 to-purple-200"
    }
  ];

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-3">Featured Projects</h2>
        <p className="text-gray-500 max-w-2xl mx-auto font-light">
          Take a look at some of our recent projects that showcase our expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all"
          >
            {/* Project Image (placeholder) */}
            <div className={`${project.image} h-56 relative`}>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all flex items-center justify-center">
                <Link 
                  href="#" 
                  className="bg-[#1677FF] text-white px-6 py-2.5 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0"
                >
                  View Project
                </Link>
              </div>
            </div>
            <div className="p-6 bg-white">
              <span className="text-xs text-[#1677FF] font-medium uppercase tracking-wider">{project.category}</span>
              <h3 className="text-lg font-semibold text-[#1E1E1E] mt-1">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link 
          href="#" 
          className="border border-gray-200 text-gray-700 px-8 py-3 rounded-full hover:border-[#1677FF] hover:text-[#1677FF] transition-all font-medium inline-block text-sm"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}