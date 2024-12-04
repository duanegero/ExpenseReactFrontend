import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GetAllDeposits from "../components/GetAllDeposits";

export default function AllDeposits() {
  useEffect(() => {
    document.title = "All Deposits";
  });
  return (
    <>
      <Header />
      <Nav />
      <GetAllDeposits />
      <Footer />
    </>
  );
}
