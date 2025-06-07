// src/data.jsx

// Project Images
import project1 from './assets/images/sms.png';
import project2 from './assets/images/res.png';
import project3 from './assets/images/flight1.png';
import project4 from './assets/images/rement1.png';
import project5 from './assets/images/pcos.png';

import awsLogo from "./assets/images/awsLogo.svg"
import ansibleLogo from "./assets/images/ansibleLogo.svg"
import data from './assets/images/data.png'

// Service Icons
import iconCode from "./assets/images/icons8-code.png"
import iconPhoto from "./assets/images/icons8-photo.png"
import iconAI from "./assets/images/icons8-brai.png"
import iconApp from "./assets/images/icons8-phone.png"

import preres from "./assets/images/preres.png" 

export const aboutText = [
  `I'm a Software Engineer based in the New York, with experience building scalable, intuitive web applications and cloud-native systems. I specialize in creating performant, responsive frontends and integrating them with secure, backend architectures.`,
  `Whether designing a dynamic React frontend or optimizing serverless pipelines in AWS, I bring a problem-solving mindset and a strong eye for usability. From startups to enterprise platforms, I’ve contributed to real-time apps, ML workflows, and full-stack tools that improve both function and experience.`,
];


// Services
export const services = [
  {
    iconSrc: iconCode,
    title: 'Software Engineering',
    description: 'Designing scalable systems and clean APIs with strong coding practices across full product lifecycles using Python and JavaScript.',
  },  
  {
    iconSrc: iconAI,
    title: 'AI/ML Engineering',
    description: 'Developing ML pipelines, NLP solutions, and data-driven applications using TensorFlow, PyTorch, and Scikit-learn.',
  },
  {
    iconSrc: iconApp,
    title: 'Mobile App Development',
    description: 'Building cross-platform mobile apps using Flutter and React Native with real-time features and responsive UIs.',
  },
  {
    iconSrc: iconPhoto,
    title: 'Photography',
    description: 'I enjoy photography as a creative hobby, capturing everyday moments and scenes in my free time.',
  }
  
];


export const projects = [
    {
      id: 1,
      title: "ClassEdge",
      category: "Web dev",
      image: project1,
      link: "https://www.github.com/shreyas-helix/ClassEdge",
      tags: ['Django', 'Web Dev']
    },
    {
      id: 2,
      title: "Taylrd",
      category: "Web dev",
      image: project2,
      link: "https://www.github.com/shreyas-helix/Taylrd",
      tags: ['Flask', 'ML']
    },
    {
      id: 3,
      title: "Flight Delay",
      category: "ML",
      image: project3,
      link: "https://github.com/shreyas-helix/flight-delay-2024",
      tags: ['Analytics', 'ML']
    },
    {
      id: 4,
      title: "Rement",
      category: "Applications",
      image: project4,
      link: "https://github.com/shreyas-helix/Rement-1",
      tags: ['Mobile App', 'Design']
    },
    {
      id: 5,
      title: "PCOSAssist",
      category: "ML Web dev",
      image: project5,
      link: "https://github.com/shreyas-helix/PCOSAssist",
      tags: ['Healthcare', 'ML']
    },
  ];


export const skills = [
  { name: 'HTML', icon: 'devicon-html5-plain colored' },
  { name: 'CSS', icon: 'devicon-css3-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'Django', icon: 'devicon-django-plain colored' },
  { name: 'Flask', icon: 'devicon-flask-original colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'Dart', icon: 'devicon-dart-plain colored' },
  { name: 'AWS', icon: awsLogo, type: 'svg'},
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'Terraform', icon: 'devicon-terraform-plain colored' },
  { name: 'Jenkins', icon: 'devicon-jenkins-plain colored' },
  { name: 'Ansible', icon: ansibleLogo, type:'svg' },
  { name: 'SQL', icon: 'devicon-mysql-plain colored' },
  { name: 'Data Analysis', icon: data, type:'svg' },
  { name: 'Pipelines', icon: 'devicon-apachespark-plain colored' }, // can duplicate or customize
  { name: 'Hadoop', icon: 'devicon-hadoop-plain colored' },
];

export const education = [
  {
    title: "New York University",
    duration: "2024 — 2026",
    description: "MS Computer Engineering"
  },
  {
    title: "Bangalore Institute of Technology",
    duration: "2019 — 2023",
    description: "BS Computer Science & Engineering"
  },
  {
    title: "Sri Vidya Mandir",
    duration: "2015 — 2019",
    description: "High School"
  }
];

export const experience = [
  {
    title: "Campus Collect",
    duration: "05/2025 — 08/2025",
    description: "Software Developer Intern"
  },
  {
    title: "Ellucian",
    duration: "05/2023 — 05/2024",
    description: "Cloud Software Engineer"
  },
  {
    title: "Prinston Smart Engineers",
    duration: "08/2022 — 12/2022",
    description: "Full Stack Developer Intern"
  },
]

export const resume = [
  {
    image: preres
  }
]
  // export const contactInfo = {
  //   email: "richard@example.com",
  //   phone: "+1 (213) 352-2795",
  //   birthday: "June 23, 1982",
  //   location: "Sacramento, California, USA",
  //   socials: {
  //     facebook: "#",
  //     twitter: "#",
  //     instagram: "#",
  //   },
  // };
  