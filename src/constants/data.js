import {
    BrainCircuit,
    Code2,
    Terminal,
    Database,
    Smartphone,
    Globe,
    Bot
} from "lucide-react";

export const PERSONAL_DATA = {
    name: "ANANTHU A R",
    title: "AI/ML Developer & Computer Science Engineer",
    tagline: "Building intelligent systems for the future",
    about: "I am a Computer Science student with a profound focus on Artificial Intelligence and Machine Learning. With strong fundamentals in problem-solving and full-stack development, I build intelligent, seamless systems that bridge the gap between complex algorithms and real-world impact. Every project I undertake is driven by a passion for elegance, efficiency, and future-forward innovation.",
    contact: {
        email: "ananthuar03@gmail.com",
        github: "github.com/Ananthuar",
        linkedin: "linkedin.com/in/ananthuar03",
    },
    experience: [
        {
            role: "Robotics Engineer Intern",
            company: "Inker Robotics",
            duration: "Recent",
            description: "Contributed to robotics and automation engineering, applying hands-on knowledge to bridge software intelligence with physical systems."
        }
    ],
    skills: [
        { name: "Python", icon: Terminal },
        { name: "Dart", icon: Code2 },
        { name: "Java", icon: Code2 },
        { name: "C", icon: Terminal },
        { name: "Flutter", icon: Smartphone },
        { name: "HTML/CSS", icon: Globe },
        { name: "Firebase", icon: Database },
        { name: "AI/ML", icon: BrainCircuit },
        { name: "Data Structures", icon: Bot },
    ],
    projects: [
        {
            title: "Crash Sense",
            subtitle: "AI-based crash prediction system for Linux environments.",
            techStack: ["Linux", "Machine Learning", "Python", "System APIs"],
            color: "from-blue-500/20 to-cyan-500/0",
            border: "border-blue-500/20"
        },
        {
            title: "Krishi Mithra",
            subtitle: "Direct farmer-to-consumer intelligent marketplace platform.",
            techStack: ["Flutter", "Firebase", "Dart", "UX Design"],
            color: "from-green-500/20 to-emerald-500/0",
            border: "border-green-500/20"
        },
        {
            title: "ProofIt",
            subtitle: "Automated, verified cryptographic certificate generator.",
            techStack: ["Python", "Automation", "Cryptography", "PDF Gen"],
            color: "from-purple-500/20 to-fuchsia-500/0",
            border: "border-purple-500/20"
        },
        {
            title: "Care Net",
            subtitle: "Streamlined charity connection and resource orchestration platform.",
            techStack: ["Web", "Database", "UI/UX", "Social Impact"],
            color: "from-orange-500/20 to-red-500/0",
            border: "border-orange-500/20"
        }
    ]
};
