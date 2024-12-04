import { Link } from "react-router-dom";
import depositImage from "../images/Deposits.png";
import expenseImage from "../images/Expenses.png";
import supportImage from "../images/Support.png";

export default function ImageNav() {
  return (
    <div className="mt-24 flex justify-center space-x-6">
      <Link to="/deposits/all">
        <img
          src={depositImage}
          alt="Deposits"
          className="w-40 h-40 object-cover rounded-lg shadow-lg transition-all duration-300 hover:scale-110"
        />
      </Link>
      <Link to="/expenses">
        <img
          src={expenseImage}
          alt="Expenses"
          className="w-40 h-40 object-cover rounded-lg shadow-lg transition-all duration-300 hover:scale-110"
        />
      </Link>
      <Link to="/support">
        <img
          src={supportImage}
          alt="Support"
          className="w-40 h-40 object-cover rounded-lg shadow-lg transition-all duration-300 hover:scale-110"
        />
      </Link>
    </div>
  );
}
