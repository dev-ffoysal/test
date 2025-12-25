import {
    Code2,
    Smartphone,
    BrainCircuit,
    Cloud,
    Palette,
    Database,
    Blocks,
    Rocket
} from 'lucide-react';

export const SERVICES = [
    {
        id: "web-dev",
        slug: "web-application-development",
        title: "Web Development",
        shortDesc: "Build powerful, scalable web applications with modern frameworks.",
        icon: Code2,
        fullDesc: "We build powerful, scalable web applications with modern frameworks and best practices. From complex SaaS platforms to customer-facing portals, our engineering team utilizes the latest technologies to deliver robust solutions.",
        features: [
            "Full-Stack Development",
            "SaaS Architectures",
            "Progressive Web Apps (PWA)",
            "API First Design",
            "Frontend Performance Optimization"
        ]
    },
    {
        id: "mobile-dev",
        slug: "mobile-app-development",
        title: "Mobile App Development",
        shortDesc: "Create engaging native and cross-platform mobile applications.",
        icon: Smartphone,
        fullDesc: "Create engaging native and cross-platform mobile applications for iOS and Android. We ensure seamless performance and intuitive user experiences that keep your customers engaged.",
        features: [
            "iOS & Android Native Dev",
            "Cross-Platform (React Native/Flutter)",
            "Mobile UI/UX Design",
            "App Store Optimization",
            "Maintenance & Support"
        ]
    },
    {
        id: "ui-ux",
        slug: "ui-ux-design",
        title: "UI/UX Design",
        shortDesc: "Design beautiful, intuitive interfaces that users love.",
        icon: Palette,
        fullDesc: "Design beautiful, intuitive interfaces that users love and that drive conversions. Our user-centric approach ensures your product is not only visually stunning but also easy to navigate.",
        features: [
            "User Research & Personas",
            "Wireframing & Prototyping",
            "Design Systems",
            "User Testing",
            "Interaction Design"
        ]
    },
    {
        id: "ai-solutions",
        slug: "ai-solutions",
        title: "AI Solutions",
        shortDesc: "Leverage cutting-edge AI to automate workflows and unlock insights.",
        icon: BrainCircuit,
        fullDesc: "Leverage cutting-edge artificial intelligence to automate workflows, enhance user experiences, and unlock next-level business intelligence. We help you integrate AI seamlessly into your operations.",
        features: [
            "Process Automation",
            "Predictive Analytics",
            "Natural Language Processing",
            "Computer Vision",
            "AI Strategy Consulting"
        ]
    },
    {
        id: "cloud-services",
        slug: "cloud-services",
        title: "Cloud Services",
        shortDesc: "Scalable, reliable, and cost-effective cloud infrastructure solutions.",
        icon: Cloud,
        fullDesc: "Leverage cloud infrastructure for scalable, reliable, and cost-effective solutions. We help you migrate, manage, and optimize your cloud environment for maximum performance.",
        features: [
            "Cloud Migration (AWS/Azure/GCP)",
            "Infrastructure Optimization",
            "Cost Management",
            "Security & Compliance",
            "24/7 Monitoring"
        ]
    },
    {
        id: "wordpress-dev",
        slug: "wordpress-development",
        title: "WordPress Development",
        shortDesc: "Fast, secure, and fully customized WordPress websites.",
        icon: Blocks,
        fullDesc: "Build fast, secure, and fully customized WordPress websites tailored to your business needs. We create custom themes and plugins to give you full control over your content.",
        features: [
            "Custom Theme Development",
            "Plugin Development",
            "Performance Tuning",
            "Security Hardening",
            "WooCommerce Solutions"
        ]
    },
    {
        id: "website-maintenance",
        slug: "website-maintenance",
        title: "Website Maintenance",
        shortDesc: "Ongoing updates, security monitoring, and performance optimization.",
        icon: Database,
        fullDesc: "Keep your website running smoothly with ongoing updates, security monitoring, performance optimization, and technical support. We handle the technical details so you can focus on your business.",
        features: [
            "Security Updates",
            "Performance Optimization",
            "Regular Backups",
            "Content Updates",
            "Technical Support"
        ]
    },
    {
        id: "project-management",
        slug: "project-management",
        title: "Project Management",
        shortDesc: "Expert execution balancing business and technical needs.",
        icon: Rocket,
        fullDesc: "Protect your time, budget, and peace of mind with expert project managers who understand both business and technical execution. We ensure your project stays on track and delivers value.",
        features: [
            "Agile Methodologies",
            "Risk Management",
            "Budget Control",
            "Stakeholder Communication",
            "Resource Allocation"
        ]
    }
];

export const PROJECTS = [
    {
        id: "fintech-platform",
        slug: "neo-finance-platform",
        title: "Neo Finance Platform",
        category: "FinTech",
        image: "/images/projects/fintech.jpg", // Placeholder path
        summary: "Reimagining personal banking for the digital age with a secure, mobile-first platform.",
        tags: ["React Native", "Node.js", "AWS", "Security"],
        results: ["200% User Growth", "99.99% Uptime", "PCI DSS Compliant"]
    },
    {
        id: "health-ai",
        slug: "medtech-ai-diagnostics",
        title: "MedTech AI Diagnostics",
        category: "Healthcare",
        image: "/images/projects/health.jpg", // Placeholder path
        summary: "AI-powered diagnostic tool assisting radiologists in early detection of anomalies.",
        tags: ["Python", "TensorFlow", "React", "HIPAA"],
        results: ["30% Faster Diagnosis", "95% Accuracy", "Global Adoption"]
    },
    {
        id: "ecommerce-scale",
        slug: "global-retail-scale",
        title: "Global Retail Scale",
        category: "E-Commerce",
        image: "/images/projects/retail.jpg", // Placeholder path
        summary: "High-performance headless commerce solution for a multinational fashion retailer.",
        tags: ["Next.js", "Shopify Plus", "Redis", "Vercel"],
        results: ["2s Page Load", "45% Conversion Uplift", "Global Scale"]
    }
];

export const PROCESS_STEPS = [
    {
        title: "Discovery",
        description: "We dive deep into your business goals, user needs, and technical requirements to build a solid roadmap.",
        icon: Rocket
    },
    {
        title: "Design",
        description: "Our designers craft intuitive, high-fidelity prototypes that align with your brand/vision.",
        icon: Palette
    },
    {
        title: "Development",
        description: "Agile engineering with top-tier code quality, ensuring scalability and security from day one.",
        icon: Code2
    },
    {
        title: "Deployment",
        description: "Smooth, automated launches with zero downtime strategies and rigorous testing.",
        icon: Cloud
    },
    {
        title: "Support",
        description: "Continuous monitoring, updates, and optimization to keep your product ahead of the curve.",
        icon: Database
    }
];

export const TESTIMONIALS = [
    {
        id: 1,
        content: "The AI agent they built saved our team hours every week and improved our response time. It feels like we hired a new team member who never sleeps!",
        author: "Windi Kulina",
        role: "CMO OF BIMA"
    },
    {
        id: 2,
        content: "Their technical expertise in Next.js and Cloud architecture is unmatched. They transformed our legacy platform into a high-performance SaaS in record time.",
        author: "Sarah Johnson",
        role: "CTO, TechFlow Inc."
    },
    {
        id: 3,
        content: "Reliable, transparent, and incredibly skilled. They didn't just write code; they provided strategic technical direction that saved us months of R&D.",
        author: "Elena Rodriguez",
        role: "Founder, GreenEarth Startups"
    }
];

export const TEAM = [
    {
        id: "faisal-f",
        name: "Faisal F.",
        role: "Founder & CEO",
        bio: "Visionary leader with 10+ years in software architecture and agency growth.",
        image: "/images/team/faisal.jpg",
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        id: "sarah-smith",
        name: "Sarah Smith",
        role: "Head of Operations",
        bio: "Expert in project management and scaling remote engineering teams.",
        image: "/images/team/sarah.jpg",
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        id: "david-kim",
        name: "David Kim",
        role: "Lead UI/UX Designer",
        bio: "Award-winning designer focused on human-centric digital experiences.",
        image: "/images/team/david.jpg",
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        id: "alex-chen",
        name: "Alex Chen",
        role: "CTO",
        bio: "Full-stack wizard specializing in AI integrations and cloud infrastructure.",
        image: "/images/team/alex.jpg",
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        id: "jessica-wu",
        name: "Jessica Wu",
        role: "Head of Marketing",
        bio: "Strategic growth expert with a passion for creative storytelling and data-driven results.",
        image: "/images/team/jessica.jpg",
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        id: "ryan-h",
        name: "Ryan H.",
        role: "Senior Dev Analyst",
        bio: "Specializing in technical feasibility and optimizing internal development workflows.",
        image: "/images/team/ryan.jpg",
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    }
];

