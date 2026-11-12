import {
  Zap,
  BarChart3,
  Users,
  ShieldCheck,
  Plug,
  Headset,
  Check,
  Star,
  type LucideIcon,
} from 'lucide-react';

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
] as const;

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Zap,
    title: 'AI Automation',
    description:
      'Automate repetitive workflows with intelligent agents that learn from your team and handle tasks around the clock.',
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description:
      'Get real-time insights with predictive dashboards that surface trends, anomalies, and opportunities before anyone else.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Sync seamlessly with shared workspaces, live cursors, and AI-summarized threads that keep everyone aligned.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    description:
      'SOC 2 Type II, end-to-end encryption, and granular access controls keep your data locked down at every layer.',
  },
  {
    icon: Plug,
    title: 'Integrations',
    description:
      'Connect 200+ tools in one click — Slack, Notion, GitHub, Linear, Figma, and your entire stack, unified.',
  },
  {
    icon: Headset,
    title: '24/7 Support',
    description:
      'Reach a real human any time, anywhere. Average first response under 2 minutes, backed by an AI help center.',
  },
];

export interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Everything you need to explore the platform and ship your first AI workflow.',
    features: [
      'Up to 3 team members',
      '100 AI actions / month',
      'Basic analytics dashboard',
      '5 integrations',
      'Community support',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For growing teams that need advanced automation, deeper analytics, and priority support.',
    features: [
      'Up to 20 team members',
      'Unlimited AI actions',
      'Advanced predictive analytics',
      'Unlimited integrations',
      'Priority email & chat support',
      'Custom AI model training',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'per month',
    description: 'Unlimited scale with dedicated infrastructure, SSO, and a solutions engineering team.',
    features: [
      'Unlimited team members',
      'Dedicated GPU infrastructure',
      'SSO / SAML & SCIM provisioning',
      'Custom retention & DPA',
      '24/7 phone + Slack support',
      'Dedicated solutions engineer',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    company: 'Flowbase',
    avatar: 'https://images.pexels.com/photos/25651531/pexels-photo-25651531.jpeg?auto=compress&cs=tinysrgb&h=256&w=256',
    quote:
      'Nexora AI replaced an entire ops layer for us. We cut manual reporting by 80% in the first month and our team finally focuses on work that matters.',
  },
  {
    name: 'Marcus Reid',
    role: 'VP of Engineering',
    company: 'Lumen Labs',
    avatar: 'https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&h=256&w=256',
    quote:
      'The smart analytics alone paid for the plan. It flagged a regression two days before our on-call caught it. The integrations took minutes, not weeks.',
  },
  {
    name: 'Amara Okafor',
    role: 'Head of Product',
    company: 'Northwind',
    avatar: 'https://images.pexels.com/photos/8312669/pexels-photo-8312669.jpeg?auto=compress&cs=tinysrgb&h=256&w=256',
    quote:
      'Collaboration is effortless now. AI-summarized threads mean nobody misses context, and onboarding new PMs went from weeks to a single afternoon.',
  },
];

export const trustedLogos = ['Google', 'Microsoft', 'Amazon', 'Netflix', 'Spotify'] as const;

export const stats = [
  { value: '10,000+', label: 'Active Users' },
  { value: '4.9', label: 'Average Rating' },
  { value: '99.9%', label: 'Uptime SLA' },
] as const;

export { Check, Star };
