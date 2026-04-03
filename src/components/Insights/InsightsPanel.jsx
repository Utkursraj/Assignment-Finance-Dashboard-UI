import { useApp } from "../../context/AppContext";

const InsightsPanel = () => {
  const { transactions } = useApp();

  const categories = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categories[t.category] =
        (categories[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.entries(categories).sort(
    (a, b) => b[1] - a[1]
  )[0];

  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow-lg">
      <h2 className="font-bold mb-3 text-purple-400">
        Insights
      </h2>

      {highest ? (
        <p className="text-lg">
           You spend most on{" "}
          <span className="text-purple-400 font-bold">
            {highest[0]}
          </span>
        </p>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default InsightsPanel;