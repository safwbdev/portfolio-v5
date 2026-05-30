import dchu_0 from './assets/projects/dchu_0.webp';
import sha_0 from './assets/projects/sha_0.webp';
import twdlm_0 from './assets/projects/twdlm_0.webp';
import uaeEstate from './assets/projects/uaeestate.png';
import cryptostonks from './assets/projects/cryptostonks.png';
import voyaqo from './assets/projects/voyaqo.png';
import webRiff from './assets/projects/webRiff.png';
import ticketvault from './assets/projects/ticketvault.png';
import pulse from './assets/projects/pulse.png';
import medcore from './assets/projects/medcore.png';

export const NAV_LINKS = [
    { href: '#about', label: 'ABOUT' },
    { href: '#skills', label: 'SKILLS' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#experience', label: 'EXPERIENCE' },
    { href: '#education', label: 'EDUCATION' },
    { href: '#certifications', label: 'CERTS' },
    { href: '#contact', label: 'CONTACT' },
];


export const SKILLS = [
    {
        title: '// FRONTEND FRAMEWORKS & LIBRARIES',
        pills: ['React', 'React Native', 'Next.js', 'Vue', 'Nuxt', 'Three.js', 'Redux', 'React Query', 'TanStack', 'Vuex', 'Pinia', 'Flutter'],
    },
    {
        title: '// LANGUAGES & MARKUP',
        pills: ['JavaScript', 'TypeScript', 'ES6', 'HTML5', 'CSS3', 'SASS/SCSS', 'PHP', 'Java'],
    },
    {
        title: '// UI & STYLING',
        pills: ['Tailwind CSS', 'Material UI', 'Bootstrap', 'Styled Components', 'Responsive Design', 'Adaptive Design', 'UI/UX Design'],
    },
    {
        title: '// BACKEND & DATABASES',
        pills: ['Node.js', 'NestJS', 'Express.js', 'Code Igniter', 'Strapi', 'MongoDB', 'Firebase', 'MySQL', 'PostgreSQL', 'Prisma', 'REST API', 'WebSockets', 'Microservices'],
    },
    {
        title: '// DEVOPS & CLOUD',
        pills: ['Docker', 'CI/CD', 'Google Cloud Platform', 'AWS', 'Git', 'GitHub', 'Bitbucket', 'Sourcetree', 'NPM', 'Yarn'],
    },
    {
        title: '// TOOLS & SOFTWARE',
        pills: ['VS Code', 'Android Studio', 'Postman', 'Swagger', 'Jest', 'Developer Tools', 'Figma', 'Zeppelin', 'Photoshop'],
    },
    {
        title: '// GAME DEVELOPMENT',
        pills: ['Construct 3', 'Defold', 'Three.js', 'WebGL', 'Game Development'],
    },
    {
        title: '// PRACTICES & METHODOLOGIES',
        pills: ['Web Development', 'Mobile Development', 'OOP', 'SDLC', 'SEO', 'Agile', 'SCRUM', 'Project Management', 'Jira', 'Confluence', 'Trello'],
    },
];

export const EXPERIENCE = [
    {
        date: 'APR 2022 — NOV 2024', location: 'Kuala Lumpur, Malaysia',
        company: 'Streamline Media Group', role: 'Web Application Developer',
        desc: 'Built and maintained scalable web applications for a global digital media company. Led frontend development efforts using React and TypeScript across multiple product lines.',
    },
    {
        date: 'NOV 2021 — APR 2022', location: 'Kuala Lumpur, Malaysia',
        company: 'The Access Group', role: 'Support Developer',
        desc: 'Provided technical support and development assistance for enterprise software products. Diagnosed and resolved complex bugs across client-facing and internal platforms.',
    },
    {
        date: 'APR 2020 — JUL 2020', location: 'Kuala Lumpur, Malaysia',
        company: 'OlivesTouch Technologies Sdn. Bhd.', role: 'Full-Stack Developer',
        desc: 'Developed full-stack features for client web platforms. Worked across the entire stack from database design to frontend implementation using modern JavaScript frameworks.',
    },
    {
        date: 'JAN 2019 — NOV 2019', location: 'Kuala Lumpur, Malaysia',
        company: 'Sureplify Sdn. Bhd.', role: 'Web Developer · Part-time Freelance',
        desc: 'Delivered custom web development solutions on a freelance basis. Built responsive interfaces and integrated third-party APIs for various client projects.',
    },
    {
        date: 'OCT 2017 — NOV 2019', location: 'Kuala Lumpur, Malaysia',
        company: 'Packist · Beautiful World Tours & Travel Sdn. Bhd.', role: 'Front End Developer',
        desc: 'Built the frontend of a travel and tour booking platform. Implemented responsive UI components, booking flows, and itinerary management interfaces.',
    },
    {
        date: 'AUG 2014 — FEB 2017', location: 'Kuala Lumpur, Malaysia | Singapore',
        company: 'The Affiniti Direct Sdn. Bhd.', role: 'Web Developer',
        desc: 'Designed and developed web solutions for a direct marketing company. Built and maintained customer-facing interfaces and internal tools supporting sales and campaign operations.',
    },
    {
        date: 'APR 2014 — JUL 2014', location: 'Kuala Lumpur, Malaysia',
        company: 'Mindvalley Sdn. Bhd.', role: 'Intern Web Developer',
        desc: 'Gained hands-on experience at one of Southeast Asia\'s leading personal development companies. Contributed to frontend development tasks and learned production web workflows.',
    },
];

export const EDUCATION = [
    { degree: 'Master of Technology', field: 'Internet & Web Computing', uni: 'RMIT University', loc: 'Melbourne, Australia' },
    { degree: 'BSc in Information Technology', field: 'Multimedia Systems', uni: 'Lancaster University', loc: 'Kuala Lumpur, Malaysia' },
    { degree: 'Diploma in Interactive Media', field: 'Interactive Media', uni: 'Sunway University', loc: 'Kuala Lumpur, Malaysia' },
];

export const CERTIFICATIONS = [
    { name: 'Project Management Essentials', issuer: 'Swinburne University of Technology', loc: 'Melbourne, Australia', year: '2017' },
    { name: 'Android Certified Associate Developer', issuer: 'iTrain', loc: 'Kuala Lumpur, Malaysia', year: '2019' },
    { name: 'NLP Certified Practitioner', issuer: 'RAW NLP', loc: 'Kuala Lumpur, Malaysia', year: '2019' },
];

export const PROJECTS_PERSONAL = [
    {
        num: '01', title: 'Voyaqo',
        desc: 'Having done some work in the travel & Tourism industry made me want to make my own travel booking site with some extra spice.',
        tags: ['React', 'sass'],
        github: 'https://github.com/safwbdev/travel-site', demo: 'https://voyaqo.netlify.app/',
        thumb: voyaqo,
    },
    {
        num: '02', title: 'Cryptostonks',
        desc: 'A Crypto/BitCoin App showcasing charted crypto data in real time.',
        tags: ['React', 'REST API', 'TypeScript', 'Tailwind'],
        github: 'https://github.com/safwbdev/cryptostonks-mk2', demo: 'https://cryptostonks.netlify.app',
        thumb: cryptostonks,
    },
    {
        num: '03', title: 'Web Riff',
        desc: 'Web-based rhythm game inspired by Guitar Hero, built with React and Three.js. Features fast-paced note tracking, responsive gameplay, animated 3D visuals, and real-time score mechanics designed for browser play.',
        tags: ['React', 'Three.js'],
        github: 'https://github.com/safwbdev/guitar-hero', demo: 'https://startling-pasca-58cd3f.netlify.app/',
        thumb: webRiff,
    },
    {
        num: '04', title: 'Ticket Vault',
        desc: 'Online ticketing platform for discovering and purchasing event tickets with ease. Features secure payments, digital ticket access, event discovery tools, and a streamlined experience optimized for web and mobile users.',
        tags: ['Vue', 'Vuetify', 'Pinia'],
        github: 'https://github.com/safwbdev/ticketing-app', demo: 'https://ticketvaultv2.netlify.app/',
        thumb: ticketvault,
    },
    {
        num: '05', title: 'Pulse Tracker',
        desc: 'Offline-first workout tracking app designed for gym training and personal fitness management. Features workout logging, exercise history, progress tracking, and local data storage for fast, reliable access without an internet connection.',
        tags: ['React', 'Zustand', 'Tailwind', 'Shadcn UI', 'Framer Motion'],
        github: 'https://github.com/safwbdev/gym-tracker', demo: 'https://puls3tracker.netlify.app/',
        thumb: pulse,
    },
    {
        num: '06', title: 'Medcore',
        desc: 'SaaS-based appointment management platform for healthcare providers and patients. Features online appointment booking, schedule management, patient records, automated reminders, and a responsive interface designed to streamline clinic operations.',
        tags: ['Next Js', 'Zustand', 'Tanstack', 'Chakra UI', 'Framer Motion'],
        github: 'https://github.com/safwbdev/medic-manager', demo: 'https://medcore-two.vercel.app/',
        thumb: medcore,
    },
    {
        num: '07', title: 'Real UAEstate',
        desc: 'Looking for properties to buy or rent in the UAE? This real estate App built with Nest.js can help!',
        tags: ['Next js', 'REST API', 'Framer Motion'],
        github: 'https://github.com/safwbdev/real_estate_app', demo: 'https://real-estate-app-9xtoswesk-safwbdev.vercel.app/',
        thumb: uaeEstate,
    },

];

export const PROJECTS_CLIENT = [
    {
        num: '01', title: 'DC Heroes United',
        desc: 'Interactive DC experience blending a community-driven TV series with a Vampire Survivors-style survival game. Play as Justice League heroes, earn currency, and vote with other players to shape each week’s episode outcomes.',
        tags: ['HTML/CSS/JS', 'Maps API', 'LocalStorage'],
        github: 'https://dcheroesunited.com/credits/',
        demo: 'https://play.google.com/store/apps/details?id=com.genvid.burbank&hl=en&pli=1',
        thumb: dchu_0,
    },
    {
        num: '02', title: 'Silent Hill Ascension',
        desc: 'Interactive horror streaming series where players shape the fate of characters facing supernatural threats worldwide. Winner of a 2024 Creative Arts Emmy and multiple Webby Awards for innovation in interactive storytelling.',
        tags: ['React', 'AST Parsing', 'Interpreter', 'TypeScript'],
        github: 'https://www.mobygames.com/game/211166/silent-hill-ascension/credits/browser/?autoplatform=true',
        demo: 'https://genvid.com/silent-hill-ascension/',
        thumb: sha_0,
    },
    {
        num: '03', title: 'The Walking Dead: Last Mile',
        desc: 'Persistent interactive experience based on The Walking Dead franchise, where players influence the survival of two groups navigating a zombie-infested Alaska through a Facebook Instant Game.',
        tags: ['TypeScript', 'CRDT', 'WebSockets', 'React'],
        github: 'https://www.mobygames.com/game/188112/the-walking-dead-last-mile/credits/browser/?autoplatform=true',
        demo: 'https://genvid.com/titles/the-walking-dead-last-mile/',
        thumb: twdlm_0,
    },
];

export const CONTACTS = {
    email: "stefaan.fangman@yahoo.com",
    github: "https://github.com/safwbdev",
    linkedin: "https://www.linkedin.com/in/stefaanarizfangman/",
    mobygames: "https://www.mobygames.com/person/1280466/stefaan-ariz-fangman/",
    resume: "https://drive.google.com/file/d/1ZWl70WSwkBDoUPJ1GA96o1YX6d94wk7X/view?usp=drive_link",
}