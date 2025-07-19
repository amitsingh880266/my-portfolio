import React from "react";
import "./ProjectItem.scss";

interface ProjectItemProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  image?: string;
  imageAlt?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  company,
  duration,
  description,
  technologies,
  image,
  imageAlt,
}) => {
  return (
    <div className="project-item">
      {image && (
        <div className="project-item__image">
          <img
            src={image}
            alt={imageAlt || title}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      <div className="project-item__content">
        <div className="project-item__header">
          <h3 className="project-item__title">{title}</h3>
          <span className="project-item__company">{company}</span>
          <span className="project-item__duration">{duration}</span>
        </div>
        <p className="project-item__description">{description}</p>
        <div className="project-item__tech">
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
