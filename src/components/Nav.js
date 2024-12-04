import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  // Define variable, set to what's in localStorage
  const [isDepositsExpaned, setIsDepositsExpaned] = useState(() => {
    const savedState = localStorage.getItem("isDepositsExpaned");
    return savedState ? JSON.parse(savedState) : false;
  });

  // useEffect hook to save nav status
  useEffect(() => {
    localStorage.setItem(
      "isDepositsExpaned",
      JSON.stringify(isDepositsExpaned)
    );
  }, [isDepositsExpaned]);

  const [isExpensesExpaned, setIsExpensesExpaned] = useState(() => {
    const savedState = localStorage.getItem("isExpensesExpaned");
    return savedState ? JSON.parse(savedState) : false;
  });

  useEffect(() => {
    localStorage.setItem(
      "isExpensesExpaned",
      JSON.stringify(isExpensesExpaned)
    );
  }, [isExpensesExpaned]);

  return (
    <nav className="fixed top-20 left-0 h-fit w-60 rounded bg-gradient-to-b from-blue-500 to-purple-500 text-white p-4 z-10">
      <ul className="space-y-2 text-center">
        <li>
          <Link
            to="/"
            className="text-lg font-bold hover:text-xl transition-all duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <button
            onClick={() => setIsDepositsExpaned(!isDepositsExpaned)}
            className="text-lg font-bold hover:text-xl transition-all duration-300 space-y-2 text-center"
          >
            Deposits
          </button>
          {isDepositsExpaned && (
            <ul className="space-y-2 mt-2 bg-gradient-to-b from-blue-100 to-gray-100 rounded-lg text-gray-500 font-thin">
              <li>
                <Link
                  to="/deposits/find"
                  className="text-lg hover:text-xl transition-all duration-300 text-center"
                >
                  Find Deposit
                </Link>
              </li>
              <li>
                <Link
                  to="/deposits/all"
                  className="text-lg hover:text-xl transition-all duration-300 text-center"
                >
                  All Deposits
                </Link>
              </li>
              <li>
                <Link
                  to="/deposits/new"
                  className="text-lg hover:text-xl transition-all duration-300 text-center"
                >
                  New Deposit
                </Link>
              </li>
              <li>
                <Link
                  to="/deposits/update"
                  className="text-lg hover:text-xl transition-all duration-300 text-center"
                >
                  Update Deposit
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button
            onClick={() => setIsExpensesExpaned(!isExpensesExpaned)}
            className="text-lg font-bold hover:text-xl transition-all duration-300 space-y-2 text-center"
          >
            Expenses
          </button>
          {isExpensesExpaned && (
            <ul className="space-y-2 mt-2 bg-gradient-to-b from-blue-100 to-gray-100 rounded-lg text-gray-500 font-thin">
              <li>
                <Link
                  to="/expenses/find"
                  className="text-lg hover:text-xl transition-all duration-300 text-center"
                >
                  Find Expense
                </Link>
              </li>
              <li>
                <Link
                  to="/expenses/all"
                  className="text-lg hover:text-xl transition-all duration-300 text-center"
                >
                  All Expenses
                </Link>
              </li>
              <li>
                <Link
                  to="/expenses/new"
                  className="text-lg hover:text-xl transition-all duration-300 text-center"
                >
                  New Expense
                </Link>
              </li>
              <li>
                <Link
                  to="/expenses/update"
                  className="text-lg hover:text-xl transition-all duration-300 text-center"
                >
                  Update Expense
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link
            to="/support"
            className="text-lg font-bold hover:text-xl transition-all duration-300 space-y-2 text-center"
          >
            Support
          </Link>
        </li>
        <li>
          <a
            href="/contactus"
            className="text-lg font-bold hover:text-xl transition-all duration-300"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
