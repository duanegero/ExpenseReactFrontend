import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GetAllExpenses from "../components/GetAllExpenses";

export default function AllExpenses() {
  useEffect(() => {
    document.title = "All Expenses";
  });
  return (
    <>
      <Header />
      <Nav />
      <GetAllExpenses />
      <Footer />
    </>
  );
}
