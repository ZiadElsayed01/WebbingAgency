import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Settings className="w-42 h-42 text-primary" />
        <Container>
          <h1 className="text-5xl font-bold ">
            <span className="text-primary">Oops!</span> Page Not Found
          </h1>
          <p className="text-xl text-secondText my-4">
            Sorry, the page you are looking for under implementation, try again
            later.
          </p>
          <Link
            to="/"
            className="bg-primary text-white px-6 py-3 rounded-lg block w-fit mx-auto"
          >
            Go Home
          </Link>
        </Container>
      </div>
    </>
  );
}
