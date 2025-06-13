import React from "react";

export default function Title({ title }) {
  const [first, second, ...rest] = title.split(" ");
  return (
    <div>
      <h2 className="text-4xl font-normal font-oxanium">
        {first} {""}
        <span className="text-primary">
          {second} {""}
        </span>
        {rest.join(" ")}
      </h2>
    </div>
  );
}
