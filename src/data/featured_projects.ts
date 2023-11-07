import type { FeaturedProject } from '../types';

export const FEATURED_PROJECTS: FeaturedProject[] = [
    {
        projectTitle: 'Resume Builder Application',
        projectLink: 'https://junior-resume-builder.netlify.app/',
        projectImage: {
            imageCaption: 'React Typescript Resume Builder Application',
            imageLink: '/project_images/resume_builder.png'
        },
        projectDesc: "Multi-step resume builder application built with react, typescript, and tailwind. Heaviliy uses contextAPI, timeout, intervals. Reduced re-renders for optimization. Used ContextAPI, timeouts and setIntervals for real-time tempate updates."
    },
    {
        projectTitle: 'Wether Dashboard',
        projectLink: 'https://weather-music-player.netlify.app/',
        projectImage: {
            imageCaption: 'React Typescript Wether Dashboard',
            imageLink: '/project_images/wether_dashboard.png'
        },
        projectDesc: "Wether dashboard developed with react and typescript. Fetches wether data from a third-party api. Features a fully functional music-player developed using WebAudio API and CanvasAPI for freaquency band visualization."
    },
    {
        projectTitle: 'Past Exam Paper Database',
        projectLink: 'https://pastpaperdatabase.netlify.app/',
        projectImage: {
            imageCaption: 'A database of past exam papers for sri lankan students',
            imageLink: '/project_images/ppdb.png'
        },
        projectDesc: "Simple website developed with astro.js and firebase to store past exam papers for Sri Lankan school students."
    },
    {
        projectTitle: 'Car Rental Service Laning Page',
        projectLink: 'https://crslp.netlify.app/',
        projectImage: {
            imageCaption: 'landing page of a car rental service built with react typescript tailwind gsap',
            imageLink: '/project_images/crslp.png'
        },
        projectDesc: "Modern landing page developed with React, Tailwind, GSAP."
    },
];
