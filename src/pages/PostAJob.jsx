import React from "react";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostAJob = () => {
  return (
    <div className="flex justify-center items-center ">
      <div class="card-body max-w-[500px] shadow-2xl bg-base-300 m-8 mt-24">
        <p>Post a Job</p>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Job Title</span>
          </label>
          <input
            type="text"
            placeholder="Job  title"
            class="input input-bordered"
          />
        </div>
        <div className="flex gap-4">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Salary</span>
            </label>
            <input
              type="text"
              placeholder="Salary"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Salary</span>
            </label>
            <input
              type="text"
              placeholder="Salary"
              class="input input-bordered"
            />
          </div>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">About Company</span>
          </label>
          <textarea
            type="text"
            placeholder="About company"
            class="input input-bordered h-24"
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">About Job</span>
          </label>
          <textarea
            type="text"
            placeholder="About company"
            class="input input-bordered h-24"
          />
        </div>
        <div class="form-control mt-6">
          <button class="btn bg-gradient-to-r border-0 text-white from-primary to-secondary">
            Login
          </button>
        </div>
      </div>
      <img
        className="w-[600px] h-[600px]"
        src="https://i.ibb.co/MGxCzQb/flame-remote-work-1.png"
        alt=""
      />
    </div>
  );
};

export default PostAJob;
