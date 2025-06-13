import React from "react";

export default function TeamCard({ member, index }) {
  return (
    <>
      <div key={index}>
        {/* Team member photo */}
        <div className="mb-6">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
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
            <span className="text-gray-600">{member.skills.join(", ")}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
          {member.description}
        </p>
      </div>
    </>
  );
}
