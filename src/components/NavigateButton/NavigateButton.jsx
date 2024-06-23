import { Link } from "react-router-dom";
import propTypes from "prop-types";

const NavigateButton = ({ title, link, style }) => {
  return (
    <Link to={link} className={`${style}`}>
      {title}
    </Link>
  );
};

NavigateButton.propTypes = {
  title: propTypes.string || propTypes.any,
  link: propTypes.string,
  style: propTypes.string,
};

export default NavigateButton;
