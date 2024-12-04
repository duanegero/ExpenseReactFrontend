import axios from "axios"; //imporing axios to send requests
import React, { useState } from "react"; //importing react and useState
import dayjs from "dayjs"; //importing daysjs to format time

//setting a variable to handle api url
const apiUrl = "http://localhost:3001";

//creating function
export default function PostDeposit() {
  //creating varibles to handle diffent things in function, hooks
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  //creating async function to be called on submit
  const submitNewDeposit = async (event) => {
    event.preventDefault();

    //if all fields not entered alert user
    if (!source || !amount || !description) {
      alert("You must fill in all fields to proceed");
      return;
    }

    //creating new object with user input
    const newDepositDetails = {
      source: source,
      amount: amount,
      description: description,
    };
    //start try catch
    try {
      //sending axios request with api url and new object
      const response = await axios.post(`${apiUrl}/income`, newDepositDetails);
      //log response for testing
      console.log("New Deposit", response.data);
      //setting variable to response data
      setSubmittedData(response.data);
    } catch (error) {
      //alert user if error, log error
      alert("Deposit Not Added");
      console.log("Error", error);
    }

    //clear the fields
    setSource("");
    setAmount("");
    setDescription("");
  };

  //return HTML + Tailwind CSS
  return (
    <div className="flex flex-col justify-center items-center ml-60 pt-24">
      <h1 className="mb-14 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-bold shadow-lg rounded-lg text-5xl tracking-widest p-4">
        New Deposit
      </h1>
      <label className="text-gray-700 font-bold mb-2 tracking-wider">
        Make a New Deposit
      </label>
      <p className="text-gray-600 text-center mt-4 w-96 p-2 h-32 tracking-wider">
        Please fill out all fields to submit a new deposit.
      </p>
      <form onSubmit={submitNewDeposit} className="space-y-6 w-full max-w-xs">
        <div className="flex flex-col">
          <label className="text-gray-700 font-bold mb-2">Source:</label>
          <input
            type="text"
            placeholder="Source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label className="text-gray-700 font-bold mb-2">Amount:</label>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-36 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label className="text-gray-700 font-bold mb-2">Description:</label>
          <textarea
            placeholder="Enter a detailed description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-80 p-2 h-32 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full mt-6"
          >
            Submit
          </button>
        </div>
      </form>
      {submittedData && (
        <div className="text-center border border-gray-200 rounded-lg p-4 shadow-md w-full max-w-xs mt-2 bg-gradient-to-r from-gray-100 to-blue-100 text-gray-500">
          <h3 className="text-2xl font-bold text-gray-500 relative">
            New Deposit Info
          </h3>
          <p className="text-gray-500">
            <strong>ID: </strong> {submittedData.newIncome.incomeid}
          </p>
          <p className="text-gray-500">
            <strong>Source: </strong> {submittedData.newIncome.source}
          </p>
          <p>
            <strong>Amount: </strong> {submittedData.newIncome.amount}
          </p>
          <p className="text-gray-500">
            <strong>Description: </strong> {submittedData.newIncome.description}
          </p>
          <p className="text-gray-500">
            <strong>Date: </strong>{" "}
            {dayjs(submittedData.newIncome.created_at).format(
              "MMMM D, YYYY h:mm A"
            )}
          </p>
        </div>
      )}
    </div>
  );
}
