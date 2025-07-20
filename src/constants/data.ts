// Navigation items for the profile card
export const navigationItems = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

// Social media links (icons will be imported in components)
export const socialLinksData = [
  {
    type: "github" as const,
    href: "https://github.com/amitsingh880266",
    label: "GitHub",
  },
  {
    type: "linkedin" as const,
    href: "https://www.linkedin.com/in/amit-5642b9198",
    label: "LinkedIn",
  },
  {
    type: "instagram" as const,
    href: "https://instagram.com/amit.singh880266",
    label: "Instagram",
  },
  {
    type: "email" as const,
    href: "mailto:amit.singh880266@gmail.com",
    label: "Email",
  },
];

// Personal information
export const personalInfo = {
  name: "Amit Singh",
  title: "Software Engineer",
  description:
    "Frontend-focused Software Engineer with 4+ years of industry experience in developing web and mobile applications. Proven track record of building scalable and user-friendly interfaces using React and React Native, reaching thousands of users. Passionate about delivering digital solutions that solve real-world challenges and improve user experience.",
};

// Experience data
export const experienceData = [
  {
    title: "Senior Software Engineer",
    company: "Vectoscalar Technologies Private Limited",
    duration: "July 2022 - Present",
    description:
      "Leading frontend development initiatives and architecting scalable solutions using React and TypeScript. Spearheading the development of enterprise-level applications and mentoring junior developers. Implemented design systems and best practices that improved team productivity and code quality across multiple projects.",
    skills: ["React", "TypeScript", "React Native", "Leadership", "Mentoring"],
  },
  {
    title: "Software Engineer",
    company: "Vectoscalar Technologies Private Limited",
    duration: "Jan 2021 - June 2022",
    description:
      "Developed and maintained web and mobile applications using modern frontend technologies. Collaborated with cross-functional teams to deliver high-quality software solutions. Gained expertise in React Native development and contributed to multiple successful product launches including projects for major clients like Google, British Petroleum, and Pokerbaazi.",
    skills: [
      "React",
      "React Native",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Firebase",
    ],
  },
];

// Projects data
export const projectsData = [
  {
    title: "British Petroleum - Lens",
    company: "British Petroleum",
    duration: "July 2023 – Present",
    description:
      "Led frontend development for web and mobile apps with React and TypeScript. Collaborated with the team to develop a feature that automated the learning content creation process for BP, eliminating manual efforts and enabling the creation of over 1500+ documents through the solution till now. Developed independent features and contributed as a full-stack developer, working on both frontend and backend aspects of the application.",
    technologies: [
      "React",
      "TypeScript",
      "Full-Stack Development",
      "Automation",
    ],
    image: "/bp-lens.png",
    imageAlt: "British Petroleum Lens Application",
  },
  {
    title: "Pokerbaazi - Pokerboss",
    company: "Pokerbaazi",
    duration: "March 2023 – June 2023",
    description:
      "A mobile application built using React Native, Redux, and Firebase, where users can play poker games and earn rewards. Contributed to the initial application setup and developed reusable UI components using React Native and TypeScript, ensuring consistent and efficient UI development.",
    technologies: ["React Native", "Redux", "Firebase", "TypeScript"],
    image: "/pokerboss.png",
    imageAlt: "Pokerboss Mobile Application",
  },
  {
    title: "Google - Simsim",
    company: "Google",
    duration: "March 2023 – February 2024",
    description:
      "A web and mobile app for a social e-commerce platform, with the Front end built using React Native with Redux and react-native-web for cross-platform compatibility. Maintained and upgraded the Product Detail Page (PDP) and Video Commerce features. Focused on improving site speed metrics and monitoring React Web Vitals. Integrated Google Analytics to measure user behavior. Managed and upgraded CleverTap for campaigns and notifications.",
    technologies: [
      "React Native",
      "Redux",
      "React Native Web",
      "Google Analytics",
      "CleverTap",
    ],
    image: "/simsim.png",
    imageAlt: "Google Simsim Application",
  },
  {
    title: "Digitaiken - Hikinjo",
    company: "Digitaiken",
    duration: "May 2022 – March 2023",
    description:
      "Worked on the application development from scratch, including the initial setup and features like collecting precise user addresses using Google Maps and other geolocation APIs. Developed the in-app chat feature using Sendbird and contributed to several other application features. Mentored junior developers, providing support and conducting code reviews to ensure high-quality code.",
    technologies: [
      "React Native",
      "Google Maps API",
      "Sendbird",
      "Geolocation APIs",
    ],
    image: "/hikinjo.png",
    imageAlt: "Hikinjo Location-based Application",
  },
  {
    title: "BuyStars",
    company: "BuyStars",
    duration: "October 2021 – April 2022",
    description:
      "Collaborated on various modules such as stock buy and sell, portfolio management, and user team profiles. Developed a notification system that efficiently sends promotions and important updates to millions of users, utilizing MoEngage and Firebase for analytics and engagement.",
    technologies: ["React", "MoEngage", "Firebase", "Portfolio Management"],
    image: "/buystars.png",
    imageAlt: "BuyStars Trading Platform",
  },
  {
    title: "Voyapic",
    company: "Voyapic",
    duration: "April 2021 – September 2021",
    description:
      "Took responsibility for features like location tracking and offline mode, and developed various new screens. Integrated the camera module to enable users to click pictures within the app.",
    technologies: [
      "React Native",
      "Location Tracking",
      "Camera Integration",
      "Offline Mode",
    ],
    image: "/voyapic.png",
    imageAlt: "Voyapic Photo Application",
  },
];

// About me content
export const aboutContent = [
  "I'm a Frontend Engineer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.",
  "Currently, I'm a Senior Software Engineer at Vectoscalar Technologies, where I lead frontend development initiatives and architect scalable solutions using React and TypeScript. I spearhead the development of enterprise-level applications while mentoring junior developers and implementing design systems that improve team productivity across multiple projects.",
  "In the past, I've had the opportunity to develop software across a variety of settings — from major corporations like Google and British Petroleum to innovative startups like Pokerbaazi and digital product studios. I've contributed to successful product launches that reach thousands of users, specializing in React Native development and cross-platform solutions.",
  "In my spare time, I'm usually exploring new frontend technologies, contributing to open-source projects, reading about web accessibility best practices, or building side projects that solve real-world challenges.",
];
