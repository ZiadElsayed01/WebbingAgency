import React from "react";
import Container from "../../../components/Container";
import bubbles from "../../../assets/home/bubbles.svg";
import screen from "../../../assets/home/screen.png";
import choose1 from "../../../assets/home/choose1.svg";
import choose2 from "../../../assets/home/choose2.svg";
import choose3 from "../../../assets/home/choose3.svg";
import Title from "../../../components/Title";

const features = [
  {
    icon: choose1,
    title: "Focus on Innovation & Scalability",
    description:
      "We craft innovative solutions that not only meet today's needs but are scalable to grow with your business.",
  },
  {
    icon: choose2,
    title: "Expertise along Industries",
    description:
      "With experience in UI/UX design, web development, and app solutions, we've worked with a diverse range of clients across various industries.",
  },
  {
    icon: choose3,
    title: "Dedicated Support",
    description:
      "Even after the project is complete, we're here to provide ongoing support and ensure your digital solution continues to perform at its best.",
  },
];

export default function ChooseUs() {
  return (
    <div className="bg-secondBg py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
          <div className="relative w-full lg:w-1/3">
            <div className="absolute top-0 left-0 z-0">
              <img
                src={bubbles || "/placeholder.svg"}
                className="w-20 h-20"
                alt="bubbles"
              />
            </div>
            <div className="absolute top-3 right-3 z-0">
              <div className="w-[150px] h-[200px] bg-gradient-to-r from-primary to-secondary z-0"></div>
            </div>
            <div className="absolute bottom-3 left-3 z-0">
              <div className="w-[200px] h-[200px] bg-gradient-to-r from-primary to-secondary z-0"></div>
            </div>
            <div className="relative z-10 flex items-center justify-center p-6">
              <img
                src={screen || "/placeholder.svg"}
                alt="screen"
                className="h-full w-full"
              />
              <div className="absolute -bottom-4 lg:-right-72 lg:bottom-12 transform lg:-translate-x-1/2 bg-white rounded-xl shadow-lg py-2 px-4 flex items-center justify-between z-20">
                <div className="text-center px-4">
                  <div className="text-primary text-2xl font-bold">50+</div>
                  <div className="text-gray-800 font-medium">Client review</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-primary text-2xl font-bold">20+</div>
                  <div className="text-gray-800 font-medium">
                    completed Projects
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-6">
            <Title title="Why Choose Us?" />
            <div className="space-y-8 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-6">
                  <img src={feature.icon} alt="icon" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
