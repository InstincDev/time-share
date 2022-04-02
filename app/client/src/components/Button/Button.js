import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ href, text }) => {
  return (
    <header>
      <a href={href}>{text}</a>
    </header>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
export default Button;