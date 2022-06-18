import React from "react";
import { Link } from "react-router-dom";

const SingleJob = ({
  job: { job_title, company, _id, experience, salary },
}) => {
  return (
    <div class="card lg:card-side bg-base-300 rounded-sm shadow-3xl">
      <figure>
        <img
          className="h-52"
          src="https://www.cryptonaukri.com/img/internship.png"
          alt="Album"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-3xl">{job_title}</h2>
        <p className="text-xl">{company}</p>
        <div class="card-actions justify-end">
          <p className="flex flex-col">
            <span>Experience: {experience}</span>
            <span>Salary:{salary}</span>
          </p>
          <Link
            to={`/job-details/${_id}`}
            class="btn rounded-sm text-white bg-gradient-to-r from-primary to-secondary border-0"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
