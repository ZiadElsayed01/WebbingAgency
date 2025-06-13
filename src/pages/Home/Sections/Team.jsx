import React from "react";
import Container from "../../../components/Container";
import team1 from "../../../assets/home/team1.svg";
import team2 from "../../../assets/home/team2.svg";
import team3 from "../../../assets/home/team3.svg";
import Title from "../../../components/Title";
import TeamCard from "../../../components/Home/TeamCard";

const teamMembers = [
  {
    name: "John Doe",
    title: "Lead UI/UX Designer",
    image: team1,
    skills: ["UI/UX Design", "Prototyping", "User Research"],
    description:
      "John is a creative thinker with a deep understanding of user experience and interface design. He has worked on various projects, crafting intuitive designs that provide a seamless flow.",
  },
  {
    name: "Sarah Smith",
    title: "Project Manager",
    image: team2,
    skills: ["Project Management", "Communication"],
    description:
      "With a background in managing digital projects, Sarah excels at keeping everything on track. She ensures smooth communication between clients and the team.",
  },
  {
    name: "Michael Jack",
    title: "FullStack Developer",
    image: team3,
    skills: ["JavaScript", "React", "Node.js"],
    description:
      "Michael is a versatile developer skilled in both front-end and back-end technologies. He's passionate about creating robust, scalable web applications that drive results.",
  },
];

export default function OurTeam() {
  return (
    <div className="py-16 bg-white">
      <Container>
        <div className="text-center">
          <Title title="Our Team" />
          <p className="text-gray-600 text-lg">
            Meet the Minds Behind Our Innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </Container>
    </div>
  );
}
