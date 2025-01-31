import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useInView, motion } from "framer-motion";

const MyCards = () => {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <div
      className={`sm:w-full h-full  ${
        mode ? "bg-white" : "bg-[#1C1A24]"
      }  flex flex-col items-center p-6 m-1 sm:m-0`}
    >
      <h1 className="test-base w-full font-[600] ">My Card</h1>
      <img src="card.svg" alt="card" className="h-50" />
      <img src="blue dots.svg" alt="icon" className="mb-8 w-15" />

      <div className="w-full">
        <h1 className="test-base w-full font-[600] ">Top Picks</h1>
        <div className="h-78 overflow-y-scroll no-scrollbar ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

const Card = () => {
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
  return (
    <motion.div
      variants={animation}
      initial={{ y: 100, opacity: 0, rotate: 10 }}
      animate={inView ? "visible" : ""}
      ref={ref}
      className=" border-l-4  hover:rounded-lg hover:ring-2  ring-[#986FFA47] border-amber-400 flex items-end justify-between my-6 m-1"
    >
      <div className="flex flex-col  h-12 px-2 items-start justify-between font-bold text-sm ">
        <h3>Roma Avenue</h3>
        <p className="font-[Mulish] font-semibold text-[#959595] text-xm">
          $400,000
        </p>
      </div>
      <p className="font-[Mulish] font-semibold text-[#959595] text-xm">
        0.0000345
      </p>
      <img src="gray arrow.svg" alt="arrow" className="h-5 my-auto" />
    </motion.div>
  );
};
export default MyCards;
