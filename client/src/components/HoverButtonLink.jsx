import { useState } from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const HoverButtonLink = ({ link, content, className, isLinkRouter }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isLink, setIsLink] = useState(null);

  if (isLinkRouter) {
    setIsLink(true);
  }

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  if (isLink) {
    return (
      <Link to={link} className={className} linkRouter={isLinkRouter}>
        {content}
      </Link>
    );
  } else {
    return (
      <a
        href={link}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className={className}
      >
        {content} {isHovering && <i className="bi bi-arrow-right"></i>}
      </a>
    );
  }
};

export default HoverButtonLink;
