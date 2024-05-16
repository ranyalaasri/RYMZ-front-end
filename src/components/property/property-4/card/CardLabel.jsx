const cardLabels = ({ purpose, distance }) => {
    return (
      <div className="absolute top-2 left-2 flex-align-center gap-x-2">
        <span className="py-[3px] px-3 text-sm rounded-full capitalize text-white  bg-primary  bg-orange-500">
          {distance} away
        </span>
        <span className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-secondary bg-sky-900">
          for {purpose}
        </span>
      </div>
    );
  };
  
  export default cardLabels;