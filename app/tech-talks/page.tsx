import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: What to Expect in 2024',
    excerpt: 'Explore the upcoming trends and technologies that will shape the web development landscape in 2024 and beyond.',
    category: 'Web Development',
    date: 'May 15, 2023',
    author: 'Rahul Sharma',
    image: '/blog-web-dev.jpg',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'How AI is Transforming Digital Marketing Strategies',
    excerpt: 'Discover how artificial intelligence is revolutionizing digital marketing campaigns and helping businesses achieve better ROI.',
    category: 'Digital Marketing',
    date: 'April 28, 2023',
    author: 'Priya Patel',
    image: '/blog-ai-marketing.jpg',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'E-Commerce Optimization: Boosting Conversion Rates',
    excerpt: 'Learn practical strategies to optimize your e-commerce store and significantly improve conversion rates.',
    category: 'E-Commerce',
    date: 'April 10, 2023',
    author: 'Amit Desai',
    image: '/blog-ecommerce.jpg',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Mobile App Development: Native vs. Cross-Platform',
    excerpt: 'A comprehensive comparison of native and cross-platform approaches to mobile app development.',
    category: 'App Development',
    date: 'March 22, 2023',
    author: 'Neha Gupta',
    image: '/blog-mobile-app.jpg',
    readTime: '8 min read'
  },
  {
    id: 5,
    title: 'SEO in 2023: What Really Works Now',
    excerpt: 'An updated guide on the most effective SEO strategies that are delivering results in the current digital landscape.',
    category: 'SEO',
    date: 'March 5, 2023',
    author: 'Vikram Singh',
    image: '/blog-seo.jpg',
    readTime: '6 min read'
  },
  {
    id: 6,
    title: 'Building Scalable Software Architecture',
    excerpt: 'Best practices for designing software architecture that can scale efficiently as your business grows.',
    category: 'Software Development',
    date: 'February 18, 2023',
    author: 'Ananya Mehta',
    image: '/blog-software-arch.jpg',
    readTime: '9 min read'
  }
];

// Categories for filtering
const categories = [
  'All',
  'Web Development',
  'Digital Marketing',
  'E-Commerce',
  'App Development',
  'SEO',
  'Software Development'
];

export default function TechTalksPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-6">
                Tech Talks
              </h1>
              <p className="text-gray-600 text-lg">
                Insights, tutorials, and industry updates from our team of experts.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-[#F5F9FF] rounded-xl overflow-hidden shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative aspect-video md:aspect-auto">
                    <Image
                      src="/blog-featured.jpg"
                      alt="Featured blog post"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-[#2592EB] text-sm font-medium mb-2">Featured Article</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-4">
                      The Complete Guide to Modern Web Development in 2023
                    </h2>
                    <p className="text-gray-600 mb-6">
                      A comprehensive overview of the latest technologies, frameworks, and best practices for building modern web applications in 2023.
                    </p>
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                      <div>
                        <p className="text-[#1E1E1E] font-medium">Rajesh Kumar</p>
                        <p className="text-gray-500 text-sm">June 1, 2023 • 12 min read</p>
                      </div>
                    </div>
                    <Link 
                      href="/tech-talks/modern-web-development-guide" 
                      className="bg-[#2592EB] text-white px-6 py-3 rounded-lg hover:bg-[#145693] transition-all text-sm font-medium inline-flex items-center self-start"
                    >
                      <span>Read Article</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
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

        {/* Blog Posts Grid */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <Link href={`/tech-talks/${post.id}`} key={post.id} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-[#2592EB]/90 text-white text-xs font-medium py-1 px-2 rounded">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-semibold mb-3 text-[#1E1E1E] group-hover:text-[#2592EB] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pagination */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-[#2592EB] text-white">1</button>
                  <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">2</button>
                  <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">3</button>
                  <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-[#F5F9FF]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-8">
                Get the latest articles, tutorials, and updates delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#2592EB] focus:border-[#2592EB]"
                />
                <button
                  type="submit"
                  className="bg-[#2592EB] text-white px-6 py-3 rounded-lg hover:bg-[#145693] transition-all text-sm font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}