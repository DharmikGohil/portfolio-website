import {
    FaNodeJs, FaReact, FaAws, FaDocker, FaLinux, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDatabase,
    FaMousePointer, FaWind, FaRocket, FaCode, FaFigma
} from 'react-icons/fa';
import {
    SiTypescript, SiExpress, SiPostgresql, SiMysql, SiElasticsearch, SiRedis, SiMongodb,
    SiNextdotjs, SiTailwindcss, SiNestjs, SiGraphql, SiPrisma, SiSupabase, SiFirebase,
    SiLangchain, SiOpenai, SiHuggingface, SiPostman
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbBrandCSharp } from 'react-icons/tb';
import { IconType } from 'react-icons';

export type Skill = {
    name: string;
    icon: IconType | string; // string for custom image path
};

export const skills: { category: string; items: Skill[] }[] = [
    {
        category: "Backend & Cloud",
        items: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express.js", icon: SiExpress },
            { name: "AWS", icon: FaAws },
            { name: "Docker", icon: FaDocker },
            { name: "Linux", icon: FaLinux },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MySQL", icon: SiMysql },
            { name: "Redis", icon: "/skills/redis.svg" },
            { name: "Elasticsearch", icon: SiElasticsearch },
        ]
    },
    {
        category: "AI & Data",
        items: [
            { name: "LangChain", icon: SiLangchain },
            { name: "OpenAI", icon: SiOpenai },
            { name: "Pinecone", icon: FaDatabase },
            { name: "Weaviate", icon: FaDatabase },
            { name: "Python", icon: FaPython },
            { name: "Firebase", icon: SiFirebase },
        ]
    },
    {
        category: "Frontend & Languages",
        items: [
            { name: "TypeScript", icon: SiTypescript },
            { name: "JavaScript", icon: FaJs },
            { name: "Java", icon: FaJava },
            { name: "C#", icon: TbBrandCSharp },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React", icon: FaReact },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "CSS3", icon: FaCss3Alt },
            { name: "Git", icon: FaGitAlt },
        ]
    },
    {
        category: "Tools & AI IDEs",
        items: [
            { name: "Cursor", icon: "/skills/cursor.svg" },
            { name: "Windsurf", icon: "/skills/windsurf.svg" },
            { name: "Antigravity", icon: "/skills/google-antigravity.svg" },
            { name: "Kiro", icon: "/skills/kiro.svg" },
            { name: "VS Code", icon: VscVscode },
            { name: "Postman", icon: SiPostman },
            { name: "Figma", icon: FaFigma },
        ]
    }
];
