import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <header className="rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 shadow-lg flex justify-between items-center px-5">
      <button
        onClick={handleLoginClick}
        className="text-l font-appleSystem mt-2 text-gray-300 hover:text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full border border-white"
      >
        Support Portal Login
      </button>
      <h1 className="text-4xl font-bold tracking-wider font-appleSystem">
        CashFlowHQ
      </h1>
    </header>
  );
}
