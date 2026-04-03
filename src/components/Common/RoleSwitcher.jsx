import { useApp } from "../../context/AppContext";

const RoleSwitcher = () => {
  const { role, setRole } = useApp();

  return (
    <div className="flex bg-gray-800 rounded-lg p-1">
      <button
        onClick={() => setRole("viewer")}
        className={`px-3 py-1 rounded-md ${
          role === "viewer"
            ? "bg-blue-600 text-white"
            : "text-gray-400"
        }`}
      >
        Viewer
      </button>

      <button
        onClick={() => setRole("admin")}
        className={`px-3 py-1 rounded-md ${
          role === "admin"
            ? "bg-blue-600 text-white"
            : "text-gray-400"
        }`}
      >
        Admin
      </button>
    </div>
  );
};

export default RoleSwitcher;