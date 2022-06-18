import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";

const Register = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div class=" bg-base-200">
      <div class="min-h-screen flex justify-center items-center lg:px-[10%]">
        <img src="https://iili.io/Vk565Q.md.png" class=" rounded-lg " />
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div className="flex justify-center items-center gap-4">
              <input
                onClick={() => console.log("hello")}
                type="radio"
                name="radio-3"
                class="radio radio-secondary"
                checked
                />
                <label>Student</label>
              <input
                type="radio"
                name="radio-3"
                class="radio radio-secondary"
                />
                <label>Company</label>
            </div>
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
            <div class="form-control">
              <label class="label">
                <span class="label-text">Confirm password</span>
              </label>
              <input
                type="text"
                placeholder="Confirm password"
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <button class="btn bg-gradient-to-r border-0 text-white from-primary to-secondary">
                Register
              </button>
              <p className="text-center">
                Already a member?
                <Link to="/login" className="text-secondary">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
