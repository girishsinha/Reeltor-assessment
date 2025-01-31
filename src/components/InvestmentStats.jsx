import React from "react";
import Chart from "./ProgressBar";
import EtherIcon from "./EtherIcon";
import { useSelector } from "react-redux";

const InvestmentStats = () => {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <div
      className={`flex justify-around sm:h-60 sm:w-110 h-50 w-90 ${
        mode ? "bg-white" : "bg-[#1C1A24]"
      } rounded-lg p-6`}
    >
      <div className="flex flex-col justify-around">
        <div className="flex sm:h-15 h-12 items-center ">
          <img
            src="total investment.svg"
            alt="total investment"
            className="p-4  h-full rounded-lg aspect-square bg-[#FBB142]"
          />
          <div className="flex flex-col p-4">
            <h3 className="font-medium sm:text-base text-sm">
              Total Investement
            </h3>

            <span className="flex items-center  text-[#FBB142] sm:text-lg text-base font-[Mulish]">
              <EtherIcon className="fill-[#FBB142] sm:h-6 sm:w-6 " />
              <p>0.56 Ether</p>
            </span>
          </div>
        </div>
        <div className="flex sm:h-15 h-12 items-center ">
          <img
            src="weekly return.svg"
            alt="weekly return"
            className="p-4  h-full rounded-lg aspect-square bg-[#4FDFB1]"
          />
          <div className="flex flex-col p-4">
            <h3 className="font-medium sm:text-base text-sm">Weekly returns</h3>

            <span className="flex items-center  text-[#4FDFB1] sm:text-lg text-base font-[Mulish]">
              <EtherIcon className="fill-[#4FDFB1] sm:h-6 sm:w-6 " />
              <p>0.005 Ether</p>
            </span>
          </div>
        </div>
        <div className="flex sm:h-15 h-12 items-center ">
          <img
            src="expenses.svg"
            alt="Expenses"
            className="p-4  h-full rounded-lg aspect-square bg-[#ED5B75]"
          />
          <div className="flex flex-col p-4">
            <h3 className="font-medium sm:text-base text-sm">Expenses</h3>

            <span className="flex items-center  text-[#ED5B75] sm:text-lg text-base font-[Mulish] ">
              <EtherIcon className="fill-[#ED5B75] sm:h-6 sm:w-6 " />
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
