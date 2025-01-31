const ProgressBar = ({ value, color }) => {
  return (
    // single bar
    <div className="relative w-2 h-full z-2 bg-[#F6F6FA] rounded-lg overflow-hidden">
      <div
        className={`absolute bottom-0 rounded-lg w-full ${color}`}
        style={{ height: `${value}%` }}
      ></div>
    </div>
  );
};

const Chart = ({ TotalInvestement, WeeklyReturns, Expenses }) => {
  const data = [
    { value: TotalInvestement, color: "bg-[#FBB142]" },
    { value: WeeklyReturns, color: "bg-[#4FDFB1]" },
    { value: Expenses, color: "bg-[#ED5B75]" },
  ];

  return (
    <div className="flex space-x-4 items-end justify-center  mr-10 h-full font-[600] text-[#B5B5B5] relative">
      {/* Looping throgh the each bar and feed the data */}

      {data.map((bar, index) => (
        <ProgressBar key={index} value={bar.value} color={bar.color} />
      ))}
      <div className="border-[#F5F3FB] border-b-2 w-full absolute  top-[0%] z-1"></div>
      <div className="border-[#F5F3FB] border-b-2 w-full absolute  top-[25%] z-1"></div>
      <div className="border-[#F5F3FB] border-b-2 w-full absolute  top-[50%] z-1"></div>
      <div className="border-[#F5F3FB] border-b-2 w-full absolute  top-[75%] z-1"></div>
      <div className="border-[#F5F3FB] border-b-2 w-full absolute  top-[100%] z-1"></div>
      <p className="absolute -right-15 -top-3">Max</p>
      <p className="absolute -right-15 -bottom-3">Min</p>
    </div>
  );
};

export default Chart;
