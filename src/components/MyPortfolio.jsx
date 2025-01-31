import React, { useRef, useState } from "react";
import EtherIcon from "./EtherIcon";
import Graph from "./Graph";
import { useSelector } from "react-redux";

const MyPortfolio = () => {
  const elementRef = useRef(null);
  const [arrowDisable1, setArrowDisable1] = useState(true);
  const [arrowDisable2, setArrowDisable2] = useState(false);
  const mode = useSelector((state) => state.mode.mode);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable1(true);
        setArrowDisable2(false);
      } else {
        setArrowDisable1(false);
      }
      if (element.scrollRight === 100) {
        setArrowDisable2(true);
      }
    }, speed);
  };

  return (
    <div className="">
      <span className="flex w-full justify-between  items-center p-2">
        <h1 className="test-base font-[600]">My Portfolio</h1>
        <div className="w-24 gap-4 flex ">
          <button
            onClick={() => {
              handleHorizantalScroll(elementRef.current, 25, 100, -10);
            }}
            disabled={arrowDisable1}
            className="rounded-full hover:ring-2 active:ring-white ring-[#986FFA47]"
          >
            {arrowDisable1 ? (
              <img
                src="white arrow.svg"
                alt="button"
                className="h-8 aspect-square"
              />
            ) : (
              <img
                src="blue arrow.svg"
                alt="button"
                className="h-8 aspect-square rotate-180 "
              />
            )}
          </button>
          <button
            onClick={() => {
              handleHorizantalScroll(elementRef.current, 25, 100, 10);
            }}
            className=" rounded-full hover:ring-2  ring-[#986FFA47] active:ring-white"
          >
            {!arrowDisable2 ? (
              <img
                src="blue arrow.svg"
                alt="button"
                className="h-8 aspect-square  "
              />
            ) : (
              <img
                src="white arrow.svg"
                alt="button"
                className="h-8 aspect-square rotate-180"
              />
            )}
          </button>
        </div>
      </span>
      <div
        ref={elementRef}
        className=" lg:w-160 sm:w-140 w-screen overflow-x-auto no-scrollbar"
      >
        <div className="grid grid-flow-col auto-cols-max ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div
        className={` ${
          mode ? "bg-white" : "bg-[#1C1A24]"
        } rounded-lg lg:w-160 px-6 font-[mulish] font-semibold`}
      >
        <span
          className="flex
               w-full justify-between items-center p-2"
        >
          <h1 className="test-base font-[600] ">Total Distributions</h1>
          <img
            src="ThreeDot.svg"
            alt="button"
            className=" h-8 p-2 rounded-lg aspect-square  hover:bg-gray-200"
          />
        </span>
        <Graph />
      </div>
    </div>
  );
};

const Card = () => {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <div
      className={`w-60 h-18 ${
        mode ? "bg-white" : "bg-[#1C1A24]"
      }  flex rounded-lg m-1 my-2 p-2   hover:shadow-xl hover:ring-2  ring-[#986FFA47]`}
    >
      <img
        src="marketplace.jpeg"
        alt="img"
        className="h-14 aspect-square rounded-lg"
      />
      <div className="p-2 font-bold text-sm">
        <h3>Mandragora Mansion</h3>
        <p className=" text-[#B5B5B5] text-lg font-[mulish] font-semibold flex  items-center">
          <EtherIcon className="w-6 h-6" />
          0.005 Ether
        </p>
      </div>
    </div>
  );
};

export default MyPortfolio;
