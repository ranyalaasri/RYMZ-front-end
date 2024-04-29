import { BiPlay } from "react-icons/bi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative flex flex-wrap min-h-screen gap-2 md:-mt-10 bg-secondary">
      <div className="flex-1 basis-[20rem] !text-slate-100 px-[3%] md:px-[6%] mt-20">
        <h1 className="text-4xl font-bold capitalize lg:text-5xl">
          The Best Way To Find Your Dream Home
        </h1>
        <div className="pl-3 mt-5 border-l-4 border-primary">
          Explore top-rated listings, find great deals,
          <br /> and secure your dream home with us. <br /> Your journey to the
          perfect living space begins here.
        </div>
        <div className="mt-6 flex-align-center gap-x-3">
        
        <Link to={'/properties'} > 
        <button className="btn btn-primary">find property</button>
        </Link>
         
          <button className="icon-box !opacity-100 relative before:w-full before:absolute before:h-full before:rounded-full before:bg-[#0176b4] hover:!bg-[#003b5b] before:animate-ping bg-[#035581]">
            <BiPlay />
          </button>
        </div>
        <div className="mt-6 overflow-hidden rounded-lg sm:cursor-pointer flex-align-center w-fit">
          <div className="px-3 py-1 bg-primary">
            <span className="text-white">Buy</span>
          </div>
          <div className="px-3 py-1 bg-[#0d3c55]">
            <span>Rent</span>
          </div>
          <div className="px-3 py-1 bg-[#0d3c55]">
            <span>Sell</span>
          </div>
        </div>
      </div>
      <div className="flex-1 basis-[20rem] h-full">
        <img
          src="/images/property (36).jpg"
          alt=""
          className="w-full h-fit  sm:h-[100vh] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
