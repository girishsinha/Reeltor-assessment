import React, { useRef } from "react";
import EtherIcon from "./EtherIcon";
import { OwnedNFT } from "../confige/NFTsOwned";
import { useSelector } from "react-redux";
import { useInView, motion } from "framer-motion";

const Card = ({ name, ether, percentage }) => {
  // state of dark light theme access throgh use selector hook
  const mode = useSelector((state) => state.mode.mode);

  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  // configuration of motion property
  const animation = {
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    //motion.div is feature of frammer motion it enabale the motion in div
    <motion.div
      variants={animation}
      initial={{ y: 100, opacity: 0, rotate: 10 }}
      animate={inView ? "visible" : ""}
      ref={ref}
      className={`h-20 ${
        mode ? "bg-white" : "bg-[#1C1A24]"
      } lg:w-60 rounded-lg m-1 my-2 p-2  shadow-gray-100   hover:ring-2  ring-[#986FFA47]`}
    >
      <div
        className={`font-normal ${
          mode ? "text-[#272727]" : "text-gray-400"
        } flex justify-between`}
      >
        <p>{name}</p>
        <img
          src={percentage > 0 ? "/green graph.svg" : "/red graph.svg"}
          alt="graph"
          className=" h-5"
        />
      </div>
      <div className="font-[Mulish] font-extrabold flex items-center justify-between text-lg">
        {/* <EtherIcon className="w-6 h-6" /> */}
        <p className=" flex  items-center">
          <EtherIcon className="w-6 h-6" />
          {ether} Ether
        </p>
        {percentage > 0 ? (
          <p className="text-[#4FDFB1]">+{percentage}%</p>
        ) : (
          <p className="text-[#ED5B75]">{percentage}%</p>
        )}
      </div>
    </motion.div>
  );
};
const NFTsOwned = () => {
  return (
    <div className="h-75  overflow-y-scroll no-scrollbar ">
      {/*looping each card  */}
      {OwnedNFT.map((data, i) => (
        <Card
          key={i}
          name={data.name}
          ether={data.ether}
          percentage={data.percentage}
        />
      ))}
    </div>
  );
};

export default NFTsOwned;
