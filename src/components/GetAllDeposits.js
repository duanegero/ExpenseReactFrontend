import axios from "axios"; //imporing axios to send requests
import React, { useState } from "react"; //importing react and useState
import dayjs from "dayjs"; //importing daysjs to format time

//setting a variable to handle api url
const apiUrl = "http://localhost:3001";

//creating function
export default function GetAllDeposits() {
  //creating varibles to handle diffent things in function, hooks
  const [deposits, setDeposits] = useState([]);
  const [totalIncome, setTotalIncome] = useState(null);
  const [currentBalance, setCurrentBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  //creating async function to be called on submit
  const getDeposits = async (event) => {
    event.preventDefault();

    setLoading(true); //set loading varible to true
    //start try and catch
    try {
      //sending axios request, putting in variable
      const response = await axios.get(`${apiUrl}/income`);
      //log response for testing
      console.log(response.data);
      //setting variables to response data
      setDeposits(response.data.totalDeposits);
      setTotalIncome(response.data.totalIncome);
      setCurrentBalance(response.data.currentBalance);
    } catch (error) {
      //alert user and log if error
      alert("Can't Get Deposits");
      console.log("ERROR", error);
    } finally {
      //set loading to false
      setLoading(false);
    }
  };

  //return HTML + Tailwind CSS
  return (
    <div className="flex flex-col justify-center items-center ml-60 pt-24">
      <h1 className="mb-14 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-bold shadow-lg rounded-lg text-5xl tracking-widest p-4">
        All Deposits
      </h1>
      <label className="text-gray-700 font-bold mb-2 tracking-wider">
        Find a All Deposits
      </label>
      <p className="text-gray-600 text-center mt-4 w-96 p-2 h-32 tracking-wider">
        Please click button below to review table of all deposits.
      </p>
      <button
        onClick={getDeposits}
        className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
      >
        Get Deposits
      </button>
      <div>
        {loading && <p>Loading...</p>}

        {deposits.length > 0 && !loading && (
          <table className="w-full mt-4 ml-16 mr-16 mb-4 border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  ID
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Source
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Amount
                </th>
                <th className="border border-gray-300 px-4 py-2 w-2/3 text-left">
                  Description
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Created
                </th>
              </tr>
            </thead>
            <tbody>
              {deposits.map((deposit) => (
                <tr key={deposit.incomeid}>
                  <td className="border border-gray-300 px-4 py-2">
                    {deposit.incomeid}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {deposit.source}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${deposit.amount}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {deposit.description}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {dayjs(deposit.created_at).format("MMMM D, YYYY h:mm A")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {totalIncome && currentBalance && (
        <>
          <p className="font-bold text-2xl text-black animate-bounce mt-4">
            Total Deposits: ${totalIncome}
          </p>
          <p className="font-bold text-2xl text-black animate-bounce mt-4">
            Current Balance: ${currentBalance}
          </p>
        </>
      )}
    </div>
  );
}
