import React, { useState } from "react"; //importing react and useState
import axios from "axios"; //imporing axios to send requests

//setting a variable to handle api url
const apiUrl = "http://localhost:3001";

//creating function
export default function Support() {
  //creating varibles to handle diffent things in function, hooks
  const [details, setDetails] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newUserRole, setNewUserRole] = useState("");

  //creating async function to be called on submit
  const submitRemoveRequest = async (event) => {
    event.preventDefault();
    //start try and catch
    try {
      //sending axios request with api url and new object
      const response = await axios.post(`${apiUrl}/support`, { details });
      //if response status ok alert user
      if (response.status === 200) {
        alert("Your request has been submitted");
        setDetails("");
      } else {
        alert("Your request hasn't been submitted");
      }
    } catch (error) {
      //catch any errors, alret user and log
      alert("An error occurred. Please try again later.");
      console.log("Error", error);
    }
  };

  //creating async function to be called on submit
  const submitNewUserRequest = async (event) => {
    event.preventDefault();
    //start try and catch
    try {
      //sending axios request with api url and new object
      const response = await axios.post(`${apiUrl}/support/new-user`, {
        newUserName,
        newUserRole,
      });

      //if response status ok alert user
      if (response.status === 200) {
        alert("New user has been submitted");
        setNewUserName("");
        setNewUserRole("");
      } else {
        alert("Your request hasn't been submitted");
      }
    } catch (error) {
      //catch any errors, alret user and log
      alert("An error occurred. Please try again later.");
      console.log("Error", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center ml-60 pt-24">
      <h1 className="mb-14 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-bold shadow-lg rounded-lg text-5xl tracking-widest p-4">
        Support
      </h1>
      <label className="text-gray-700 font-bold mb-2 tracking-wider">
        Submit a Record Removal Request
      </label>
      <p className="text-gray-600 text-center mt-4 mb-6 w-96 p-2 h-32 tracking-wider">
        If you'd like a deposit or expense record removed, please enter its
        unique ID and the reason for your request below. Our team will carefully
        review your submission and follow up with you shortly
      </p>
      <form onSubmit={submitRemoveRequest} className="w-80">
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Record Removal Request Details..."
          className="w-80 p-2 h-32 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full mt-6"
        >
          Remove Request
        </button>
      </form>

      <label className="text-gray-700 font-bold mb-2 tracking-wider mt-8">
        Request a New User
      </label>
      <p className="text-gray-600 text-center mt-4 mb-6 w-96 p-2 h-32 tracking-wider">
        If you'd like to add a new user, please enter their details, including
        their name and role, in the fields below. Our team will review the
        information and process the request as soon as possible.
      </p>
      <form
        onSubmit={submitNewUserRequest}
        className="space-y-6 w-full max-w-xs"
      >
        <div className="flex flex-col">
          <lable className="text-gray-700 font-bold mb-2">Name:</lable>
          <input
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            type="text"
            placeholder="Name (Required)"
            className="w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <label className="text-gray-700 font-bold mb-2">Role:</label>
          <input
            value={newUserRole}
            onChange={(e) => setNewUserRole(e.target.value)}
            type="text"
            placeholder="Role (Required)"
            className="w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
          <button
            type="submit"
            className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full mt-6"
          >
            Add User
          </button>
        </div>
      </form>
      <p className="mt-6 text-gray-700 text-center italic">
        * For additional assistance, please visit our Contact Us page to reach
        out directly to our support team.
      </p>
    </div>
  );
}
