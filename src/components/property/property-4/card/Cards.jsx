import React from 'react';
import { BiMap } from 'react-icons/bi';
import CardHoverIcons from './CardHoverIcon'; 
import CardLabels from './CardLabel';
import { Link } from "react-router-dom";

const CardWithImageSlider = ({ id, title, description, images, location, price, listingType }) => {

  return (
    <div className='shadow-md'>
    <div className="flex-1 basis-[18rem] shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group">
      <div className="group !opacity-100 overflow-hidden relative">
        {images && images.length > 0 && images[0].url && (
          <Link to={`/property-details/${id}`} className="!opacity-100">
          <img
            src={images[0].url}
            alt={title}
            className="w-full h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a"
          />
          </Link>
        )}
        <CardHoverIcons />
      </div>
      <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
        <div className="text-white flex-align-center gap-x-2">
          <BiMap style={{ color: '#f97316' }} />
          <p>{location}</p>
        </div>
      </div>
      <CardLabels purpose={listingType} distance="0.5 km" />
      </div>
      <div className="p-3">
        <h1 className="text-lg font-bold capitalize text-sky-900">{title}</h1>
        <div className="mt-4 flex-center-between">
        <p className=' font-semibold text-primary text-sky-900'>{description}</p>
          <h1 className="text-lg font-semibold text-primary" style={{ color: '#f97316' }}>MAD {price}</h1>
          <button className="bg-sky-900 text-white font-bold w-24 h-8 rounded-lg hover:bg-gray-100 hover:text-sky-900">Details</button>
        </div>
      </div>
    </div>
  );
};

export default CardWithImageSlider;