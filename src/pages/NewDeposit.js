import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PostDeposit from "../components/PostDeposit";

export default function NewDeposit() {
  useEffect(() => {
    document.title = "New Deposit";
  });
  return (
    <>
      <Header />
      <Nav />
      <PostDeposit />
      <Footer />
    </>
  );
}
