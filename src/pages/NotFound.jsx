import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex justify-center items-center mt-[50px] sm:mt-[100px] shadow-xl">
      <div className="text-center hero-content card bg-neutral">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Oops!</h1>
          <p className="mb-8 text-2xl">We are glad that you looked for this page but we haven't finished making this page yet.</p>
          <Link to="/" className="btn btn-lg btn-outline mb-5">
            <FaHome className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;