import axios from "axios";
import { useState } from "react";

//setting a variable to handle api url
const apiUrl = "http://localhost:3001";

export default function DeleteExpense() {
  //setting variables to handle ID, usestate
  const [expenseId, setExpenseId] = useState("");

  //async function to run on submit
  const FindExpenseId = async (event) => {
    event.preventDefault();

    //if no id alert user
    if (!expenseId) {
      alert("Please Enter ID");
      return;
    }

    //log id for testing
    console.log(expenseId);

    try {
      //sending a get request to make sure id is in table
      const response = await axios.get(`${apiUrl}/expenses/${expenseId}`);

      //if response 200 ok
      if (response.status === 200) {
        //ask user to confirm the delete
        const isConfirmed = window.confirm(
          `Are you sure you want to delete expense ID: ${expenseId}?`
        );

        //if user confirms delete
        if (isConfirmed) {
          //send a delete request
          await axios.delete(`${apiUrl}/expenses/${expenseId}`);
          //alert user record deleted
          alert(`ID: ${expenseId} Deleted`);
        }
      } else {
        //alret if id not found
        alert("Expense ID not found");
        return;
      }
      //set id field empty
      setExpenseId("");
    } catch (error) {
      //alret user if error in response
      if (error.response && error.response.status === 404) {
        alert("Expense ID not found");
      } else {
        //log if errors
        console.log("Error", error);
      }
      //set id field empty
      setExpenseId("");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-3 h-full">
        <h2 className="text-lg font-appleSystem mb-4 tracking-wider">
          Delete Expense
        </h2>
        <form
          onSubmit={FindExpenseId}
          className="flex flex-col items-center w-full"
        >
          <input
            className="placeholder-gray-400 p-3 mb-3 text-black"
            type="number"
            placeholder="Enter ID..."
            value={expenseId}
            onChange={(e) => setExpenseId(e.target.value)}
          />
          <button className="bg-gray-900 text-white rounded px-4 py-2 hover:shadow-md hover:shadow-blue-100 transition-shadow">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
