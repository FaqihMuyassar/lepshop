import data from '../../Data/brand.json'
import white from '../../Data/brandwhite.json'
export const BrandCard = ({id, image, href}) => {
  return (
    <>
      <a href={href} target='_blank' className="hover:scale-95 transition-all shadow-lg rounded-lg md:w-40 md:h-40 w-24 h-24 flex justify-center items-center" id={id}>
        <img src={image} className='md:w-20 w-14'/>
      </a>
    </>
  );
};
