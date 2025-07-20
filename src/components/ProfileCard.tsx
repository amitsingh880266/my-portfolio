import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import {
  navigationItems,
  socialLinksData,
  personalInfo,
} from "../constants/data";
import "./ProfileCard.scss";

interface ProfileCardProps {
  className?: string;
  onNavigate?: (sectionId: string) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  className = "",
  onNavigate,
}) => {
  // Icon mapping for social links
  const iconMap = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    instagram: <FaInstagram />,
    email: <FaEnvelope />,
  };

  // Create social links with icons
  const socialLinks = socialLinksData.map((link) => ({
    ...link,
    icon: iconMap[link.type],
  }));

  return (
    <div className={`profile-card ${className}`}>
      <div className="profile-card__container">
        <div className="profile-card__content">
          <h1 className="profile-card__name">{personalInfo.name}</h1>

          <h2 className="profile-card__title">{personalInfo.title}</h2>

          <p className="profile-card__description">
            {personalInfo.description}
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
