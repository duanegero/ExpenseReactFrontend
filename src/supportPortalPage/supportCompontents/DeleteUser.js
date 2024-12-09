import axios from "axios"; //importing axios to send requests to API
import { useState } from "react"; //importing useState hook

//setting a variable to handle api url
const apiUrl = "http://localhost:3001";

export default function DeleteUser() {
  //setting varible to handle user input
  const [userId, setUserId] = useState("");

  //async function to be called on submit
  const DeleteUser = async (event) => {
    event.preventDefault();

    //if no user id alert error
    if (!userId) {
      alert("Please Enter ID");
      return;
    }

    //lof ID for testing
    console.log(userId);

    try {
      //send a get request to make sure Id is there
      const response = await axios.get(`${apiUrl}/support/get-user/${userId}`);

      //if response data 200 ok
      if (response.status === 200) {
        //ask user to confirm the delete
        const isConfirmed = window.confirm(
          `Are you sure you want to delete user ID: ${userId}?`
        );
        //if confirm delete
        if (isConfirmed) {
          //send a delete request to api
          await axios.delete(`${apiUrl}/support/delete-user/${userId}`);
          //alret delete
          alert(`ID: ${userId} Deleted`);
        }
      } else {
        //alert user id not found
        alert("User ID bot found");
        return;
      }
    } catch (error) {
      //alret user if error in response
      if (error.response && error.response.status === 404) {
        alert("User ID not found");
      } else {
        //log if errors
        console.log("Error", error);
      }
    }
    //set id field empty
    setUserId("");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center p-3 h-full">
        {" "}
        <h2 className="text-lg font-appleSystem mb-4">Delete User</h2>
        <form
          onSubmit={DeleteUser}
          className="flex flex-col items-center w-full"
        >
          <input
            className="placeholder-gray-400 p-3 mb-3"
            type="number"
            placeholder="Enter ID..."
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          ></input>
          <button className="bg-blue-500 text-white rounded px-4 py-2 hover:shadow-md hover:shadow-blue-300 transition-shadow">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
