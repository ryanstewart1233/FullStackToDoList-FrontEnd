import "../styles/CustomButton.scss";
const CustomButton = ({ color, children, onClick, type }) => {
  const renderColor = () => {
    if (color) {
      return `btn--${color}`;
    } else return "";
  };
  return (
    <button className={`btn ${renderColor()}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
