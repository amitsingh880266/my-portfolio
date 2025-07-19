import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaJs,
  FaCog,
  FaGithub,
} from "react-icons/fa";
import "./Skills.scss";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <FaJs /> },
      ],
    },
    {
      category: "UI Technologies",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "React Native", icon: <FaReact /> },
        { name: "Redux", icon: <FaCog /> },
        { name: "MST", icon: <FaCog /> },
        { name: "Zustand", icon: <FaCog /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "SASS", icon: <FaSass /> },
        { name: "Material UI", icon: <FaCog /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
      ],
    },
    {
      category: "Familiar with",
      skills: [
        { name: "C# .NET", icon: <FaCog /> },
        { name: "NodeJS", icon: <FaNodeJs /> },
      ],
    },
    {
      category: "Analytics",
      skills: [
        { name: "Google Analytics", icon: <FaCog /> },
        { name: "MoEngage", icon: null },
      ],
    },
    {
      category: "Build Management",
      skills: [
        { name: "GitHub Actions", icon: <FaGithub /> },
        { name: "CI/CD", icon: null },
      ],
    },
  ];

  return (
    <div className="skills">
      <h2 className="skills__title">Technical Skills</h2>
      <div className="skills__container">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skills__category">
            <h3 className="skills__category-title">{category.category}</h3>
            <div className="skills__list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skills__item">
                  {skill.icon && (
                    <span className="skills__icon">{skill.icon}</span>
                  )}
                  <span className="skills__name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
