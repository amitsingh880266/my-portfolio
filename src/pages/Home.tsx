import React from "react";
import ProfileCard from "../components/ProfileCard";
import ProjectItem from "../components/ProjectItem";
import Skills from "../components/Skills";
import { projectsData, experienceData, aboutContent } from "../constants/data";
import { FaChevronUp } from "react-icons/fa";
import "./Home.scss";

const Home: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    const contentElement = document.querySelector(".home__content");
    if (contentElement) {
      contentElement.scrollTo({ top: 0, behavior: "smooth" });
      contentElement.scrollTop = 0;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__profile">
          <ProfileCard onNavigate={scrollToSection} />
        </div>

        <div className="home__content">
          <section id="about" className="home__section">
            <div className="home__section-content">
              {aboutContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section id="experience" className="home__section">
            <div className="home__section-content">
              {experienceData.map((experience, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-item__header">
                    <h3 className="experience-item__title">
                      {experience.title}
                    </h3>
                    <span className="experience-item__company">
                      {experience.company}
                    </span>
                    <span className="experience-item__duration">
                      {experience.duration}
                    </span>
                  </div>
                  <p className="experience-item__description">
                    {experience.description}
                  </p>
                  <div className="experience-item__skills">
                    {experience.skills.map((skill, skillIndex) => (
                      <span key={skillIndex}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="home__section">
            <div className="home__section-content">
              <Skills />
            </div>
          </section>

          <section id="projects" className="home__section">
            <div className="home__section-content">
              {projectsData.map((project, index) => (
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

        <button
          className="home__scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaChevronUp size={16} />
          <span style={{ fontSize: "10px", marginLeft: "2px" }}>UP</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
