import data from '../../Data/brand.json'
export const BrandCard = ({id, image, href}) => {
  return (
    <>
      <a href={href} target='_blank' className="shadow-lg rounded-lg md:w-40 md:h-40 w-24 h-24 flex justify-center items-center" id={id}>
        <img src={image} className='md:w-20 w-14'/>
      </a>
    </>
  );
};
image