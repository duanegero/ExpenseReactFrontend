import axios from "axios"; //imporing axios to send requests
import { useState } from "react"; //importing react and useState

//setting a variable to handle api url
const apiUrl = "http://localhost:3001";

export default function AllRequests() {
  //creating varible to hable request, hooks
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  //creating async function to be called on submit
  const getRequests = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      //sending axios request, putting in variable
      const response = await axios.get(`${apiUrl}/supportRequests`, {
        headers: { authorization: `Bearer ${token}` },
      });
      //log response for testing
      console.log(response.data);
      //set requests as response data
      setRequests(response.data || []);
    } catch (error) {
      //alert user and log if error
      alert("Can't Get Requests");
      console.log(
        "ERROR",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center bg-gray-900 text-white">
        <button
          onClick={getRequests}
          className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-700 mb-8"
        >
          See Requests
        </button>
      </div>
      <div>
        {loading && <p>Loading...</p>}

        {requests.length > 0 && (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-300 px-2 py-1 text-left">
                  Request ID
                </th>
                <th className="border border-gray-300 px-2 py-1 text-left">
                  Delete Request Details
                </th>
                <th className="border border-gray-300 px-2 py-1 text-left">
                  New User Name
                </th>
                <th className="border border-gray-300 px-2 py-1 text-left">
                  New User Role
                </th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.request_id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {request.request_id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {request.details}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {request.new_name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {request.new_role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
