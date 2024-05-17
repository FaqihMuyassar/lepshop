/* eslint-disable react/prop-types */
function Checkbox(props) {
    const {children} = props;
  return (
    <div>
        <input type="checkbox" className="text-sm">
            {children}
        </input>
    </div>
  )
}

export default Checkbox;