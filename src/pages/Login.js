import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  });
  return (
    <>
      <Header />
      <Nav />
      <Footer />
    </>
  );
}
