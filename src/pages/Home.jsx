import React from "react";
import Hero from "../components/Home/Hero";
import Copmaines from "../components/Home/Companies";
import Services from "../components/Home/Services";
import ChooseUs from "../components/Home/ChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Copmaines />
      <Services />
      <ChooseUs />
    </>
  );
}
