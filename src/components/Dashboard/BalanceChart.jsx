import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useApp } from "../../context/AppContext";

const BalanceChart = () => {
  const { transactions } = useApp();

  let balance = 0;

  const data = transactions.map((t) => {
    if (t.type === "income") balance += t.amount;
    else balance -= t.amount;

    return {
      date: t.date,
      balance,
    };
  });

  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow-lg">
      <h2 className="font-bold mb-3 text-green-400">
        Balance Trend
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke="#374151" strokeDasharray="3 3" />

          <XAxis dataKey="date" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="balance"
            stroke="#22C55E"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;