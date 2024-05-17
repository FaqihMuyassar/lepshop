/* eslint-disable react/prop-types */
const Label = props => {
    const {text, id} = props;
  return (
    <label htmlFor={id} className="text-md font-semibold">
        {text}
    </label>
  )
}

export default Label