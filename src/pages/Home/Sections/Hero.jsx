import React from "react";
import Container from "../../../components/Container";
import ipad from "../../../assets/home/iPad_Mini.svg";

export default function Hero() {
  return (
    <>
      <div className="hero-sectin-bg max-w-full flex items-center justify-center p-4 my-4 md:my-10">
        <Container>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 max-w-7xl w-full">
            {/* Text Content */}
            <div className="w-full lg:w-[40%] text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-normal font-oxanium leading-[1.2]">
                Transforming Ideas into Digital Solutions
              </h1>
              <p className="text-lg md:text-xl text-secondText my-6 md:my-8">
                We deliver innovative UI/UX design, website and app development,
                and social media solutions tailored to your business needs.
                Let’s turn your ideas into impactful digital solutions.
              </p>
              <button className="bg-gradient-to-r from-primary to-secondary text-white w-3/4 md:w-1/2 rounded-full py-3">
                Get Started
              </button>
            </div>

            {/* Image */}
            <div className="w-full md:w-auto flex items-center justify-center">
              <img src={ipad} alt="ipad" className="w-[400px] md:w-[600px]" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
