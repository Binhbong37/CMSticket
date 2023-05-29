import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Thứ 2", Total: 1200 },
  { name: "Thứ 3", Total: 2100 },
  { name: "Thứ 4", Total: 800 },
  { name: "Thứ 5", Total: 1600 },
  { name: "Thứ 6", Total: 900 },
  { name: "Thứ 7", Total: 1700 },
  { name: "CN", Total: 700 },
];

interface typeProps {
  aspect: number,
}

const ChartLine = ({ aspect }: typeProps) => {
  return (
    <ResponsiveContainer width="100%" aspect={aspect}>
      <AreaChart
        width={700}
        height={250}
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FF993C" stopOpacity={0.6} />
            <stop offset="95%" stopColor="#FF993C" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="gray" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Total"
          stroke="#FF993C"
          fillOpacity={1}
          fill="url(#total)"
          strokeWidth={3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ChartLine;