import Navbar from "../components/Common/Navbar";
import SummaryCard from "../components/Dashboard/SummaryCard";
import BalanceChart from "../components/Dashboard/BalanceChart";
import CategoryChart from "../components/Dashboard/CategoryChart";
import TransactionList from "../components/Transactions/TransactionList";
import InsightsPanel from "../components/Insights/InsightsPanel";
import AddTransaction from "../components/Transactions/AddTransaction";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        <Navbar />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SummaryCard type="balance" />
          <SummaryCard type="income" />
          <SummaryCard type="expense" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BalanceChart />
          <CategoryChart />
        </div>

        <AddTransaction />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TransactionList />
          <InsightsPanel />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;