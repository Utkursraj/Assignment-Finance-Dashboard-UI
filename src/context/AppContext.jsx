import { createContext, useContext, useState, useEffect } from "react";
import { transactionsData } from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : transactionsData;
  });

  const [role, setRole] = useState("viewer");
  const [filter, setFilter] = useState("");

  
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (tx) => {
    setTransactions((prev) => [...prev, tx]);
  };

  return (
    <AppContext.Provider
      value={{
        transactions,
        addTransaction,
        role,
        setRole,
        filter,
        setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);