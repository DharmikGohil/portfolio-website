import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Dharmik',
    lastName: 'Gohil',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'AI Product Engineer @AvestaLabs.ai | Building Ingestiq.ai',
    avatar: '/images/avatar.jpg',
    location: 'Ahmedabad, Gujarat, India',
    languages: ['English', 'Hindi', 'Gujarati']
}

const contact = {
    display: true,
    title: <>Get in touch with me</>,
    description: <>Have a project in mind, want to collaborate, or just want to say hello? I'd love to hear from you! Fill out the form below and I'll get back to you as soon as possible.</>,
    email: 'dharmikgohil.dev@gmail.com'
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
    title: `${person.name} | AI Product Engineer`,
    description: `Dharmik Gohil, AI Product Engineering @AvestaLabs.ai. Building Ingestiq.ai, an Agentic RAG Platform. Software Engineer with a product mindset who loves solving problems.`,
    headline: <>AI Product Engineer </>,
    subline: <>I'm Dharmik, building <InlineCode>Ingestiq.ai</InlineCode>, an Agentic RAG Platform. Software Engineer with a product mindset specializing in Backend Development, AI Infrastructure, and Serverless Architecture. Passionate about building scalable, intelligent systems that bridge data engineering and applied AI.</>
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
        display: false,
        title: 'Introduction',
        description: <></>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'AvestaLabs.ai',
                companyUrl: 'https://avestalabs.ai',
                timeframe: 'Jul 2025 – Present',
                role: 'Software Engineer, Product & AI Engineering',
                location: 'Ahmedabad, Gujarat',
                type: 'Full Time',
                achievements: [
                    <>Architecting IngestIQ.ai, a production-grade RAG platform for ingesting, chunking, embedding, and semantic retrieval.</>,
                    <>Built event-driven ingestion pipelines and vector database indexing workflows.</>,
                    <>Integrated Model Context Protocol (MCP) for structured agent context.</>,
                    <>Implemented query embeddings and LLM-based semantic chunking to improve retrieval accuracy and contextual relevance across the RAG pipeline.</>
                ],
                techStack: ['TypeScript', 'RAG', 'MCP', 'AWS', 'PostgreSQL', 'Vector DBs', 'Docker', 'Clean Architecture'],
                images: []
            },
            {
                company: 'AvestaHQ.com',
                companyUrl: 'https://avestahq.com',
                timeframe: 'Apr 2025 – Jul 2025',
                role: 'Backend Software Engineer',
                location: 'Ahmedabad, Gujarat',
                type: 'Full Time',
                achievements: [
                    <>Built serverless backend pipelines to process and migrate CSV and structured data to MySQL using AWS Lambda and Step Functions.</>,
                    <>Designed database schemas and implemented layered architecture with unit, integration, and E2E tests, ensuring reliable processing of thousands of records daily.</>,
                    <>Developed ETL workflows integrating MySQL and Elasticsearch for ingestion, transformation, and search indexing.</>,
                    <>Ensured production readiness, scalability, and observability through proper error handling, retry logic, logging, and TDD.</>
                ],
                techStack: ['TypeScript', 'AWS Lambda', 'Step Functions', 'Elasticsearch', 'MySQL', 'TDD', 'Serverless', 'Clean Architecture'],
                images: []
            },
            {
                company: 'AvestaHQ.com',
                companyUrl: 'https://avestahq.com',
                timeframe: 'Jul 2024 – Apr 2025',
                role: 'Software Engineer Intern',
                location: 'Ahmedabad, Gujarat',
                type: 'Internship',
                achievements: [
                    <>Developed REST APIs using Node.js and Express.js following OOP and clean code practices.</>,
                    <>Worked with AWS, Elasticsearch, and MySQL for backend systems.</>,
                    <>Implemented unit, integration, and E2E tests for production readiness.</>,
                    <>Practiced Test-Driven Development (TDD).</>
                ],
                techStack: ['Node.js', 'Express.js', 'MySQL', 'AWS', 'Elasticsearch', 'OOP', 'TDD'],
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
                degree: "Bachelor's of Engineering, Computer Engineering",
                timeframe: 'Jun 2020 - Jul 2024',
                description: <>CGPA: 8.37/10</>,
            },
            {
                name: 'Shree Swaminarayan Gurukul, Taravada, Amreli',
                degree: '12th Science (GSHEB)',
                timeframe: 'Mar 2020',
                description: <></>,
            },
            {
                name: 'Shree Swaminarayan Gurukul, Taravada, Amreli',
                degree: '10th Standard (GSEB)',
                timeframe: 'Mar 2018',
                description: <></>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'Backend',
                description: <>Node.js, TypeScript, Express.js</>,
                images: []
            },
            {
                title: 'AI Systems',
                description: <>RAG, Agents, LLM Integration, Vector Databases</>,
                images: []
            },
            {
                title: 'Cloud & Infra',
                description: <>AWS Lambda, Step Functions, S3, OpenSearch, PostgreSQL, MySQL</>,
                images: []
            },
            {
                title: 'Architecture',
                description: <>Clean Architecture, Layered Design, TDD, Event-Driven Systems</>,
                images: []
            },
            {
                title: 'Core CS',
                description: <>SDLC, Data Structures & Algorithms, Compilers</>,
                images: []
            }
        ]
    },
    certifications: {
        display: true,
        title: 'Achievements',
        items: [
            '2nd Prize Winner at Avesta AI Hackathon - “Kudos Wall”',
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
    title: 'Blog | AI Product Engineering & Backend Insights',
    description: `Technical articles by ${person.name} on AI infrastructure, RAG pipelines, backend development, and building scalable systems.`
}

const work = {
    label: 'Work',
    title: 'Projects | AI Product Engineering & Backend Portfolio',
    description: `Explore ${person.name}'s portfolio of AI product engineering and backend projects including Ingestiq.ai, RAG systems, and enterprise solutions.`
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