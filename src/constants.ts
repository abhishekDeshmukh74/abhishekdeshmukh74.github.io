import type { Profile, NavigationLink, Experience, Project, SkillItem } from './types';

const meliotis  = '/assets/projects/meliotis.png';
const learnera  = '/assets/projects/learnera.png';
const nike      = '/assets/projects/nike.png';
const codblog   = '/assets/projects/codblog.png';
const rdcrud    = '/assets/projects/rdcrud.png';
const timetrack = '/assets/projects/timetrack.png';
const netflix   = '/assets/projects/netflix.png';
const vchat     = '/assets/projects/vchat.png';
const brototype    = '/assets/tools/brototype.png';
const web          = '/assets/tools/web.png';
const extentia     = '/assets/extentia.jpg';
const creditSuisse = '/credit-suisse.png';
const avaya        = '/assets/avaya.png';
const elastic      = '/assets/elastic.svg';
const affinidi     = '/assets/affinidi.jpg';
const odekAppcraft = '/assets/odek-appcraft.jpg';

// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------

export const profile: Profile = {
    name: "Abhishek Deshmukh",
    displayName: "ABHISHEK DESHMUKH",
    greeting: "HEY, I'M ABHISHEK!",
    title: "Full Stack Developer & Gen AI Engineer",
    tagline: ["GEN AI", "+", "FULL STACK"],
    email: "abhishekdeshmukh74@gmail.com",
    resumeUrl: "https://drive.google.com/file/d/1iZrJrlJTAS5oeltL1jU_qdlD58iN7B-o/view?usp=drive_link",
    github: "https://github.com/abhishekDeshmukh74",
    linkedin: "https://www.linkedin.com/in/abhishek-deshmukh-dev/",
    twitter: "https://x.com/4bhi__deshmukh",
    leetcode: "https://leetcode.com/u/M0r9h3u5/",
    portfolioUrl: "https://www.abhishekdeshmukh.com",
    about: `Gen AI + full-stack developer with 8.5 years of experience across startups, service-based, and product-based companies. I work as a Full Stack Software Engineer creating cutting-edge services and sleek user experiences — specialising in React, Next.js, Node.js, TypeScript, and Java Spring Boot, with a strong focus on Gen AI features using LLMs, LangGraph, and AI workflows. My experience spans architecture design, performance optimisation, microservices, cloud (AWS, Firebase), and real-world AI integrations. I thrive on learning new technologies and consistently challenge myself to deliver client-focused engineering and impactful product features.`,
};

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const navigationLinks: NavigationLink[] = [
    { id: "home",       title: "Home"       },
    { id: "about",      title: "About"      },
    { id: "experience", title: "Experience" },
    { id: "skills",     title: "Skills"     },
    { id: "projects",   title: "Projects"   },
];

// ---------------------------------------------------------------------------
// Tech-cloud slugs (used by the animated icon globe)
// ---------------------------------------------------------------------------

export const slugs: string[] = [
    "javascript",
    "typescript",
    "java",
    "postgresql",
    "mongodb",
    "react",
    "nextdotjs",
    "html5",
    "css3",
    "nextdotjs",
    "amazonwebservices",
    "firebase",
    "nginx",
    "docker",
    "git",
    "github",
    "visualstudio",
    "figma",
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export const experiences: Experience[] = [
    {
        title: "Gen AI / Full Stack Developer",
        company_name: "Elastic (via Trigent Software Pvt. Ltd.)",
        icon: elastic,
        iconBg: "#E6DEDD",
        date: "December 2024 – Present",
        points: [
            "Built ElasticGPT, a GenAI-powered internal assistant using React, JavaScript, and Python, deeply integrated with Elastic's stack for real-time insights.",
            "Designed and implemented GenAI workflows using LangGraph, enabling stateful conversational flows, multi-agent orchestration, and tool-driven reasoning."
        ],
    },
    {
        title: "Software Engineer III (Senior Full Stack Engineer)",
        company_name: "Avaya",
        icon: avaya,
        iconBg: "#E6DEDD",
        date: "October 2023 – December 2024",
        points: [
            "Developed and maintained UI portal for Outbound Campaigns/Contacts in React.js/JavaScript — contact list creation/deletion, campaign and strategy management.",
            "Built backend services with Java Spring Boot to support campaign operations; streamed contacts using Akka and Kafka.",
            "Maintained Workspaces portal in Angular, Node.js, and Java Spring Boot; implemented outbound CLID selection and achieved a 60% decrease in load time.",
        ],
    },
    {
        title: "Senior Full Stack Engineer",
        company_name: "Affinidi",
        icon: affinidi,
        iconBg: "#E6DEDD",
        date: "September 2022 – July 2023",
        points: [
            "Developed and maintained Affverse UI portal in React.js with passwordless login, refresh-token auth, and responsive pages using AntD; led full project restructure to restore delivery speed.",
            "Built UAF Web Banner portal in React.js/JavaScript with OTP login, user-journey flows, Google Maps API integration, and data-driven AntD forms.",
            "Developed and maintained 15 microservices in Node.js/TypeScript/Express on AWS.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Credit Suisse",
        icon: creditSuisse,
        iconBg: "#E6DEDD",
        date: "April 2020 – September 2022",
        points: [
            "Led UI development for the Gift & Entertainment system in React.js with Java Spring Boot REST API enhancements; handled release creation, management, and deployment.",
            "Led UI development for FCC Standard Repository using React with Apollo GraphQL.",
            "Contributed to a private npm repository of UI guideline-compliant shared React components.",
        ],
    },
    {
        title: "Product Engineer (Full Stack Engineer)",
        company_name: "ODEK APPCRAFT",
        icon: odekAppcraft,
        iconBg: "#E6DEDD",
        date: "December 2018 – April 2020",
        points: [
            "Built an accounting/wallet microservices system with orchestration for mobile plan purchases, bonuses, and payment gateway integrations (Payweb, Payhost, F&B).",
            "Architected the entire frontend in Angular 6 and microservice backend in Node.js v10 from scratch — user onboarding, role-based management, and voucher system.",
            "Developed ShapLeft (medicine courier scheduling), ERMS (S3 document storage with access control), and Odek POS (mobile services sales portal).",
        ],
    },
    {
        title: "Full Stack Engineer",
        company_name: "Extentia Information Technology",
        icon: extentia,
        iconBg: "#E6DEDD",
        date: "December 2017 – December 2018",
        points: [
            "Led two Node.js projects building voice assistant chatbots for Amazon Alexa, Google Home, Slack, and Facebook using AWS, Heroku, and Dialogflow.",
            "Developed a conference PWA in the MEAN stack — REST APIs in Node.js/TypeScript and frontend in Angular 2+.",
        ],
    },
    // {
    //     title: "Full Stack Developer",
    //     company_name: "ForceClose Technologies",
    //     icon: web,
    //     iconBg: "#E6DEDD",
    //     date: "July 2015 – June 2017",
    //     points: [
    //         "Developed an Android notice board app for college and various small web projects.",
    //         "CMS development using PHP; SEO auditing and penetration testing.",
    //         "Built FitCRM as a college project — a full CRM system.",
    //     ],
    // },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export const projects: Project[] = [
    {
        name: "Amazon Clone",
        description: "A full-featured Amazon Clone built with Next.js, Redux Toolkit, Firebase, Stripe, and Tailwind CSS. Includes product listings, cart management, Stripe-powered checkout, and Firebase authentication for a seamless e-commerce experience.",
        tags: ["Next.js", "Redux Toolkit", "Firebase", "Stripe", "TailwindCSS", "JavaScript"],
        image: meliotis,
        source_code_link: "https://github.com/abhishekDeshmukh74/amazon-clone",
        category: "Full Stack",
    },
    {
        name: "Google Docs Clone",
        description: "A real-time collaborative document editor inspired by Google Docs, built with React, Quill rich-text editor, Socket.io for live collaboration, and MongoDB for document persistence.",
        tags: ["React JS", "Socket.io", "MongoDB", "Node.js", "Express", "JavaScript"],
        image: codblog,
        source_code_link: "https://github.com/abhishekDeshmukh74/google-docs-clone",
        category: "Full Stack",
    },
    {
        name: "Slack Clone",
        description: "A feature-rich Slack Clone built with ReactJS, Redux for state management, Styled Components for theming, and Firebase for real-time messaging and authentication.",
        tags: ["React JS", "Redux", "Firebase", "Styled Components", "JavaScript"],
        image: vchat,
        source_code_link: "https://github.com/abhishekDeshmukh74/slack-clone",
        category: "Full Stack",
    },
    // {
    //     name: "LinkedIn Clone",
    //     description: "A LinkedIn clone built with React and Firebase, featuring user authentication, real-time posts and feeds, and a modern responsive UI that mirrors the core LinkedIn experience.",
    //     tags: ["React JS", "Firebase", "JavaScript", "CSS"],
    //     image: learnera,
    //     source_code_link: "https://github.com/abhishekDeshmukh74/linkedin-clone",
    //     category: "Full Stack",
    // },
    {
        name: "Spotify Clone",
        description: "A Spotify-inspired music streaming UI built with React and TypeScript, featuring playlist browsing, player controls, and a clean responsive interface that replicates Spotify's core user experience.",
        tags: ["React JS", "TypeScript", "CSS"],
        image: netflix,
        source_code_link: "https://github.com/abhishekDeshmukh74/spotify-clone",
        category: "Frontend",
    },
    // {
    //     name: "WhatsApp Clone",
    //     description: "A real-time WhatsApp-style chat application built with TypeScript, featuring instant messaging, contact lists, and a familiar chat interface with modern web technologies.",
    //     tags: ["TypeScript", "React JS", "Firebase"],
    //     image: timetrack,
    //     source_code_link: "https://github.com/abhishekDeshmukh74/whatsapp-clone",
    //     category: "Full Stack",
    // },
    // {
    //     name: "Portfolio Website",
    //     description: "Personal developer portfolio built with TypeScript and modern web technologies, showcasing projects, skills, and experience. Features a clean, performant design with smooth interactions.",
    //     tags: ["TypeScript", "React JS", "TailwindCSS"],
    //     image: nike,
    //     source_code_link: "https://github.com/abhishekDeshmukh74/abhishek-deshmukh-web",
    //     live_link: "https://www.abhishekdeshmukh.com",
    //     category: "Frontend",
    // },
    // {
    //     name: "Cron Parser",
    //     description: "A TypeScript utility for parsing and interpreting cron expressions. Takes a cron string and expands each field, outputting the schedule in a readable format — useful for validating and understanding scheduled tasks.",
    //     tags: ["TypeScript", "Node.js"],
    //     image: rdcrud,
    //     source_code_link: "https://github.com/abhishekDeshmukh74/cron-parser",
    //     category: "Frontend",
    // },
];

// ---------------------------------------------------------------------------
// Skill cards
// ---------------------------------------------------------------------------

export const skillSet: SkillItem[] = [
    // Frontend
    { name: "React JS",      img: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Next.js",       img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Redux",         img: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
    { name: "React Query",   img: "https://logo.svgcdn.com/l/react-query-icon.svg" },
    { name: "Zustand",       img: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" },
    { name: "HTML5",         img: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS3",          img: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    { name: "Tailwind CSS",  img: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
    { name: "Bootstrap",     img: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" },
    { name: "Material UI",   img: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" },
    { name: "shadcn/ui",     img: "https://ui.shadcn.com/android-chrome-512x512.png" },
    { name: "Sass (SCSS)",   img: "https://cdn.worldvectorlogo.com/logos/sass-1.svg" },
    { name: "Storybook",     img: "https://raw.githubusercontent.com/storybookjs/brand/main/icon/icon-storybook-default.svg" },
    { name: "Jest",          img: "https://cdn.worldvectorlogo.com/logos/jest-2.svg" },
    // Backend & Databases
    { name: "Node.js",       img: "https://nodejs.org/static/images/logo.svg" },
    { name: "Express.js",    img: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
    { name: "NestJS",        img: "https://cdn.worldvectorlogo.com/logos/nestjs.svg" },
    { name: "Spring Boot",   img: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000" },
    { name: "FastAPI",       img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "GraphQL",       img: "https://cdn.worldvectorlogo.com/logos/graphql-logo-2.svg" },
    { name: "PostgreSQL",    img: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
    { name: "MySQL",         img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
    { name: "MongoDB",       img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "Redis",         img: "https://cdn.worldvectorlogo.com/logos/redis.svg" },
    { name: "Kafka",         img: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg" },
    { name: "AWS",           img: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
    { name: "Firebase",      img: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
    // Languages
    { name: "TypeScript",    img: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "JavaScript",    img: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
    { name: "Java",          img: "https://cdn.worldvectorlogo.com/logos/java.svg" },
    { name: "Python",        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    // Tools & DevOps
    { name: "Git",           img: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    { name: "GitHub",        img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
    { name: "Docker",        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" },
    { name: "Kubernetes",    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/kubernetes.svg" },
    { name: "VS Code",       img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519" },
    { name: "Postman",       img: "https://cdn.worldvectorlogo.com/logos/postman.svg" },
    { name: "Figma",         img: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
];
