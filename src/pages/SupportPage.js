import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Support from "../components/Support";

export default function SupportPage() {
  useEffect(() => {
    document.title = "Support";
  });
  return (
    <>
      <Header />
      <Nav />
      <Support />
      <Footer />
    </>
  );
}
