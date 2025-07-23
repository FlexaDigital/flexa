import ServiceLayout from '../../components/ServiceLayout';

export default function CustomSoftwarePage() {
  return (
    <ServiceLayout
      title="Custom Software Development"
      description="We build cloud-based ERP, CRM, inventory, HR, and finance systems tailored to your operations, helping businesses streamline processes and increase efficiency."
      techStack={['React', 'Node.js', 'AWS', 'PostgreSQL', 'Strapi']}
      features={[
        {
          title: 'Tailored Solutions',
          description: 'Custom software designed specifically for your business processes and requirements.'
        },
        {
          title: 'Role-Based Access',
          description: 'Secure user management with customized permissions and access controls.'
        },
        {
          title: 'Data Visualization',
          description: 'Interactive dashboards and reports that make complex data easy to understand and act upon.'
        },
        {
          title: 'API Integrations',
          description: 'Seamless connections with your existing tools and third-party services.'
        },
        {
          title: 'Scalable Architecture',
          description: 'Systems designed to grow with your business without performance degradation.'
        },
        {
          title: 'Ongoing Support',
          description: 'Maintenance, updates, and technical assistance to ensure your software runs smoothly.'
        }
      ]}
      types={[
        'ERP Systems',
        'CRM Solutions',
        'Inventory Management',
        'HR Management Systems',
        'Financial Software',
        'Workflow Automation Tools'
      ]}
      imagePath="/custom-software.jpg"
    />
  );
}