import { useApp } from "../../context/AppContext";

const SummaryCard = ({ type }) => {
  const { transactions } = useApp();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  const data = { balance, income, expense };

  const styles = {
    balance: "from-blue-500 to-indigo-600",
    income: "from-green-500 to-emerald-600",
    expense: "from-red-500 to-pink-600",
  };

  return (
    <div className="relative p-5 rounded-2xl bg-gray-900 shadow-lg hover:scale-[1.02]">
      
      <div
        className={`absolute inset-0 rounded-2xl opacity-20 blur-xl bg-gradient-to-r ${styles[type]}`}
      />

      <div className="relative">
        <h2 className="text-gray-400 capitalize">{type}</h2>

        <p className="text-2xl font-bold mt-2">
          ₹{data[type].toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;