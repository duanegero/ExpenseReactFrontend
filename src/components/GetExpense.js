import axios from "axios"; //imporing axios to send requests
import React, { useState } from "react"; //importing react and useState
import dayjs from "dayjs"; //importing daysjs to format time

//setting a variable to handle api url
const apiUrl = "http://localhost:3001";

export default function GetExpense() {
  //creating varibles to handle diffent things in function, hooks
  const [expenseId, setExpenseId] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  //creating async function to be called on submit
  const submitId = async (event) => {
    event.preventDefault();

    //if no ID entered alert user
    if (!expenseId) {
      alert("Please Enter ID");
      return;
    }

    //start try catch
    try {
      //sending axios request, putting in variable
      const response = await axios.get(`${apiUrl}/expenses/${expenseId}`);
      //log response for testing
      console.log(response.data);
      //setting variable to response data
      setSubmittedData(response.data);
    } catch (error) {
      //alert user and log if error
      alert("Expense ID Not Found");
      console.log("ERROR", error);
    }
    //clear the id field
    setExpenseId("");
  };

  //return HTML + Tailwind CSS
  return (
    <>
      <div className="flex flex-col justify-center items-center ml-60 pt-24">
        <h1 className="mb-14 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-bold shadow-lg rounded-lg text-5xl tracking-widest p-4">
          Find Expense
        </h1>
        <label className="text-gray-700 font-bold mb-2 tracking-wider">
          Find a Single Expense
        </label>
        <p className="text-gray-600 text-center mt-4 w-96 p-2 h-32 tracking-wider">
          Please enter a unique ID of a expense and review it's details below.
        </p>
        <form onSubmit={submitId} className="space-y-4 w-full max-w-xs">
          <input
            className="border border-gray-300 rounded px-4 py-2 placeholder-gray-400 w-full text-center"
            type="number"
            placeholder="Enter ID..."
            value={expenseId}
            onChange={(e) => setExpenseId(e.target.value)}
          />
          <button className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full">
            Submit
          </button>
        </form>
        {submittedData && (
          <div className="text-center border border-gray-200 rounded-lg p-4 shadow-md w-full max-w-xs mt-2 bg-gradient-to-r from-gray-100 to-blue-100 text-gray-500">
            <h3>Expense Info</h3>
            <p className="text-gray-500">
              <strong>ID: </strong>
              {submittedData.expenseid}
            </p>
            <p className="text-gray-500">
              <strong>Payee: </strong>
              {submittedData.payee}
            </p>
            <p className="text-gray-500">
              <strong>Amount: </strong>
              {submittedData.amount}
            </p>
            <p className="text-gray-500">
              <strong>Description: </strong>
              {submittedData.description}
            </p>
            <p className="text-gray-500">
              <strong>Created: </strong>
              {dayjs(submittedData.created_at).format("MMMM D, YYYY h:mm A")}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
