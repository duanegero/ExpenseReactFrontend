import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GetDeposits from "../components/GetDeposits";

export default function FindDeposits() {
  useEffect(() => {
    document.title = "Find Deposit";
  });
  return (
    <>
      <Header />
      <Nav />
      <GetDeposits />
      <Footer />
    </>
  );
}
