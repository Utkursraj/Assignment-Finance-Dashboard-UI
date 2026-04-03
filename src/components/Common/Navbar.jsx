import RoleSwitcher from "./RoleSwitcher";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-900 p-4 rounded-2xl shadow-lg">
      
      <h1 className="text-xl font-bold tracking-wide">
        Finance-Dashboard
      </h1>

      <div className="flex items-center gap-3">
        <RoleSwitcher />
      </div>
    </div>
  );
};

export default Navbar;