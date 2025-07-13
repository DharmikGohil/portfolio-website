import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Dharmik',
    lastName:  'Gohil',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Backend + Data + AI Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Ahmedabad, Gujarat, India',
    languages: ['English', 'Hindi', 'Gujarati']
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about backend engineering, system design, and share insights on building scalable architectures and AI systems.</>
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
        link: 'mailto:gohildharmik2020@gmail.com',
    },
    {
        name: 'Twitter',
        icon: 'x',
        link: 'http://x.com/dharmikgohil_',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Backend + Data + AI Engineer specializing in system design, RAG chatbots, and scalable architectures`,
    headline: <>Backend + Data + AI Engineer</>,
    subline: <>I'm Dharmik, currently working at <InlineCode>Avesta Technologies</InlineCode> where I design RAG-based chatbots and serverless data processing pipelines. I'm passionate about clean architecture, TDD, and building systems that are reliable, performant, and easy to maintain.</>
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
        description: <>I'm a Backend + Data + AI Engineer passionate about system design and building scalable, event-driven architectures. I currently work at Avesta Technologies where I design RAG-based chatbots and serverless data processing pipelines using AWS Lambda, PostgreSQL, and Elasticsearch. I strongly believe in writing clean code, practicing TDD, and building systems that are reliable, performant, and easy to maintain.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Avesta Technologies',
                timeframe: 'Apr 2025 - Present',
                role: 'Backend AI Software Engineer',
                achievements: [
                    <>Currently building an RAG-based pipeline for a knowledge-based chatbot using event-driven architecture</>,
                    <>Implemented AWS Lambda functions to process/manage data from PostgreSQL and Elasticsearch</>,
                    <>Built serverless backend systems with a focus on cost-efficiency, scalability, and clean code</>,
                    <>Practiced TDD, modular development, and layered design principles</>
                ],
                images: []
            },
            {
                company: 'Avesta Technologies',
                timeframe: 'Jul 2024 - Apr 2025',
                role: 'Backend Developer Intern',
                achievements: [
                    <>Developed RESTful APIs using Node.js + Express with focus on OOP and TDD</>,
                    <>Applied system design principles for scalable applications</>,
                    <>Hands-on experience with MySQL, Elasticsearch, AWS services, and Linux</>,
                    <>Focused on clean architecture, efficient data flow, and production-grade code</>
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
                description: <>Bachelor of Engineering in Computer Engineering (CGPA: 8.37/10)</>,
            },
            {
                name: 'Shree Swaminarayan Gurukul, Taravada',
                description: <>12th Science (GSHEB) - 82.16% | 10th Standard (GSEB) - 94.17% | JEE Mains Score: 90.14%</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'Backend Development',
                description: <>Node.js, Express.js, AWS Lambda, REST APIs, Event-Driven Architecture, Clean Code Principles, TDD</>,
                images: []
            },
            {
                title: 'Databases & Search',
                description: <>PostgreSQL, MySQL, Elasticsearch, Data Processing, Serverless Architecture</>,
                images: []
            },
            {
                title: 'Programming Languages',
                description: <>JavaScript/TypeScript, Java, Python, C#, SQL with focus on OOP and system design</>,
                images: []
            }
        ]
    },
    certifications: {
        display: true,
        title: 'Certifications & Achievements',
        items: [
            'Won an AI Hackathon at Avesta Technologies',
            'Solved 300+ problems on LeetCode'
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
            'Developed a RAG-based chatbot for a knowledge-based application',
            'Developed a serverless data processing pipeline for a knowledge-based application',
            'Write clean and maintainable code with Tests'
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about backend engineering and system design...',
    description: `Read what ${person.name} has been up to recently`
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Backend and AI projects by ${person.name}`
}

const helpfulStuff = {
    label: 'Helpful Stuff',
    title: 'Helpful Stuff',
    description: `A collection of bookmarks, helpful videos, docs, crash courses, and more by ${person.name}`,
    // Optionally, keep images or replace with resources array later
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

export { person, newsletter, social, home, about, blog, work, helpfulStuff };