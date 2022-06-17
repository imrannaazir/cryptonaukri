import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Login = () => {
  return (
    <div class=" bg-base-200">
      <div class="min-h-screen flex justify-center items-center lg:px-[10%]">
        <img src="https://iili.io/Vk565Q.md.png" class=" rounded-lg " />
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <FontAwesomeIcon className="text-base-300 text-9xl" icon={faUser} />
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <button class="btn bg-gradient-to-r border-0 text-white from-primary to-secondary">
                Login
              </button>
              <p className="text-center">
                New to here?register(
                <button className="text-secondary">Student</button>/
                <button className="text-secondary">Company</button>)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
