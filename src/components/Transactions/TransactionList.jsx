import { useApp } from "../../context/AppContext";
import { useState } from "react";

const TransactionList = () => {
  const {
    transactions,
    filter,
    setFilter,
    deleteTransaction,
    updateTransaction,
    role,
  } = useApp();

  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  // Filter + sort
  const filtered = transactions
    .filter((t) =>
      t.category.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const handleSave = (id) => {
    updateTransaction({ ...editData, id });
    setEditId(null);
  };

  return (
    <div className="bg-gray-900 p-5 rounded-2xl shadow-lg">

      {/* Title */}
      <h2 className="text-lg font-bold mb-3">Transactions</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search category..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 mb-4 rounded-lg bg-gray-800 border border-gray-700 outline-none"
      />

      {/* Empty State */}
      {filtered.length === 0 ? (
        <p className="text-gray-400 text-center py-4">
          No transactions found
        </p>
      ) : (
        filtered.map((t) => (
          <div
            key={t.id}
            className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-800 transition"
          >
            {/* LEFT */}
            {editId === t.id ? (
              <div className="flex gap-2">
                <input
                  value={editData.category}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      category: e.target.value,
                    })
                  }
                  className="bg-gray-800 border border-gray-700 p-1 rounded"
                />

                <input
                  type="number"
                  value={editData.amount}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      amount: Number(e.target.value),
                    })
                  }
                  className="bg-gray-800 border border-gray-700 p-1 rounded w-20"
                />

                <button
                  onClick={() => handleSave(t.id)}
                  className="text-green-400"
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <div>
                  <p className="font-semibold">{t.category}</p>
                  <p className="text-sm text-gray-400">{t.date}</p>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-3">
                  <span
                    className={`font-bold ${
                      t.type === "income"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    ₹{t.amount}
                  </span>

                  {/* Admin Buttons */}
                  {role === "admin" && (
                    <>
                      <button
                        onClick={() => {
                          setEditId(t.id);
                          setEditData(t);
                        }}
                        className="text-blue-400 hover:underline"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteTransaction(t.id)}
                        className="text-red-400 hover:underline"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TransactionList;