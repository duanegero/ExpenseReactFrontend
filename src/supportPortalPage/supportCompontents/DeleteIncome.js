import axios from "axios";
import { useState } from "react";

//setting a variable to handle api url
const apiUrl = "http://localhost:3001";

export default function DeleteIncome() {
  //setting variables to handle ID, usestate
  const [depositId, setDepositId] = useState("");

  //async function to run on submit
  const FindIncomeId = async (event) => {
    event.preventDefault();

    //if no id alert user
    if (!depositId) {
      alert("Please Enter ID");
      return;
    }

    //log id for testing
    console.log(depositId);

    try {
      //sending a get request to make sure id is in table
      const response = await axios.get(`${apiUrl}/income/${depositId}`);

      //if response 200 ok
      if (response.status === 200) {
        //ask user to confirm the delete
        const isConfirmed = window.confirm(
          `Are you sure you want to delete income ID: ${depositId}?`
        );

        //if user confirms delete
        if (isConfirmed) {
          //send a delete request
          await axios.delete(`${apiUrl}/income/${depositId}`);
          //alert user record deleted
          alert(`ID: ${depositId} Deleted`);
        }
      } else {
        //alret if id not found
        alert("Income ID not found");
        return;
      }
      setDepositId("");
    } catch (error) {
      //alret user if error in response
      if (error.response && error.response.status === 404) {
        alert("Deposit ID not found");
      } else {
        //log if errors
        console.log("Error", error);
      }
      setDepositId("");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-3 h-full">
        <h2 className="text-lg font-appleSystem mb-4">Delete Income</h2>
        <form
          onSubmit={FindIncomeId}
          className="flex flex-col items-center w-full"
        >
          <input
            className="placeholder-gray-400 p-3 mb-3"
            type="number"
            placeholder="Enter ID..."
            value={depositId}
            onChange={(e) => setDepositId(e.target.value)}
          />
          <button className="bg-blue-500 text-white rounded px-4 py-2 hover:shadow-md hover:shadow-blue-300 transition-shadow">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
