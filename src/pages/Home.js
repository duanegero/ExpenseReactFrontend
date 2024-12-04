import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ImageNav from "../components/ImageNav";
import Intro from "../components/Intro";
import Testimonies from "../components/Testimonies";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <>
      <Header />
      <Nav />
      <Intro />
      <ImageNav />
      <Testimonies />
      <Footer />
    </>
  );
}
