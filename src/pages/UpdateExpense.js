import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PutExpense from "../components/PutExpense";
export default function UpdateExpense() {
  useEffect(() => {
    document.title = "Update Expense";
  });
  return (
    <>
      <Header />
      <Nav />
      <PutExpense />
      <Footer />
    </>
  );
}
