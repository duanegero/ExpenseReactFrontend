import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PutDeposit from "../components/PutDeposit";

export default function UpdateDeposit() {
  useEffect(() => {
    document.title = "Update Deposit";
  });
  return (
    <>
      <Header />
      <Nav />
      <PutDeposit />
      <Footer />
    </>
  );
}
