import { First, Second, Third, Fourth, Fifth } from '@/icons/ApproachIcons';

export const NAV_ITEMS = [
  {
    title: 'Main',
    href: 'main',
  },
  {
    title: 'About',
    href: 'about',
  },
  {
    title: 'Services',
    href: 'services',
  },
  {
    title: 'Approach',
    href: 'approach',
  },
  {
    title: 'Contact',
    href: 'contact',
  },
];

export const CARDS = [
  {
    title: 'Custom Voice Agents',
    description:
      'Deploy intelligent, human-like AI voice agents capable of handling complex customer service queries, lead generation, and workflow automation efficiently and professionally.',
    services: [
      ['AI Voice Chatbots', 'Workflow Automation'],
      ['Lead Generation', 'Custom Integration'],
    ],
    number: '01.',
    classes: '',
  },
  {
    title: 'WebSites Development Services',
    description:
      'Build robust, fast, and elegantly designed websites tailored for your specific business needs. We blend beautiful aesthetics with modern technologies to deliver high-performance solutions.',
    services: [
      ['UI/UX Design', 'Full-Stack Apps'],
      ['Landing Pages', 'E-commerce'],
    ],
    number: '02.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'CRM & ERP System Management',
    description:
      'Streamline your business operations through specialized CRM and ERP management services, ensuring your data pipelines, sales funnels, and enterprise resource planning software run synchronously and autonomously.',
    services: [
      ['System Audits', 'Sales Tracking'],
      ['ERP Integration', 'Automation'],
    ],
    number: '03.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'Webdata Management Panels',
    description:
      'Establish sophisticated data management panels and dashboards to oversee analytics and operations comprehensively from one unified hub.',
    services: [
      ['Dashboard UI', 'Data Pipelines'],
      ['Analytics Tools', 'Data Scraping'],
    ],
    number: '04.',
    classes: 'border-t border-gray-1/50',
  },
];

export const APPROACH_CARDS = [
  {
    icon: First,
    title: 'Strategic Consultation',
    description:
      'We begin by deeply analyzing your business workflows and objectives. Our experts listen to your vision to architect a roadmap that ensures technical feasibility and high ROI.',
  },
  {
    icon: Second,
    title: 'Architectural Blueprint',
    description:
      'Following strategy, we develop comprehensive designs and system architectures. We conduct intensive reviews with your stakeholders to ensure the solution aligns perfectly with your goals.',
  },
  {
    icon: Third,
    title: 'Precision Development',
    description: 'Our elite engineering team proceeds to build your autonomous systems or platforms, focusing on scalability, security, and peak performance using modern technology stacks.',
  },
  {
    icon: Fourth,
    title: 'Rigorous Optimization',
    description:
      'Execution is followed by multi-layered testing. We Stress-test every component for reliability before initiating user-acceptance cycles to ensure a flawless deployment.',
  },
  {
    icon: Fifth,
    title: 'Scale & Maintenance',
    description:
      'Deployment is just the beginning. We provide ongoing management and scaling support to ensure your AI agents and data panels grow alongside your shifting business demands.',
  },
];

export const RADIO_FIELDS = [
  {
    title: 'Desired Service Domain',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Custom AI Voice Agents', value: 'voice-agents' },
      { name: 'Enterprise Web Development', value: 'web-dev' },
      { name: 'CRM & ERP Management', value: 'crm-erp' },
      { name: 'Data Management Panels', value: 'data-panels' },
      { name: 'Full Digital Transformation', value: 'full-transform' },
    ],
    formKey: '_service',
  },
  {
    title: 'Project Investment Scale',
    classes: '',
    radioArray: [
      { name: '$5,000 - $15,000', value: '5-15' },
      { name: '$15,000 - $40,000', value: '15-40' },
      { name: '$40,000 - $80,000', value: '40-80' },
      { name: '$100,000+', value: '100+' },
    ],
    formKey: '_budget',
  },
  {
    title: 'Infrastructure Complexity',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Streamlined (MVPs)', value: 'simple' },
      { name: 'Standard Enterprise', value: 'standard' },
      { name: 'High-Scale Distribution', value: 'complex' },
      { name: 'Custom Architecture', value: 'custom' },
    ],
    formKey: '_pages',
  },
  {
    title: 'Deployment Urgency',
    classes: '',
    radioArray: [
      { name: 'Accelerated (High Priority)', value: 'max-fast' },
      { name: 'Standard (8-12 Weeks)', value: 'regular' },
      { name: 'Strategic (Ongoing)', value: 'strategic' },
    ],
    formKey: '_quickness',
  },
];

export const INPUT_FIELDS = [
  { label: 'Your name', name: 'first', classes: 'inline-block !w-[calc(50%-2vw)] mr-[4vw]', required: true },
  { label: 'Phone', name: 'phone', classes: 'inline-block !w-[calc(50%-2vw)]', type: 'number', required: true },
  { label: 'Email', name: 'email', classes: '', type: 'email' },
  { label: 'Company name', name: 'company', classes: '', required: true },
  { label: 'Company website', name: 'websiteUrl', classes: '' },
];

export const BOOK_FORM_DEFAULT_STATE = {
  _service: null,
  _budget: null,
  _pages: null,
  _quickness: null,

  first: '',
  phone: '',
  email: '',
  company: '',
  websiteUrl: '',
  message: '',
};
