import ServiceLayout from '../../components/ServiceLayout';

export default function DigitalMarketingPage() {
  return (
    <ServiceLayout
      title="Digital Marketing"
      description="End-to-end campaigns to grow visibility and sales via social media, email, PPC, and content marketing strategies tailored to your business goals."
      techStack={['Social Media Marketing', 'Email Campaigns', 'PPC Advertising', 'Content Marketing', 'Analytics']}
      features={[
        {
          title: 'Social Media Management',
          description: 'Strategic content creation and community management across relevant social platforms.'
        },
        {
          title: 'Paid Advertising',
          description: 'Targeted ad campaigns on Google, Facebook, Instagram, and LinkedIn to reach your ideal customers.'
        },
        {
          title: 'Email Marketing',
          description: 'Engaging email campaigns that nurture leads and drive conversions with personalized content.'
        },
        {
          title: 'Content Strategy',
          description: 'Creating valuable content that attracts, engages, and converts your target audience.'
        },
        {
          title: 'Performance Tracking',
          description: 'Comprehensive analytics and reporting to measure ROI and optimize campaign performance.'
        },
        {
          title: 'Conversion Optimization',
          description: 'Improving landing pages and user journeys to increase conversion rates and reduce acquisition costs.'
        }
      ]}
      tools={[
        'Meta Business Suite',
        'Google Ads',
        'Google Analytics',
        'Mailchimp',
        'Buffer'
      ]}
      imagePath="/digital-marketing.jpg"
    />
  );
}