export interface Profile {
    name: string;
    displayName: string;
    greeting: string;
    title: string;
    tagline: string[];
    email: string;
    resumeUrl: string;
    github: string;
    linkedin: string;
    twitter: string;
    leetcode: string;
    portfolioUrl: string;
    about: string;
}

export interface NavigationLink {
    id: string;
    title: string;
}

export interface Experience {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
}

export interface Project {
    name: string;
    description: string;
    tags: string[];
    image: string;
    video?: string;
    screenshots?: string[];
    source_code_link: string;
    live_link?: string;
    category: string;
}

export interface SkillItem {
    name: string;
    img: string;
}
