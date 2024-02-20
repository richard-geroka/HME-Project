import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const HoverButtonLink = ({ link, content, className }) => {
  return (
    <Link to={link} className={className}>
      {content} {<i className="bi bi-arrow-right"></i>}
    </Link>
  );
};

export default HoverButtonLink;
