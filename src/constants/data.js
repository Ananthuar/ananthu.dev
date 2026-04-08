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
        github: "https://github.com/Ananthuar",
        linkedin: "https://linkedin.com/in/ananthuar03",
        whatsapp: "https://wa.me/917025677058",
    },
    resume: "/_ananthu_ar_resume_.pdf",
    profilePhoto: "/profile.png",
    education: [
        {
            degree: "B.Tech in Computer Science & Engineering",
            institution: "College of Engineering and Management Punnapra",
            location: "Punnapra, Kerala",
            duration: "2022 – 2026",
            description: "Specialising in Artificial Intelligence and Machine Learning. Actively building real-world systems across robotics, mobile, and web engineering domains."
        },
        {
            degree: "Diploma in Computer Engineering",
            institution: "Government Polytechnic College Chelakkara",
            location: "Chelakkara, Thrissur, Kerala",
            duration: "2021 – 2024",
            description: "Three-year polytechnic diploma covering core computer engineering fundamentals — programming, networking, and systems design."
        }
    ],
    recognition: [
        {
            title: "TinkerHub Useless Projects — 2025",
            subtitle: "Built & showcased ProofIt — a Flutter app requiring photo proof to mark tasks complete.",
            href: "https://www.tinkerhub.org/events/Q2Q1TQKX6Q/Useless%20Projects"
        }
    ],
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
            border: "border-blue-500/20",
            image: "/crash_sense.png",
            github: "https://github.com/Ananthuar/CRASH-SENSE",
        },
        {
            title: "Mahanaim Gospel Team",
            subtitle: "A modern, animated, multilingual church website.",
            techStack: ["Firebase Hosting", "JavaScript", "Firestore", "HTML/CSS", "Multilingual"],
            color: "from-fuchsia-500/20 to-purple-500/0",
            border: "border-fuchsia-500/20",
            image: "/mahanaim.png",
            github: "https://github.com/Ananthuar/MahanaimGospalTeam",
            liveUrl: "https://mahanaimgospelteamwebsite.web.app/"
        },
        {
            title: "Krishi Mithra",
            subtitle: "Academic Research: Designing an intelligent farmer-to-consumer marketplace with algorithmic supply-demand matching.",
            techStack: ["Academic Research", "System Analytics", "Architecture Planning"],
            color: "from-green-500/20 to-emerald-500/0",
            border: "border-green-500/20",
            status: "Research Phase",
            image: "/krishi_mithra.png"
        },
        {
            title: "ProofIt",
            subtitle: "A unique task manager requiring photographic proof for task completion.",
            techStack: ["Flutter", "Dart", "Google ML Kit", "sqflite", "Firebase"],
            color: "from-purple-500/20 to-fuchsia-500/0",
            border: "border-purple-500/20",
            image: "/proofit.png",
            type: "mobile",
            github: "https://github.com/Ananthuar/ProofIt",
        },
        {
            title: "Care Net",
            subtitle: "Streamlined charity connection and resource orchestration platform.",
            techStack: ["Flutter", "Firebase", "Dart", "UI/UX"],
            color: "from-orange-500/20 to-red-500/0",
            border: "border-orange-500/20",
            image: "/care_net.png",
            type: "mobile",
            github: "https://github.com/Ananthuar/CareNet/",
        }
    ]
};
