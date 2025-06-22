import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SalesPerformanceChart({ lineGraphData }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-[435px] h-[610px]">
      <h2 className="text-xl font-bold mb-4">Sales Performance by Days</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={lineGraphData}
          margin={{ top: 10, right: 20, left: 0, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 12, dy: 10 }}
            axisLine={false}
            tickLine={false}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            tick={{ fontSize: 12 }}
            width={40}
            domain={[0, 1000]}
            tickCount={8}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#FA9564"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesPerformanceChart;
