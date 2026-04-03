import { useState } from "react";
import { useApp } from "../../context/AppContext";

const AddTransaction = () => {
  const { addTransaction, role } = useApp();

  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  if (role !== "admin") return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.amount || !form.category || !form.date) return;

    addTransaction({
      ...form,
      id: Date.now(),
      amount: Number(form.amount),
    });

    setForm({
      amount: "",
      category: "",
      type: "expense",
      date: "",
    });
  };

  return (
    <div className="bg-gray-900 p-5 rounded-2xl shadow-lg border border-gray-800">
      
      <div className="mb-4">
        <h2 className="text-lg font-bold text-blue-400">
          ⚙️ Admin Panel
        </h2>
        <p className="text-sm text-gray-400">
          Add new transaction
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-4 gap-3">

        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
          className="bg-gray-800 border border-gray-700 p-2 rounded-lg outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
          className="bg-gray-800 border border-gray-700 p-2 rounded-lg outline-none focus:border-blue-500"
        />

        <input
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
          className="bg-gray-800 border border-gray-700 p-2 rounded-lg outline-none focus:border-blue-500"
        />

        <select
          value={form.type}
          onChange={(e) =>
            setForm({ ...form, type: e.target.value })
          }
          className="bg-gray-800 border border-gray-700 p-2 rounded-lg"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button
          type="submit"
          className="md:col-span-4 bg-blue-600 hover:bg-blue-700 p-2 rounded-lg font-semibold"
        >
          + Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;