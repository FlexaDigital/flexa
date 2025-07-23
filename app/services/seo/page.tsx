import ServiceLayout from '../../components/ServiceLayout';

export default function SEOPage() {
  return (
    <ServiceLayout
      title="SEO Optimization"
      description="We optimize websites for search engines to drive organic traffic, improve site performance, and boost keyword ranking."
      longDescription="Our comprehensive SEO services help businesses improve their online visibility, attract qualified traffic, and achieve higher rankings in search engine results. We combine technical expertise, content optimization, and data-driven strategies to deliver sustainable organic growth that converts visitors into customers."
      techStack={['Schema Markup', 'Core Web Vitals', 'Structured Data', 'XML Sitemaps', 'Canonical Tags', 'Mobile Optimization', 'JavaScript SEO']}
      features={[
        {
          title: 'Technical SEO Audit',
          description: 'Comprehensive analysis of your website\'s technical foundation, identifying and fixing issues that prevent search engines from properly crawling and indexing your site.',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>'
        },
        {
          title: 'On-Page Optimization',
          description: 'Strategic optimization of content, meta tags, headings, and internal linking structure to improve relevance and search visibility for targeted keywords.',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>'
        },
        {
          title: 'Schema & Structured Data',
          description: 'Implementation of schema markup to help search engines better understand your content and display rich results that stand out in search listings.',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>'
        },
        {
          title: 'Content Strategy',
          description: 'Data-driven content planning that targets high-value keywords and addresses user intent, creating engaging content that attracts and converts your target audience.',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>'
        },
        {
          title: 'Performance Optimization',
          description: 'Enhancement of page speed and Core Web Vitals metrics to improve user experience and search rankings, with a focus on mobile performance.',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
        },
        {
          title: 'Analytics & Reporting',
          description: 'Comprehensive tracking of keyword positions, traffic, and conversions with regular detailed reports that demonstrate ROI and guide strategy refinement.',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
        }
      ]}
      tools={[
        'Google Search Console',
        'Google Analytics 4',
        'SEMrush',
        'Ahrefs',
        'Screaming Frog',
        'GTmetrix',
        'PageSpeed Insights',
        'Moz Pro'
      ]}
      benefits={[
        'Increased organic traffic from qualified visitors',
        'Higher visibility in search engine results',
        'Improved website user experience and engagement',
        'Better conversion rates from organic traffic',
        'Long-term sustainable results with ongoing optimization',
        'Competitive advantage in your industry',
        'Reduced dependency on paid advertising'
      ]}
      faqs={[
        {
          question: 'How long does it take to see results from SEO?',
          answer: 'SEO is a long-term strategy that typically shows initial improvements within 3-6 months. However, significant results for competitive keywords may take 6-12 months. We provide monthly progress reports to track improvements in rankings, traffic, and conversions.'
        },
        {
          question: 'What makes your SEO services different from others?',
          answer: 'We focus on sustainable, white-hat SEO techniques that comply with search engine guidelines. Our approach combines technical expertise, quality content creation, and data-driven strategy tailored specifically to your business goals and target audience.'
        },
        {
          question: 'Do you guarantee first-page rankings?',
          answer: 'We don\'t make guarantees about specific rankings as search algorithms constantly evolve and are influenced by many factors. However, we have a proven track record of significantly improving rankings and organic traffic for our clients through our comprehensive approach.'
        },
        {
          question: 'What does your SEO process look like?',
          answer: 'Our process begins with a comprehensive audit of your website and competitive landscape. We then develop a customized strategy addressing technical issues, on-page optimization, content development, and off-page factors. Implementation is followed by continuous monitoring and refinement based on performance data.'
        },
        {
          question: 'How do you measure SEO success?',
          answer: 'We track multiple metrics including keyword rankings, organic traffic growth, user engagement metrics, conversion rates, and return on investment. Our regular reports provide transparent insights into these key performance indicators.'
        }
      ]}
      imagePath="/seo.jpg"
    />
  );
}