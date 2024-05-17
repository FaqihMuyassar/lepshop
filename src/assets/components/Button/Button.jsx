/* eslint-disable react/prop-types */
const Button = (props) => {
    const {text, animate = null, bg = 'blue', type} = props;
  return (
    <button type={type} className={`px-5 py-2 bg-${bg}-500 text-white text-sm font-bold rounded transition-all duration-300
    hover:bg-${bg}-600 active:bg-${bg}-500 ${animate}`}>
        {text}
    </button>
  );
}

export default Button;