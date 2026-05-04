import {
  FeaturesType,
  LogosTypeProps,
  NavbarProps,
  StatsTypeProps,
} from "@/types";
import {
  Code,
  Database,
  Rocket,
  Settings,
  Smartphone,
  Zap,
  DollarSign,
  Shield,
} from "lucide-react";

export const navItems: NavbarProps = {
  logo: {
    url: "/",
    src: "/logo.png", // Replace with your actual logo path
    alt: "Clow Logo",
    title: "Clow",
  },
  menu: [
    { title: "Home", url: "/" },
    {
      title: "Services",
      url: "/services",
      items: [
        {
          title: "Web & Mobile Apps",
          description: "Build scalable apps with Bubble or FlutterFlow.",
          icon: <Smartphone className="size-5 shrink-0" />,
          url: "/services/web-mobile-apps",
        },
        {
          title: "Automation",
          description: "Streamline workflows with n8n or Zapier.",
          icon: <Settings className="size-5 shrink-0" />,
          url: "/services/automation",
        },
        {
          title: "Database & CMS",
          description: "Organize data with Pocketbase or ERPNext.",
          icon: <Database className="size-5 shrink-0" />,
          url: "/services/database-cms",
        },
        {
          title: "MVP Prototyping",
          description: "Launch MVPs in 3–4 weeks.",
          icon: <Rocket className="size-5 shrink-0" />,
          url: "/services/mvp-prototyping",
        },
        {
          title: "On-Demand Expertise",
          description: "Flexible support for no/low-code tools.",
          icon: <Code className="size-5 shrink-0" />,
          url: "/services/on-demand-expertise",
        },
      ],
    },
    { title: "Why Us", url: "/why-us" },
    { title: "Contact", url: "/contact" },
  ],
  auth: {
    book: { title: "Book a call", url: "https://cal.com/clow-nms1gw/30min" },
    quote: { title: "Get a quote", url: "/contact" },
  },
};

export const logos: LogosTypeProps = {
  heading: "Powered by Industry-Leading Tools",
  logos: [
    {
      id: "logo-1",
      description: "Bubble",
      image: "/brand-logos/bubble.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Frappe",
      image: "/brand-logos/frappe.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Next.js",
      image: "/brand-logos/nextjs.png",
      className: "h-2 w-auto",
    },
    {
      id: "logo-4",
      description: "n8n",
      image: "/brand-logos/n8n.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "Pocketbase",
      image: "/brand-logos/pocketbase.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Budibase",
      image: "/brand-logos/budibase.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Framer",
      image: "/brand-logos/framer.png",
      className: "h-4 w-auto",
    },
    {
      id: "logo-8",
      description: "Zapier",
      image: "/brand-logos/zapier.png",
      className: "h-7 w-auto",
    },
  ],
};

export const stats: StatsTypeProps = {
  heading: "Proven Results for Startups & SaaS Teams",
  description: "Delivering speed, savings, and scalability with low-code solutions.",
  link: {
    text: "See Our Case Studies",
    url: "/case-studies", // Replace with actual case study page if available
  },
  stats: [
    {
      id: "stat-1",
      value: "4 Weeks",
      label: "to launch market-ready MVPs",
    },
    {
      id: "stat-2",
      value: "$50k+",
      label: "saved per project vs. traditional agencies",
    },
    {
      id: "stat-3",
      value: "10+",
      label: "no/low-code platforms mastered",
    },
    {
      id: "stat-4",
      value: "100%",
      label: "client ownership of code & data",
    },
  ],
};

export const features: FeaturesType = {
  badge: "Clow - No-Code & Low-Code Solutions",
  heading: "Build Smarter, Launch Faster",
  description:
    "Leverage low-code and open-source tools to create scalable solutions tailored for startups and SaaS teams.",
  tabs: [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Rapid Development",
      content: {
        badge: "Speed to Market",
        title: "Launch MVPs in Weeks, Not Months",
        description:
          "Use Bubble, FlutterFlow, or Plasmic to build web and mobile apps 3x faster, with custom code for complex features.",
        buttonText: "Contact Us",
        imageSrc: "/hero/launch-mvp-tab1.png", // Replace with app screenshot
        imageAlt: "Web and mobile app development",
      },
    },
    {
      value: "tab-2",
      icon: <DollarSign className="h-auto w-4 shrink-0" />,
      label: "Cost Efficiency",
      content: {
        badge: "Affordable Solutions",
        title: "Save Thousands with Low-Code",
        description:
          "Build enterprise-grade apps and automations at $25/hour, using open-source tools to eliminate SaaS fees.",
        buttonText: "Contact Us",
        imageSrc: "/hero/low-code-tab2.png", // Replace with automation workflow image
        imageAlt: "Cost-efficient development",
      },
    },
    {
      value: "tab-3",
      icon: <Shield className="h-auto w-4 shrink-0" />,
      label: "Full Ownership",
      content: {
        badge: "Vendor Independence",
        title: "Own Your Code and Data",
        description:
          "Deploy on your AWS or Google Cloud with tools like Pocketbase and n8n, ensuring no vendor lock-in.",
        buttonText: "Contact Us",
        imageSrc: "/hero/own-code-tab3.png", // Replace with cloud hosting image
        imageAlt: "Self-hosted solutions",
      },
    },
  ],
};

export const testimonials = [
  {
    author: {
      name: "Alex Carter",
      handle: "@alexsaas",
      avatar:
        "",
    },
    text: "Clow delivered our SaaS MVP in just 3 weeks, saving us $40k compared to agency quotes. Their open-source approach gave us full control.",
    href: "",
  },
  {
    author: {
      name: "Maria Lopez",
      handle: "@mariastartup",
      avatar:
        "",
    },
    text: "Their automation workflows with n8n cut our manual processes by 70%. The $25/hour rate is unbeatable for this level of expertise.",
    href: "",
  },
  {
    author: {
      name: "James Patel",
      handle: "@jamesinnovator",
      avatar:
        "",
    },
    text: "Migrating our data to Pocketbase with Clow was seamless. We now have a scalable CMS with zero vendor lock-in.",
    href: "",
  },
];


export const contactDetails = {
  address: "Bangalore, India",
  social: {
    twitter: "https://twitter.com/clowtech",
    linkedin: "https://www.linkedin.com/in/clowtech",
    youtube: "https://www.youtube.com/@clowtech",
    instagram: "https://www.instagram.com/clowtech",
    facebook: "https://www.facebook.com/clowtech"
  }
}