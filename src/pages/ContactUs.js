import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Login() {
  useEffect(() => {
    document.title = "Contact Us";
  });
  return (
    <>
      <Header />
      <Nav />
      <Footer />
    </>
  );
}
