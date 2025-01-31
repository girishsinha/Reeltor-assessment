import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// import Chart from "./ProgressBar";

const data = [
  { name: "Mon", value: 280 },
  { name: "Tue", value: 190 },
  { name: "Wed", value: 260 },
  { name: "Thu", value: 180 },
  { name: "Fri", value: 300 },
  { name: "Sat", value: 230 },
  { name: "Sun", value: 270 },
];

const Graph = () => {
  return (
    <ResponsiveContainer width="100%" height={170}>
      <AreaChart data={data}>
        <XAxis dataKey="name" stroke="#959595" />
        <YAxis stroke="#959595" />
        <Tooltip
          contentStyle={{
            // backgroundColor: "#A855F7",
            // color: "#fff",
            borderRadius: 5,
          }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8655FB"
          strokeWidth={2}
          fill="url(#colorUv)"
        />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#986FFA47" stopOpacity={1} />
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.4} />
          </linearGradient>
        </defs>
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Graph;
