import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FindDeposits from "./pages/FindDeposits";
import AllDeposits from "./pages/AllDeposits";
import NewDeposit from "./pages/NewDeposit";
import UpdateDeposit from "./pages/UpdateDeposit";
import FindExpense from "./pages/FindExpense";
import AllExpenses from "./pages/AllExpenses";
import NewExpense from "./pages/NewExpense";
import UpdateExpense from "./pages/UpdateExpense";
import SupportPage from "./pages/SupportPage";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deposits/find" element={<FindDeposits />} />
          <Route path="/deposits/all" element={<AllDeposits />} />
          <Route path="/deposits/new" element={<NewDeposit />} />
          <Route path="/deposits/update" element={<UpdateDeposit />} />
          <Route path="/expenses/find" element={<FindExpense />} />
          <Route path="/expenses/all" element={<AllExpenses />} />
          <Route path="/expenses/new" element={<NewExpense />} />
          <Route path="/expenses/update" element={<UpdateExpense />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
