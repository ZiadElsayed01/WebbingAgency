import React from "react";
import Container from "../Container";
import google from "../../assets/home/google.png";
import microsoft from "../../assets/home/microsoft.jpeg";
import paypal from "../../assets/home/paypal.png";
import dribble from "../../assets/home/dribble.png";

const companies = [google, microsoft, paypal, dribble];

export default function Companies() {
  return (
    <>
      <div className="bg-secondBg py-8">
        <Container>
          <div className="flex items-center justify-center md:justify-between gap-4 flex-wrap">
            {companies.map((company, index) => (
              <img
                key={index}
                src={company}
                alt={`company-${index}`}
                className="w-52 h-20 object-contain"
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
