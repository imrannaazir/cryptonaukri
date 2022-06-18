import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div class="navbar bg-black backdrop-blur-md lg:px-[10%] fixed top-0 z-50">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/applications">Applications</Link>
            </li>

            <li>
              <Link to="/applicants">Applicants</Link>
            </li>
          </ul>
        </div>
        <Link to="/" class="btn btn-ghost normal-case text-xl">
          <img
            className="h-10"
            src="https://i.ibb.co/kQmGYgB/crypto-final-logo-png-14-1.png"
            alt=""
          />
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link to="/applications">Applications</Link>
          </li>

          <li>
            <Link to="/applicants">Applicants</Link>
          </li>
        </ul>
      </div>
      <div class="navbar-end flex gap-4">
        {user ? (
          <div class="dropdown dropdown-hover dropdown-end">
            <label tabindex="0" class="">
              <div class="avatar placeholder">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <span class="text-3xl">K</span>
                </div>
              </div>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52"
            >
              <li>
                <button onClick={() => signOut(auth)}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link to="/login" className="text-xl">
              Login
            </Link>

            <div class="dropdown dropdown-hover dropdown-end">
              <label
                tabindex="0"
                class="text-xl text-white bg-gradient-to-r from-primary to-secondary py-2 px-4 rounded-md rounded-bl-3xl"
              >
                Register
              </label>
              <ul
                tabindex="0"
                class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52"
              >
                <li>
                  <Link to="/register/student">Student</Link>
                </li>
                <li>
                  <Link to="/register/company">Company</Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
