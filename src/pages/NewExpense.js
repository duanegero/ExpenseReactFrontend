import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PostExpense from "../components/PostExpense";

export default function NewExpense() {
  useEffect(() => {
    document.title = "New Expense";
  });
  return (
    <>
      <Header />
      <Nav />
      <PostExpense />
      <Footer />
    </>
  );
}
