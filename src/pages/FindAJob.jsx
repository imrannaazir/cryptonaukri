import React from "react";
import { Link } from "react-router-dom";

const FindAJob = () => {
  return (
    <div className="mt-24 lg:mx-[10%]">
      <p>Discover Job</p>
      <div class="card lg:card-side bg-base-300 shadow-xl">
        <figure>
          <img
            className="h-52"
            src="https://www.cryptonaukri.com/img/internship.png"
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div class="card-actions justify-end">
            <Link to="/job-details" class="btn btn-primary">
              Listen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindAJob;
