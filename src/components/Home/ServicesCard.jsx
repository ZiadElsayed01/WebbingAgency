import React from "react";
import { Link } from "react-router-dom";

export default function ServicesCard({ service, index }) {
  return (
    <>
      <div
        key={index}
        className={`hidden lg:block bg-white border border-gray-200 rounded-lg shadow-lg shadow-primary/50 p-6 max-w-xl my-4 md:my-0 relative ${
          service.position === "center"
            ? "z-10 lg:transform lg:scale-110"
            : service.position === "left"
            ? "lg:mr-[-15px]"
            : "lg:ml-[-15px]"
        }`}
      >
        <div className="flex items-start text-left">
          <div className="flex-shrink-0 mr-4">
            <div className="w-16 h-16 bg-secondBg rounded-full flex items-center justify-center">
              <img
                src={service.icon || "/placeholder.svg"}
                alt={service.name}
                className="w-10 h-10"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{service.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <Link
              to="/"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              Show Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div
        key={index}
        className={`lg:hidden bg-white border border-gray-200 rounded-lg shadow-lg shadow-primary/50 p-6 mx-2 lg:my-0`}
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-secondBg rounded-full flex items-center justify-center">
            <img
              src={service.icon || "/placeholder.svg"}
              alt={service.name}
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">{service.name}</h3>
        </div>
        <div className="text-left mt-4">
          <p className="text-gray-600 text-sm mb-4">{service.description}</p>
          <Link
            to="/"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            Show Projects
          </Link>
        </div>
      </div>
    </>
  );
}
