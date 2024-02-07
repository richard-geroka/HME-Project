import { useState } from 'react';

/* eslint-disable react/prop-types */
const HoverButtonLink = ({ link, content }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <a href={link} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {content} {isHovering && <i className="bi bi-arrow-right"></i>}
    </a>
  );
};

export default HoverButtonLink;
