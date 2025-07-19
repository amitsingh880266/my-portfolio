import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./ProfileCard.scss";

interface ProfileCardProps {
  className?: string;
  onNavigate?: (sectionId: string) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  className = "",
  onNavigate,
}) => {
  const navigationItems = [
    { id: "about", label: "About Me" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/amitsingh880266",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/amit-5642b9198",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/amit.singh880266",
      label: "Instagram",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:amit.singh880266@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div className={`profile-card ${className}`}>
      <div className="profile-card__container">
        <div className="profile-card__content">
          <h1 className="profile-card__name">Amit Singh</h1>

          <h2 className="profile-card__title">Frontend Engineer</h2>

          <p className="profile-card__description">
            Frontend-focused Software Engineer with 4+ years of industry
            experience in developing web and mobile applications. Proven track
            record of building scalable and user-friendly interfaces using React
            and React Native, reaching thousands of users. Passionate about
            delivering digital solutions that solve real-world challenges and
            improve user experience.
          </p>

          {onNavigate && (
            <nav className="profile-card__navigation">
              <ul className="profile-card__nav-list">
                {navigationItems.map((item) => (
                  <li key={item.id} className="profile-card__nav-item">
                    <button
                      className="profile-card__nav-button"
                      onClick={() => onNavigate(item.id)}
                    >
                      → {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="profile-card__social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-card__social-link"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
