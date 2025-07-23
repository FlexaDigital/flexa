import ServiceLayout from '../../components/ServiceLayout';

export default function AppDevelopmentPage() {
  return (
    <ServiceLayout
      title="App Development"
      description="We build high-performance mobile and web applications tailored to your business logic, focusing on user experience, performance, and scalability."
      techStack={['React Native', 'Node.js', 'Express', 'Firebase', 'AWS']}
      features={[
        {
          title: 'Cross-Platform Development',
          description: 'Build once and deploy to both iOS and Android, saving time and development costs.'
        },
        {
          title: 'Native Performance',
          description: 'Apps that feel native with smooth animations and responsive interfaces.'
        },
        {
          title: 'Offline Functionality',
          description: 'Data caching and synchronization for apps that work even without an internet connection.'
        },
        {
          title: 'API Integration',
          description: 'Seamless connection with third-party services and your existing systems.'
        },
        {
          title: 'Push Notifications',
          description: 'Engage users with timely and relevant notifications to drive app engagement.'
        },
        {
          title: 'Analytics & Monitoring',
          description: 'Track user behavior and app performance to make data-driven improvements.'
        }
      ]}
      types={[
        'Android apps',
        'iOS apps',
        'Progressive Web Apps (PWAs)',
        'Dashboard-integrated mobile apps',
        'Enterprise applications',
        'IoT companion apps'
      ]}
      imagePath="/app-development.jpg"
    />
  );
}