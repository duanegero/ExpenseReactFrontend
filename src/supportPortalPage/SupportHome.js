import React, { useEffect } from "react";
import SupportHeader from "./supportCompontents/SupportHeader";
import DeleteExpense from "./supportCompontents/DeleteExpense";
import DeleteIncome from "./supportCompontents/DeleteIncome";
import DeleteUser from "./supportCompontents/DeleteUser";
import AddUser from "./supportCompontents/AddUser";
import DeleteRequest from "./supportCompontents/DeleteRequest";
import AllRequests from "./supportCompontents/AllRequests";
import SupportFooter from "./supportCompontents/SupportFooter";

export default function SupportHome() {
  useEffect(() => {
    document.title = "Support Home";
  });

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <SupportHeader />
      <div className="grid grid-cols-2 gap-4 p-8 m-5 ">
        <div className="p-8 border border-gray-300">
          <DeleteExpense />
        </div>
        <div className="p-8 border border-gray-300">
          <DeleteIncome />
        </div>
        <div className="p-8 border border-gray-300">
          <AddUser />
        </div>
        <div className="p-8 border border-gray-300">
          <DeleteUser />
        </div>
        <div className="p-8 border border-gray-300">
          <DeleteRequest />
        </div>
        <div className="p-8 border border-gray-300">
          <p className="tracking-wider">
            Click the "See Requests" button below to see list of all active
            requests.
          </p>
        </div>
      </div>
      <AllRequests />
      <SupportFooter />
    </div>
  );
}
