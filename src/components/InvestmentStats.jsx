import React from "react";
import Chart from "./ProgressBar";
import EtherIcon from "./EtherIcon";
import { useSelector } from "react-redux";

const InvestmentStats = () => {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <div
      className={`flex justify-around sm:h-60 sm:w-110 ${
        mode ? "bg-white" : "bg-[#1C1A24]"
      } rounded-lg p-6`}
    >
      <div className="flex flex-col justify-around">
        <div className="flex h-15 items-center ">
          <img
            src="total investment.svg"
            alt="total investment"
            className="p-4  h-full rounded-lg aspect-square bg-[#FBB142]"
          />
          <div className="flex flex-col p-4">
            <h3 className="font-medium text-base">Total Investement</h3>

            <span className="flex items-center  text-[#FBB142] text-lg font-[Mulish]">
              <EtherIcon className="fill-[#FBB142] h-6 w-6 " />
              <p>0.56 Ether</p>
            </span>
          </div>
        </div>
        <div className="flex h-15 items-center ">
          <img
            src="weekly return.svg"
            alt="weekly return"
            className="p-4  h-full rounded-lg aspect-square bg-[#4FDFB1]"
          />
          <div className="flex flex-col p-4">
            <h3 className="font-medium text-base">Weekly returns</h3>

            <span className="flex items-center  text-[#4FDFB1] text-lg font-[Mulish]">
              <EtherIcon className="fill-[#4FDFB1] h-6 w-6 " />
              <p>0.005 Ether</p>
            </span>
          </div>
        </div>
        <div className="flex h-15 items-center ">
          <img
            src="expenses.svg"
            alt="Expenses"
            className="p-4  h-full rounded-lg aspect-square bg-[#ED5B75]"
          />
          <div className="flex flex-col p-4">
            <h3 className="font-medium text-base">Expenses</h3>

            <span className="flex items-center  text-[#ED5B75] text-lg font-[Mulish] ">
              <EtherIcon className="fill-[#ED5B75] h-6 w-6 " />
              <p>0.56 Ether</p>
            </span>
          </div>
        </div>
      </div>
      <div>
        <Chart TotalInvestement={80} WeeklyReturns={90} Expenses={10} />
      </div>
    </div>
  );
};

export default InvestmentStats;
