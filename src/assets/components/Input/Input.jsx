/* eslint-disable react/prop-types */
const Input = props => {
    const {text, type, id, place} = props;
  return (
    <input type={type} id={id} placeholder={place}
    className='outline-slate-400 outline rounded px-3 py-2 text-sm transition-all
    hover:outline-slate-500 focus:outline-2 focus:outline-blue-600 placeholder:text-slate-400'>
    {text}
    </input>
  )
}

export default Input