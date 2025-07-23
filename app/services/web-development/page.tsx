import ServiceLayout from '../../components/ServiceLayout';

export default function WebDevelopmentPage() {
  return (
    <ServiceLayout
      title="Web Development"
      description="We develop static and dynamic websites for businesses across industries, focusing on performance, user experience, and modern design principles."
      techStack={['Next.js', 'Tailwind CSS', 'Node.js', 'Netlify', 'Strapi']}
      features={[
        {
          title: 'Responsive Design',
          description: 'Websites that look and function perfectly on all devices, from desktops to smartphones.'
        },
        {
          title: 'Performance Optimization',
          description: 'Fast-loading pages with optimized assets and efficient code for better user experience and SEO.'
        },
        {
          title: 'SEO-Friendly Structure',
          description: 'Built with search engines in mind, helping your site rank higher in search results.'
        },
        {
          title: 'Content Management',
          description: 'Easy-to-use CMS integration allowing you to update content without technical knowledge.'
        },
        {
          title: 'Custom Functionality',
          description: 'Tailored features and integrations specific to your business needs and goals.'
        },
        {
          title: 'Ongoing Support',
          description: 'Maintenance, updates, and technical support to keep your website running smoothly.'
        }
      ]}
      types={[
        'Company websites',
        'Portfolio sites',
        'Landing pages',
        'Blog-integrated CMS',
        'Multi-language sites',
        'Progressive Web Apps'
      ]}
      imagePath="/web-development.jpg"
    />
  );
}