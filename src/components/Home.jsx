import React, { useRef } from "react";
import { property } from "../confige/property";
import { useSelector } from "react-redux";
import { useInView, motion } from "framer-motion";

const Home = () => {
  return (
    <div className="pt-15 sm:px-[5%]  h-[90%] overflow-scroll no-scrollbar ">
      <h1 className="test-base font-[600] text-center sm:w-60 ">
        Discover popular properties{" "}
      </h1>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 mt-5 lg:grid-cols-4 gap-8 h-full ">
        {property.map((data, i) => (
          <Property key={i} data={data} />
        ))}
      </div>
    </div>
  );
};
const Property = ({ data }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  const animation = {
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.5 },
    },
  };
  const mode = useSelector((state) => state.mode.mode);

  return (
    <motion.div
      variants={animation}
      initial={{ y: 100, opacity: 0, rotate: 10 }}
      animate={inView ? "visible" : ""}
      ref={ref}
      className={`w-55 h-70 p-2 rounded-lg  font-[mulish] flex flex-col justify-between ${
        mode ? "hover:bg-white shadow-gray-200 " : "hover:bg-[#1C1A24]"
      }  hover:shadow-xl relative`}
    >
      <img
        src={data.image}
        alt="img"
        className="h-40 object-cover rounded-xl"
      />
      <div className=" h-22 flex flex-col justify-between">
        <h1 className="font-bold text-lg h-6">{data.price}</h1>
        <p className="font-bold text-sm "> {data.type}</p>
        <p className="font-normal text-sm  text-[#717171]">{data.location}</p>
        <div className="flex justify-between items-end">
          <span className="flex gap-1">
            <img src="bed Icon.svg" alt="bed" className="h-4" />
            <p className="text-xs">{data.bed} bed</p>
          </span>
          <span className="flex  gap-1">
            <img src="bath.svg" alt="bath" className="h-4" />
            <p className="text-xs">{data.bath} bath</p>
          </span>
          <span className="flex gap-1">
            <img src="sqft.svg" alt="sqft" className="h-4" />
            <p className="text-xs">{data.area} sqft</p>
          </span>
        </div>
      </div>
      {data.featured && (
        <span className="w-auto flex absolute text-xs p-1 rounded-lg top-5 left-5 text-white bg-[#7942FB]">
          <img src="featured.svg" alt="icon" className="h-4" />
          <h1>Featured</h1>
        </span>
      )}
    </motion.div>
  );
};

export default Home;
