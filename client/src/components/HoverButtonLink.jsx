import { useState } from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const HoverButtonLink = ({ link, content, className }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

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
};

export default HoverButtonLink;
