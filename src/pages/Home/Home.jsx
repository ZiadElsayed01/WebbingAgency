import React from "react";
import Hero from "./Sections/Hero";
import Companies from "./Sections/Companies";
import Services from "./Sections/Services";
import ChooseUs from "./Sections/ChooseUs";
import Team from "./Sections/Team";
import Feedback from "./Sections/Feedback";

const Sections = [Hero, Companies, Services, ChooseUs, Team, Feedback];

export default function Home() {
  return (
    <>
      {Sections.map((Section, index) => (
        <Section key={index} />
      ))}
    </>
  );
}
