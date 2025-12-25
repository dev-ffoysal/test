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
        title: "Web Application Development",
        shortDesc: "Scalable, high-performance web apps built with modern frameworks.",
        icon: Code2,
        fullDesc: "We build enterprise-grade web applications that are secure, scalable, and user-centric. From complex SaaS platforms to customer-facing portals, our engineering team utilizes the latest technologies to deliver robust solutions.",
        features: [
            "Custom Full-Stack Development",
            "SaaS Application Architectures",
            "Progressive Web Apps (PWA)",
            "API First Design",
            "Cloud-Native Solutions"
        ]
    },
    {
        id: "mobile-dev",
        slug: "mobile-app-development",
        title: "Mobile App Development",
        shortDesc: "Native and cross-platform mobile experiences for iOS and Android.",
        icon: Smartphone,
        fullDesc: "Reach your customers on their favorite devices with our mobile development services. We create seamless, high-performance mobile applications using React Native, Flutter, and native technologies.",
        features: [
            "iOS & Android Native Dev",
            "Cross-Platform (React Native/Flutter)",
            "Mobile UI/UX Design",
            "App Store Optimization",
            "Maintenance & Support"
        ]
    },
    {
        id: "ai-ml",
        slug: "ai-machine-learning",
        title: "AI & Machine Learning",
        shortDesc: "Intelligent solutions that drive automation and insights.",
        icon: BrainCircuit,
        fullDesc: "Leverage the power of Artificial Intelligence to transform your business. We develop custom ML models, NLP solutions, and predictive analytics tools to help you make data-driven decisions.",
        features: [
            "Predictive Analytics",
            "Natural Language Processing",
            "Computer Vision",
            "Process Automation",
            "AI Strategy Consulting"
        ]
    },
    {
        id: "cloud-devops",
        slug: "cloud-devops",
        title: "Cloud & DevOps",
        shortDesc: "Secure cloud infrastructure and CI/CD automation pipelines.",
        icon: Cloud,
        fullDesc: "Accelerate your delivery and ensure reliability with our Cloud and DevOps services. We help you migrate to the cloud, optimize your infrastructure, and implement automated CI/CD pipelines.",
        features: [
            "Cloud Migration (AWS/Azure/GCP)",
            "Infrastructure as Code",
            "CI/CD Pipelines",
            "Security & Compliance",
            "24/7 Monitoring"
        ]
    },
    {
        id: "ui-ux",
        slug: "ui-ux-design",
        title: "UI/UX Design",
        shortDesc: "User-centered design that creates engaging digital experiences.",
        icon: Palette,
        fullDesc: "Great software starts with great design. Our design team creates intuitive, accessible, and beautiful interfaces that delight users and drive conversions.",
        features: [
            "User Research & Personas",
            "Wireframing & Prototyping",
            "Design Systems",
            "User Testing",
            "Interaction Design"
        ]
    },
    {
        id: "blockchain",
        slug: "blockchain-emerging-tech",
        title: "Blockchain & Emerging Tech",
        shortDesc: "Decentralized solutions for the next generation of the web.",
        icon: Blocks,
        fullDesc: "Explore the potential of Web3 and blockchain technology. We build decentralized applications (dApps), smart contracts, and enterprise blockchain solutions.",
        features: [
            "Smart Contract Development",
            "DeFi Solutions",
            "NFT Marketplaces",
            "Private Blockchain Networks",
            "Web3 Integration"
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
        content: "NexAgency transformed our legacy system into a modern, cloud-native powerhouse. Their technical expertise is unmatched.",
        author: "Sarah Johnson",
        role: "CTO, TechFlow Inc."
    },
    {
        id: 2,
        content: "The design team understood our vision perfectly. The new UX has significantly improved our user retention rates.",
        author: "Michael Chen",
        role: "Product Director, InnovateX"
    },
    {
        id: 3,
        content: "Reliable, transparent, and incredibly skilled. They felt like a true extension of our internal team.",
        author: "Elena Rodriguez",
        role: "Founder, GreenEarth Startups"
    }
];
