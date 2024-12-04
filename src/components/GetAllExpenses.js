import axios from "axios"; //imporing axios to send requests
import React, { useState } from "react"; //importing react and useState
import dayjs from "dayjs"; //importing daysjs to format time

//setting a variable to handle api url
const apiUrl = "http://localhost:3001";

export default function GetAllExpenses() {
  //setting variable to be used in function
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(null);
  const [currentBalance, setCurrentBalance] = useState(null);
  const [loading, setLoading] = useState(false);

  //creating async function for button click
  const getExpenses = async (event) => {
    event.preventDefault();

    //start with loading true
    setLoading(true);

    //start try catch
    try {
      //sending a axios get request
      const response = await axios.get(`${apiUrl}/expenses`);
      //logging response data for testing
      console.log(response.data);
      //setting returned array to our variable
      setExpenses(response.data.expensesDetails);
      //setting response values to our variable
      setTotalExpenses(response.data.totalExpenses);
      setCurrentBalance(response.data.currentBalance);
    } catch (error) {
      //alert user and log if error
      alert("Can't Get Expenses");
      console.log("ERROR", error);
    } finally {
      //set loading to false
      setLoading(false);
    }
  };

  //HTML + Tailwind CSS
  return (
    <div className="flex flex-col justify-center items-center ml-60 pt-24">
      <h1 className="mb-14 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-bold shadow-lg rounded-lg text-5xl tracking-widest p-4">
        All Expenses
      </h1>
      <label className="text-gray-700 font-bold mb-2 tracking-wider">
        Find a All Expenses
      </label>
      <p className="text-gray-600 text-center mt-4 w-96 p-2 h-32 tracking-wider">
        Please click button below to review table of all expenses.
      </p>
      <button
        onClick={getExpenses}
        className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
      >
        Get Expenses
      </button>
      <div>
        {loading && <p>Loading...</p>}

        {expenses.length > 0 && !loading && (
          <table className="w-full mt-4 ml-16 mr-16 mb-4 border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  ID
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Payee
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Amount
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Description
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Created
                </th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.expenseid}>
                  <td className="border border-gray-300 px-4 py-2 text-left">
                    {expense.expenseid}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-left">
                    {expense.payee}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-left">
                    ${expense.amount}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-left">
                    {expense.description}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-left">
                    {dayjs(expense.created_at).format("MMMM D, YYYY h:mm A")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {totalExpenses && currentBalance && (
        <>
          <p className="font-bold text-2xl text-black animate-bounce mt-4">
            Total Expenses: ${totalExpenses}
          </p>
          <p className="font-bold text-2xl text-black animate-bounce mt-4">
            Current Balance: ${currentBalance}
          </p>
        </>
      )}
    </div>
  );
}
