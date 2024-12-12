import axios from "axios";
import { useState } from "react";

//setting a variable to handle api url
const apiUrl = "http://localhost:3001";

export default function DeleteRequest() {
  //setting variables to handle ID, usestate
  const [requestId, setRequestId] = useState("");

  //async function to run on submit
  const DeleteRequestId = async (event) => {
    event.preventDefault();

    //if no id alert user
    if (!requestId) {
      alert("Please Enter Request ID");
      return;
    }

    try {
      //getting token from local storage
      const token = localStorage.getItem("token");
      //asking user to confirm delete
      const isConfirmed = window.confirm(
        `Are you sure you want to delete income ID: ${requestId}?`
      );
      //if user confirms delete
      if (isConfirmed) {
        //send a delete request
        await axios.delete(`${apiUrl}/supportRequests/${requestId}`, {
          headers: { authorization: `Bearer ${token}` },
        });
        //alert user record deleted
        alert("Request successfully deleted.");
        setRequestId("");
      }
    } catch (error) {
      //alret user if error in response
      if (error.response && error.response.status === 404) {
        alert("Request ID not found");
      } else {
        //log if errors
        console.log("Error", error);
      }
      setRequestId("");
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center p-3 h-full">
        <h2 className="text-lg font-appleSystem mb-4 tracking-wider">
          Remove Request
        </h2>
        <form
          onSubmit={DeleteRequestId}
          className="flex flex-col items-center w-full"
        >
          <input
            className="placeholder-gray-400 p-3 mb-3 text-black"
            type="number"
            placeholder="Enter ID..."
            value={requestId}
            onChange={(e) => setRequestId(e.target.value)}
          />
          <button className="bg-gray-900 text-white rounded px-4 py-2 hover:shadow-md hover:shadow-blue-100 transition-shadow">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
