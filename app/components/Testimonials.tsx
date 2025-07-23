'use client';

export default function Testimonials() {
  const testimonials = [
    {
      content: "FlexaDigital transformed our online presence with a stunning website that perfectly captures our brand identity.",
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      avatar: "SJ"
    },
    {
      content: "Working with FlexaDigital was a game-changer for our business. Their mobile app development expertise helped us reach new customers.",
      name: "Michael Chen",
      role: "Founder, GrowthLabs",
      avatar: "MC"
    },
    {
      content: "The SEO strategy implemented by FlexaDigital increased our organic traffic by 200% in just three months.",
      name: "Emma Rodriguez",
      role: "Marketing Director, EcoSolutions",
      avatar: "ER"
    },
    {
      content: "FlexaDigital's UI/UX design work completely transformed our user experience. Our customer satisfaction scores have improved significantly.",
      name: "David Wilson",
      role: "Product Manager, FinTech Innovations",
      avatar: "DW"
    }
  ];

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-3">What Our Clients Say</h2>
        <p className="text-gray-500 max-w-2xl mx-auto font-light">
          Don't just take our word for it. Here's what our clients have to say.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-100 transition-all flex flex-col"
          >
            <div className="mb-4">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.667 13.333H5.33366C5.33366 8 10.667 8 10.667 8C10.667 5.333 8.00033 2.667 5.33366 5.333C2.66699 8 2.66699 13.333 2.66699 13.333H5.33366C5.33366 16 2.66699 16 2.66699 16V21.333H10.667V16C10.667 16 10.667 13.333 10.667 13.333Z" fill="#1677FF" fillOpacity="0.1" stroke="#1677FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24.0003 13.333H18.667C18.667 8 24.0003 8 24.0003 8C24.0003 5.333 21.3337 2.667 18.667 5.333C16.0003 8 16.0003 13.333 16.0003 13.333H18.667C18.667 16 16.0003 16 16.0003 16V21.333H24.0003V16C24.0003 16 24.0003 13.333 24.0003 13.333Z" fill="#1677FF" fillOpacity="0.1" stroke="#1677FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-gray-600 text-sm mb-6 flex-grow">{testimonial.content}</p>
            <div className="flex items-center">
              <div className="bg-blue-50 text-[#1677FF] font-medium text-xs w-8 h-8 rounded-full flex items-center justify-center mr-3">
                {testimonial.avatar}
              </div>
              <div>
                <h4 className="font-medium text-sm text-[#1E1E1E]">{testimonial.name}</h4>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}