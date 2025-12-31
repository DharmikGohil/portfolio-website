import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Dharmik',
    lastName: 'Gohil',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Software Engineer - Backend & AI Infrastructure',
    avatar: '/images/avatar.jpg',
    location: 'Ahmedabad, Gujarat, India',
    languages: ['English', 'Hindi', 'Gujarati']
}

const contact = {
    display: true,
    title: <>Get in touch with me</>,
    description: <>Have a project in mind, want to collaborate, or just want to say hello? I'd love to hear from you! Fill out the form below and I'll get back to you as soon as possible.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/dharmikgohil',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://linkedin.com/in/dharmikgohil',
    },
    {
        name: 'LeetCode',
        icon: 'leetcode',
        link: 'http://leetcode.com/dharmikgohil',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:dharmikgohil.dev@gmail.com',
    },
    {
        name: 'Twitter',
        icon: 'x',
        link: 'http://x.com/dharmikgohil_',
    },
]

const home = {
    label: 'Home',
    title: `${person.name} | Backend & AI Infrastructure Engineer`,
    description: `Dharmik Gohil is a Software Engineer specializing in backend development, AI infrastructure, RAG systems, and scalable architectures. Building IngestIQ.ai and enterprise solutions.`,
    headline: <>Software Engineer - Backend & AI Infrastructure</>,
    subline: <>I'm Dharmik, a Software Engineer at <InlineCode>AvestaLabs</InlineCode> specializing in building scalable systems and AI infrastructure. I'm passionate about Clean Architecture, OOP, and TDD, currently building IngestIQ.ai.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from Ahmedabad, Gujarat`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/dharmikgohil'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I'm a Software Engineer specializing in backend development and AI infrastructure with hands-on experience in building scalable systems using TypeScript, AWS, PostgreSQL, and vector databases. Currently, I'm architecting IngestIQ.ai, a RAG platform transforming unstructured data into AI-ready context. I am passionate about Clean Architecture, OOP, and TDD.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Avesta (Avesta HQ → AvestaLabs)',
                timeframe: 'Jul 2025 – Present',
                role: 'Software Engineer — Product & AI Engineering',
                achievements: [
                    <>Architecting IngestIQ.ai, a production-grade RAG platform for ingesting, chunking, embedding, and semantic retrieval.</>,
                    <>Built event-driven ingestion pipelines and vector DB indexing workflows.</>,
                    <>Integrated Model Context Protocol (MCP) for structured agent context.</>,
                    <>Implemented questions embeddings and LLM-based semantic chunking to improve retrieval accuracy and contextual relevance across the RAG pipeline.</>
                ],
                images: []
            },
            {
                company: 'Avesta (Avesta HQ)',
                timeframe: 'Apr 2025 – Jul 2025',
                role: 'Backend Software Engineer',
                achievements: [
                    <>Built serverless backend pipelines to process and migrate CSV and structured data to MySQL using AWS Lambda and Step Functions.</>,
                    <>Designed database schema and implemented layered architecture with unit, integration, and E2E tests.</>,
                    <>Developed ETL workflows integrating MySQL and Elasticsearch for ingestion, transformation, and search indexing.</>,
                    <>Ensured production readiness, scalability, and observability through proper error handling, retry logic, logging, and TDD.</>
                ],
                images: []
            },
            {
                company: 'Avesta (Avesta HQ)',
                timeframe: 'Jul 2024 – Apr 2025',
                role: 'Software Engineer Intern',
                achievements: [
                    <>Developed REST APIs using Node.js and Express.js following OOP and clean code practices.</>,
                    <>Worked with AWS, Elasticsearch, and MySQL for backend systems.</>,
                    <>Implemented unit, integration, and E2E tests for production readiness.</>,
                    <>Implemented code with TDD.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Education',
        institutions: [
            {
                name: 'Vishwakarma Government Engineering College',
                description: <>B.E. in Computer Engineering — CGPA: 8.37/10</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'Languages',
                description: <>TypeScript, JavaScript, Java, SQL, Python</>,
                images: []
            },
            {
                title: 'Frameworks',
                description: <>Node.js, Express.js, Next.js, React</>,
                images: []
            },
            {
                title: 'Databases',
                description: <>PostgreSQL, MySQL, Elasticsearch, Vector DBs</>,
                images: []
            },
            {
                title: 'Cloud & Infra',
                description: <>AWS, Docker, Linux</>,
                images: []
            },
            {
                title: 'AI & RAG',
                description: <>Retrieval-Augmented Generation (RAG), MCP, Semantic Search, Embeddings, LangChain</>,
                images: []
            },
            {
                title: 'Practices',
                description: <>Clean Architecture, OOP, TDD, Event-Driven Programming, System Design</>,
                images: []
            }
        ]
    },
    certifications: {
        display: true,
        title: 'Achievements',
        items: [
            '2nd Prize Winner at Avesta AI Hackathon — “Kudos Wall”',
            'Solved 300+ LeetCode problems (Max Rating: 1470)',
            'Recognized as a top performer in Avesta internship'
        ]
    },
    challenges: {
        display: true,
        title: 'Technical Challenges & Solutions',
        cases: [
            {
                title: 'Scaling RAG Chatbot Pipeline',
                description: 'Designed event-driven, serverless architecture for high-throughput document ingestion and semantic search.'
            },
            {
                title: 'Performance Optimization',
                description: 'Reduced Lambda cold start times and improved query latency in vector search.'
            }
        ]
    },
    learning: {
        display: true,
        title: 'Learning & Growth',
        items: [
            'Currently reading: Designing Data-Intensive Applications',
            'Exploring: Generative AI, RAG, AI Agents, LLMOps, DevOps'
        ]
    },
    professional: {
        display: true,
        title: 'Professional Development',
        items: [
            'Architecting production-grade RAG platforms',
            'Building serverless backend systems',
            'Writing clean and maintainable code with TDD'
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Blog | Backend Engineering & System Design Insights',
    description: `Technical articles by ${person.name} on backend development, system design, RAG pipelines, and building scalable AI infrastructure.`
}

const work = {
    label: 'Work',
    title: 'Projects | Backend & AI Engineering Portfolio',
    description: `Explore ${person.name}'s portfolio of backend engineering and AI projects including IngestIQ, RAG systems, and enterprise solutions.`
}

const helpfulStuff = {
    label: 'Helpful Stuff',
    title: 'Helpful Stuff',
    description: `A collection of bookmarks, helpful videos, docs, crash courses, and more by ${person.name}`,
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'vertical'
        }
    ]
}

export { person, contact, social, home, about, blog, work, helpfulStuff };