import React from "react";
import Container from "../Container";
import team1 from "../../assets/home/team1.svg";
import team2 from "../../assets/home/team2.svg";
import team3 from "../../assets/home/team3.svg";
import Title from "../Title";

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
            <div key={index}>
              {/* Team member photo */}
              <div className="mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-lg bg-gray-100"
                />
              </div>

              {/* Name and title */}
              <h3 className="text-xl font-semibold text-[#2a7da2] mb-1">
                {member.name}, {member.title}
              </h3>

              {/* Skills */}
              <div className="flex my-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <span className="font-medium text-gray-800">Skills:</span>
                  <span className="text-gray-600">
                    {member.skills.join(", ")}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
