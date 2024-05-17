/* eslint-disable react/prop-types */
import Input from "./Input";
import Label from "./Label";

function InputForm(props) {
    const {type, id, place, text} = props;
  return (
    <div className='flex flex-col gap-1'>
    <Label text={text} id={id} />
    <Input type={type} id={id} place={place} />
    </div>
  )
}

export default InputForm;