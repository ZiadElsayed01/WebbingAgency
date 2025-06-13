import React from "react";
import Container from "../Container";
import bubbles from "../../assets/home/bubbles.svg";
import screen from "../../assets/home/screen.png";
import Title from "../Title";

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
                  <div className="text-primary text-4xl font-bold">50+</div>
                  <div className="text-gray-800 font-medium">Client review</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-primary text-4xl font-bold">20+</div>
                  <div className="text-gray-800 font-medium">
                    completed Projects
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-6">
            <Title title="Why Choose Us?" />
            <div className="space-y-12 mt-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e6f4f9] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v8M8 12h8"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Focus on Innovation & Scalability
                  </h3>
                  <p className="text-gray-500">
                    We craft innovative solutions that not only meet today's
                    needs but are scalable to grow with your business.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e6f4f9] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#2a7da2]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Expertise along Industries
                  </h3>
                  <p className="text-gray-500">
                    With experience in UI/UX design, web development, and app
                    solutions, we've worked with a diverse range of clients
                    across various industries.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e6f4f9] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#2a7da2]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Dedicated Support
                  </h3>
                  <p className="text-gray-500">
                    Even after the project is complete, we're here to provide
                    ongoing support and ensure your digital solution continues
                    to perform at its best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
