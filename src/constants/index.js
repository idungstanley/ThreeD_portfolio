import {
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  upwork,
  myrioi,
  huawei,
  carrent,
  aiproject,
  alsoit,
  threejs,
  shingirai,
  snapgram,
  amaury
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Test Automation Engineer',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
]

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company_name: 'ALSOIT PM.LTD',
    icon: alsoit,
    iconBg: '#ffff',
    date: 'February 2022 – Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
      'Developed new features and enhancements for the application using React and TypeScript.',
    ],
  },
  {
    title: 'Frontend Developer & Automation Engineering ',
    company_name: 'MYRIOI Solutions Limited',
    icon: myrioi,
    iconBg: '#e1eef2',
    date: 'Feb 2020 - Jan 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'I collaborated with a solution company specializing in the development of tailored solutions for diverse clients.',
      'Creating a website where the client can easily upload images and update websites independently.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'HUAWEI TECHNOLOGIES',
    icon: huawei,
    iconBg: '#ffff',
    date: 'Dec 2020 – Jan 2022',
    points: [
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
      'Attending conferences on a national and international level.',
      'Created full-stack dashboards using the companys customized tools, including CSS, higher-order JavaScript, and many other packages.',
      'Troubleshooting automation software and completing system solutions.',
      'Constantly resolving software bugs provided by the QA team in reports.',
    ],
  },
  {
    title: 'Freelance Frontend Developer',
    company_name: 'Upwork',
    icon: upwork,
    iconBg: '#ffff',
    date: 'Jan 2021 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I had the privilege of working with Stanely on Web Development projects at Microverse.Stanley is a proactive, result- oriented, responsible, and technically sound colleague and he is always ready to put all his energy and time to get the job done...',
    name: 'Shingirai Bhengesa',
    designation: 'Code reviewer',
    company: 'Microverse',
    image: shingirai,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Stanley does.",
    name: 'Ranti Familusi',
    designation: 'CEO',
    company: 'MYRIOI Solutions Limited',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Stanley optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Amaury Perez',
    designation: 'Full-stack Developer',
    company: 'PwC México',
    image: amaury,
  },
]

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'Next',
        color: 'blue-text-gradient',
      },
      {
        name: 'Typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/idungstanley/car_showcase',
  },
  {
    name: 'AI Article Summarizer',
    description:
      "Web application that summarizes any kind of article with just one click using the powerful OpenAI model.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'rapidApi',
        color: 'green-text-gradient',
      },
      {
        name: 'redux toolkit query',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: aiproject,
    source_code_link: 'https://github.com/idungstanley/AI_article_summarizer',
  },
  {
    name: 'Stanfits Snap',
    description:
      'Excited to introduce STANFITS SNAP— a cutting-edge social media platform that empowers users to create profiles, share captivating photos, craft engaging captions, follow friends, and save standout posts. Experience seamless exploration with our infinite scroll feature. Elevate your social presence effortlessly!',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'redux',
        color: 'blue-text-gradient',
      },
      {
        name: 'AppWrite',
        color: 'green-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'pink-text-gradient',
      },
    ],
    image: snapgram,
    source_code_link: 'https://github.com/idungstanley/Stanfits_Snapgram',
  },
]

export { services, technologies, experiences, testimonials, projects }
