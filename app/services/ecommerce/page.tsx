import ServiceLayout from '../../components/ServiceLayout';

export default function EcommercePage() {
  return (
    <ServiceLayout
      title="E-Commerce Development"
      description="We build scalable online stores with smooth checkout, payment gateways, and real-time inventory sync to help businesses sell products and services online."
      techStack={['React', 'Node.js', 'Stripe/Razorpay', 'MongoDB', 'Headless CMS (Strapi)']}
      features={[
        {
          title: 'Seamless Checkout',
          description: 'Streamlined checkout process designed to maximize conversions and minimize cart abandonment.'
        },
        {
          title: 'Payment Integration',
          description: 'Support for multiple payment gateways including credit cards, digital wallets, and local payment methods.'
        },
        {
          title: 'Inventory Management',
          description: 'Real-time inventory tracking and management to prevent overselling and stockouts.'
        },
        {
          title: 'Product Catalog',
          description: 'Flexible product organization with categories, filters, and search functionality.'
        },
        {
          title: 'Mobile Optimization',
          description: 'Mobile-first design ensuring a great shopping experience on smartphones and tablets.'
        },
        {
          title: 'Analytics & Reporting',
          description: 'Detailed insights into sales, customer behavior, and inventory performance.'
        }
      ]}
      types={[
        'Custom e-commerce platforms',
        'Headless Shopify implementations',
        'WooCommerce integrations',
        'B2B e-commerce solutions',
        'Subscription-based stores',
        'Marketplace platforms'
      ]}
      imagePath="/ecommerce.jpg"
    />
  );
}