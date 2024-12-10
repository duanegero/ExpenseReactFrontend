import { useNavigate } from "react-router-dom";

export default function SupportHeader() {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate("/");
  };

  return (
    <header className="rounded bg-gradient-to-r from-white to-gray-900 py-4 flex justify-between items-center px-5">
      <button
        onClick={returnHome}
        className="text-l font-appleSystem text-gray-400 hover:text-white bg-gray-900 hover:bg-gray-600 py-2 px-4 rounded-full border border-white"
      >
        Home
      </button>
      <h1 className="text-xl text-white tracking-widest font-appleSystem">
        Support Portal
      </h1>
    </header>
  );
}
