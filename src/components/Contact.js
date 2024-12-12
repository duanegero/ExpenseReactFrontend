import React, { useState } from "react"; //importing react and useState
import axios from "axios"; //imporing axios to send requests
const apiUrl = "http://localhost:3001";

export default function Contact() {
  //setting a variable to handle api url
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const submitCallbackDeatails = async (event) => {
    event.preventDefault();

    //if fields aren't filled alert user
    if (!name || (!phoneNumber && !email)) {
      alert("Name and Phone Number or Email required");
    }

    try {
      //sending a post request to api with object
      const response = await axios.post(`${apiUrl}/contact`, {
        name,
        phoneNumber,
        email,
      });
      //if response status ok alert and empty fields
      if (response.status === 200) {
        alert("Your request has been submitted");
        setPhoneNumber("");
        setEmail("");
        setName("");
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
        Contact Us
      </h1>
      <label className="text-gray-700 font-bold mb-2 tracking-wider text-2xl">
        Request a Callback or Email
      </label>
      <p className="text-gray-600 text-center mt-4 mb-6 w-96 p-2 h-32 tracking-wider">
        Need assistance? Request a callback by providing your phone number, or
        share your email address for a detailed response. Our team will get back
        to you promptly to help with your inquiry
      </p>
      <form
        onSubmit={submitCallbackDeatails}
        className="space-y-6 w-full max-w-xs"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          className="w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></input>
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="number"
          placeholder="Phone number (e.g., 123-456-7890)"
          className="w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></input>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email address"
          className="w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></input>
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full mt-6"
        >
          Callback Request
        </button>
      </form>
    </div>
  );
}
