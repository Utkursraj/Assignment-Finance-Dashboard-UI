import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useApp } from "../../context/AppContext";

const COLORS = [
  "#6366F1", // indigo
  "#22C55E", // green
  "#EF4444", // red
  "#F59E0B", // yellow
  "#06B6D4", // cyan
  "#A855F7", // purple
];

const CategoryChart = () => {
  const { transactions } = useApp();

  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const data = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow-lg">
      <h2 className="font-bold mb-3 text-indigo-400">
        Spending Breakdown
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={90}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;