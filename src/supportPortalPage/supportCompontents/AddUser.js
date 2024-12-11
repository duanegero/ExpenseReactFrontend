import axios from "axios"; //imporing axios to send requests
import React, { useState } from "react"; //importing react and useState

//setting a variable to handle api url
const apiUrl = "http://localhost:3001";

export default function AddUser() {
  //setting varibles to handle user input, hooks
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //async function called on submit
  const submitNewUser = async (event) => {
    event.preventDefault();

    //if all fields aren't full alert user
    if (!username || !password) {
      alert("You must fill in all fields to proceed");
      return;
    }

    //creating a new user object with input from user
    const newUserDetails = {
      newUsername: username,
      newPassword: password,
    };

    try {
      const token = localStorage.getItem("token");
      //sending a post request, with response variable
      const response = await axios.post(
        `${apiUrl}/support/add-user`,
        newUserDetails,
        { headers: { authorization: `Bearer ${token}` } }
      );
      //log data for testing
      console.log("New User", response.data);
    } catch (error) {
      //alert user if error, log error
      alert("User Not Added");
      console.log("Error", error);
    }
    //clearing fields after submit
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-3 h-full">
        <h2 className="text-lg font-appleSystem mb-4 tracking-wider">
          Add User
        </h2>
        <form
          onSubmit={submitNewUser}
          className="flex flex-col items-center w-full"
        >
          <input
            className="placeholder-gray-400 p-3 mb-3 text-black"
            type="text"
            placeholder="New Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="placeholder-gray-400 p-3 mb-3 text-black"
            type="text"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-gray-900 text-white rounded px-4 py-2 hover:shadow-md hover:shadow-blue-100 transition-shadow">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
