import { Icons } from "@/components/icons";
import { Contact, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rakshith Kumar",
  initials: "DV",
  url: "https://dillion.io",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  description: "Engineer turing into Entrepreneur.",
  summary:
    "At the sept of 2024, I quit my job as a IT engineer to go fulltime into trying & experimenting to build multi dollor businesses. I also had the pleasure of being a part of the cohort 2 of called [100xengineers](https://www.100xengineers.com/).",

  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/contact", icon: Contact, label: "Contact" },
  ],
  contact: {
    email: "rakshyk@gmail.com",
    tel: "+123456789",
    social: {
      // GitHub: {
      //   name: "GitHub",
      //   url: "https://dub.sh/dillion-github",
      //   icon: Icons.github,

      //   navbar: true,
      // },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/irakshy",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/irakshy",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Stealth Startup",
      href: "https://rakshith.in",
      badges: [],
      location: "Remote",
      title: "Product",
      logoUrl: "/stealth.jpg",
      start: "Oct 2024",
      end: "Present",
      description:
        "Exploring innovative solutions across diverse domains including fintech, AR/VR applications, and sustainable tech. Rapid prototyping AI-powered tools for healthcare diagnostics and educational platforms. Validating market viability through user research and MVP development.",
    },
    {
      company: "Vettam AI",
      href: "https://vettam.ai",
      badges: [],
      location: "Remote",
      title: "AI Researcher",
      logoUrl: "/vettam.svg",
      start: "Oct 2024",
      end: "Jan 2025",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "42Gears",
      href: "https://42gears.com",
      badges: [],
      location: "onsite Bengaluru, India",
      title: "Information Technology Support Engineer",
      logoUrl: "/42Gears.png",
      start: "Dec 2022",
      end: "Sep 2024",
      description:
        "Provided help desk support resolving hardware/software, network, and OS issues for 300+ users for daily. Configured hardware components, deployed security updates, and resolved network connectivity problems. Developed IT documentation and conducted user training sessions. Utilized remote support tools to troubleshoot technical problems. Collaborated with cross-functional teams to maintain system performance and security compliance.",
    },
    {
      company: "Networkers Home",
      href: "https://networkershome.com/",
      badges: [],
      location: "Bengaluru, India",
      title: "Apprenticeship",
      logoUrl: "/networkershome.jpg",
      start: "Dec 2020",
      end: "Mar 2022",
      description:
        "Delivered interactive trainings on networking concepts through hands-on labs, fostering collaborative problem-solving. Expertly troubleshooted connectivity issues while guiding practical application. Cultivated inclusive learning environments encouraging knowledge-sharing and peer collaboration. Supported users in applying foundational principles through real-world scenarios. Skills - Cisco Certified Internetwork Expert (CCIE) · IPSec · Firewalls · Networking · Virtual Private Network (VPN) · CCNA",
    },
    {
      company: "Buzy Coders Camp LLP",
      href: "http://www.buzydevelopers.com/",
      badges: [],
      location: "onsite",
      title: "Android Developer",
      logoUrl: "/buzy.jpg",
      start: "Dec 2019",
      end: "Dec 2019",
      description:
        "Developed Android applications using Android Studio, gaining practical experience in mobile app development. Integrated Firebase services for backend functionality and real-time data management.",
    },
    {
      company: "Amazon Business",
      href: "https://business.amazon.in/",
      badges: [],
      location: "Bengaluru, India",
      title: "Operations Analyst",
      logoUrl: "/ab.svg",
      start: "Jan 2019",
      end: "Jul 2019",
      description:
        "Optimized inventory management systems for 100,000+ assets, implementing real-time tracking and space utilization strategies. Reduced order cancellation losses by 30% through proactive risk mitigation measures. Led cross-functional teams to maintain inventory accuracy using advanced Excel tracking and automated reporting tools. Streamlined operations by redesigning storage layouts, increasing warehouse efficiency by 25%. Managed time-sensitive inventory audits ensuring 99% accuracy.",
    },
    {
      company: "Flipkart",
      href: "https://flipkart.com/",
      badges: [],
      location: "Bengaluru, India",
      title: "Operations Assistant",
      logoUrl: "/flipkart.jpg",
      start: "Aug 2018",
      end: "Oct 2018",
      description: "",
    },
  ],
  education: [
    // {
    //   school: "100xEngineers",
    //   href: "/www.100xengineers.com",
    //   degree: "s3, s4, sf1, s5",
    //   logoUrl: "",
    //   start: "2023",
    //   end: "2024",
    // },
    // {
    //   school: "SDM Polytechnic",
    //   href: "https://sdmpolytechnic.in/",
    //   degree: "Diploma in Computer Science",
    //   logoUrl: "",
    //   start: "",
    //   end: "",
    // },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;

export type WorkExperience = {
  company: string;
  href: string;
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description?: string;
  badges: readonly string[];
};
export type Education = {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
};
export type SocialLink = {
  name: string;
  url: string;
  icon: keyof typeof Icons;
  navbar: boolean;
};

export type NavItem = {
  href: string;
  icon: typeof HomeIcon | typeof NotebookIcon | typeof Contact;
  label: string;
};

export type ContactInfo = {
  email: string;
  tel: string;
  social: Readonly<Record<string, SocialLink>>;
};

export type DataType = Readonly<{
  work: readonly WorkExperience[];
  contact: ContactInfo;
  navbar: readonly NavItem[];
}>;
