import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GetExpense from "../components/GetExpense";

export default function FindExpense() {
  useEffect(() => {
    document.title = "Find Expense";
  });
  return (
    <>
      <Header />
      <Nav />
      <GetExpense />
      <Footer />
    </>
  );
}
