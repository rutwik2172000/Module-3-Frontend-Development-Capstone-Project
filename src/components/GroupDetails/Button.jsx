/* eslint-disable react/prop-types */
const Button = ({ text, btnclass, fn, type, title, ref, disabled }) => {
  return (
    <button
      onClick={fn}
      type={type}
      title={title}
      ref={ref}
      disabled={disabled}
      className={btnclass}
    >
      {text}
    </button>
  );
};

export default Button;
