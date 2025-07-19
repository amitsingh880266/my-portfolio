import React from "react";
import ProfileCard from "../components/ProfileCard";
import ProjectItem from "../components/ProjectItem";
import Skills from "../components/Skills";
import "./Home.scss";

const Home: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "British Petroleum - Lens",
      company: "British Petroleum",
      duration: "July 2023 – Present",
      description:
        "Led frontend development for web and mobile apps with React and TypeScript. Collaborated with the team to develop a feature that automated the learning content creation process for BP, eliminating manual efforts and enabling the creation of over 180+ documents through the solution till now. Developed independent features and contributed as a full-stack developer, working on both frontend and backend aspects of the application.",
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
      duration: "April 2022 – February 2023",
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

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__profile">
          <ProfileCard onNavigate={scrollToSection} />
        </div>

        <div className="home__content">
          <section id="about" className="home__section">
            <div className="home__section-content">
              <p>
                Welcome to my digital space! I'm a passionate Frontend Engineer
                with over 3 years of experience creating exceptional user
                experiences. My journey in web development started with a
                fascination for how design and code come together to create
                something beautiful and functional.
              </p>

              <p>
                I specialize in modern frontend technologies including React,
                TypeScript, and advanced CSS/SCSS. My approach combines
                technical expertise with a keen eye for design, ensuring every
                project I work on delivers both outstanding performance and
                pixel-perfect visual execution.
              </p>

              <p>
                What drives me is the opportunity to solve complex problems
                through clean, maintainable code while creating interfaces that
                users genuinely enjoy interacting with. I believe in the power
                of thoughtful design systems and component-driven development to
                build scalable, accessible web applications.
              </p>
            </div>
          </section>

          <section id="experience" className="home__section">
            <div className="home__section-content">
              <div className="experience-item">
                <div className="experience-item__header">
                  <h3 className="experience-item__title">
                    Senior Software Engineer
                  </h3>
                  <span className="experience-item__company">
                    Vectoscalar Technologies Private Limited
                  </span>
                  <span className="experience-item__duration">
                    July 2022 - Present
                  </span>
                </div>
                <p className="experience-item__description">
                  Leading frontend development initiatives and architecting
                  scalable solutions using React and TypeScript. Spearheading
                  the development of enterprise-level applications and mentoring
                  junior developers. Implemented design systems and best
                  practices that improved team productivity and code quality
                  across multiple projects.
                </p>
                <div className="experience-item__skills">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>React Native</span>
                  <span>Leadership</span>
                  <span>Mentoring</span>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-item__header">
                  <h3 className="experience-item__title">Software Engineer</h3>
                  <span className="experience-item__company">
                    Vectoscalar Technologies Private Limited
                  </span>
                  <span className="experience-item__duration">
                    Jan 2021 - June 2022
                  </span>
                </div>
                <p className="experience-item__description">
                  Developed and maintained web and mobile applications using
                  modern frontend technologies. Collaborated with
                  cross-functional teams to deliver high-quality software
                  solutions. Gained expertise in React Native development and
                  contributed to multiple successful product launches including
                  projects for major clients like Google, British Petroleum, and
                  Pokerbaazi.
                </p>
                <div className="experience-item__skills">
                  <span>React</span>
                  <span>React Native</span>
                  <span>JavaScript</span>
                  <span>TypeScript</span>
                  <span>Redux</span>
                  <span>Firebase</span>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="home__section">
            <div className="home__section-content">
              <Skills />
            </div>
          </section>

          <section id="projects" className="home__section">
            <div className="home__section-content">
              {projects.map((project, index) => (
                <ProjectItem
                  key={index}
                  title={project.title}
                  company={project.company}
                  duration={project.duration}
                  description={project.description}
                  technologies={project.technologies}
                  image={project.image}
                  imageAlt={project.imageAlt}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
