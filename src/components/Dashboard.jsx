import React from "react";
import InvestmentStats from "./InvestmentStats";
import NftMarketplace from "./NftMarketplace";
import NFTsOwned from "./NFTsOwned";
import MyPortfolio from "./MyPortfolio";
import MyCards from "./MyCards";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const mode = useSelector((state) => state.mode.mode);
  return (
    <div className="flex flex-col xl:flex-row w-full justify-end">
      <div className=" sm:w-[75%] w-full flex flex-col justify-center gap-2">
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <div className="w-full/43">
            <span
              className="flex
               w-full p-2 justify-between items-center"
            >
              <h2 className="test-base font-[600]"> NFT Marketplace</h2>
              <img
                src="ThreeDot.svg"
                alt="button"
                className=" h-8 p-2 rounded-lg aspect-square  hover:bg-gray-200"
              />
            </span>
            <NftMarketplace />
          </div>
          <div className="w-full/43 ">
            <span
              className="flex
               w-full p-2 justify-between items-center "
            >
              <h1 className="test-base font-[600] ">Investment Stats</h1>
              <img
                src="ThreeDot.svg"
                alt="button"
                className=" h-8 p-2 rounded-lg aspect-square  hover:bg-gray-200"
              />
            </span>

            <InvestmentStats />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  items-center justify-around">
          <div className="lg:w-auto w-[80%] ">
            <span
              className="flex 
               w-full justify-between items-center p-2"
            >
              <h1 className="test-base font-[600]">NFTs owned</h1>
              <img
                src="ThreeDot.svg"
                alt="button"
                className=" h-8 p-2 rounded-lg aspect-square  hover:bg-gray-200"
              />
            </span>
            <NFTsOwned />
          </div>
          <div>
            <MyPortfolio />
          </div>
        </div>
      </div>
      <div className=" xl:w-[22%] sm:w-[50%] w-full">
        <MyCards />
      </div>
    </div>
  );
};

export default Dashboard;
