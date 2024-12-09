import React, { useState } from "react"; //importing react and useState
import axios from "axios"; //imporing axios to send requests
import { useNavigate } from "react-router-dom"; //importing use nav to go from page to page

//setting a variable to handle api url
const apiUrl = "http://localhost:3001";

//creating a function to export
export default function LoginForm() {
  //creating a varible to handle navigatiion
  const navigate = useNavigate();

  //creating variables to handle user inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //async function called on subit
  const submitLogin = async (event) => {
    event.preventDefault();

    //creating a object with user input
    const user = {
      username: username,
      password: password,
    };

    //if no username and password alret user
    if (!username || !password) {
      alert("Enter Username and Password");
      return;
    }

    try {
      //send a axios resquest to api with user object
      const response = await axios.post(`${apiUrl}/login`, user);

      //assigning the response to a variable
      const token = response.data;

      //log token for testing
      console.log(token);
      //storing token to use later
      localStorage.setItem("token", token);
      alert(`Welcome ${username}`);
      setUsername("");
      setPassword("");
      navigate("/supportPortal");
    } catch (error) {
      console.log("Error", error); //logging the erroe
      alert("Login failed, try again"); //alerting to try again
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center ml-64 pt-24 min-w-fit">
      <form
        onSubmit={submitLogin}
        className="flex flex-col justify-center items-center shadow-lg pb-10 w-full max-w-xl"
      >
        <div className="bg-green-400 w-full">
          <h4 className="m-8 bg-clip-text text-white font-appleSystem font-bold rounded-lg text-5xl tracking-widest pr-2 text-right">
            Sign In
          </h4>
        </div>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          className="p-2 mb-4 mt-28 border border-gray-300 rounded-md w-72"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded-md w-72"
        />
        <button
          type="submit"
          className="p-3 mt-40 bg-blue-500 text-white rounded-full shadow-xl w-48 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.7)] focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
