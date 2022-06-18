import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase.init";
import axios from "axios";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [account, setAccount] = useState({});
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `http://localhost:5000/account/${user?.email}`
      );

      setAccount(data);
    })();
  }, [user?.email]);
  console.log(account?.account_type);

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
            {account?.account_type === "applicants" ? (
              <li>
                <Link to="/find-job">Find Job</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/post-job">Post Job</Link>
                </li>
                <li>
                  <Link to="/applicants">Applicants</Link>
                </li>
              </>
            )}
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
          {account?.account_type === "company" ? (
            <>
              <li>
                <Link to="/post-job">Post Job</Link>
              </li>
              <li>
                <Link to="/applicants">Applicants</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/find-job">Find Job</Link>
            </li>
          )}
        </ul>
      </div>
      <div class="navbar-end flex gap-4">
        {user ? (
          <div class="dropdown dropdown-hover dropdown-end">
            <label tabindex="0" class="">
              <div class="avatar placeholder">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <span class="text-3xl">
                    {account?.company?.slice(0, 1) ||
                      account?.first_name?.slice(0, 1)}
                  </span>
                </div>
              </div>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52"
            >
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                    signOut(auth);
                  }}
                >
                  Logout
                </button>
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
