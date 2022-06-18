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
        `https://shrouded-taiga-82272.herokuapp.com/account/${user?.email}`
      );

      setAccount(data);
    })();
  }, [user?.email]);
  console.log(account?.account_type);

  return (
    <div className="navbar bg-black backdrop-blur-md lg:px-[10%] fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img
            className="h-10"
            src="https://i.ibb.co/kQmGYgB/crypto-final-logo-png-14-1.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
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
      <div className="navbar-end flex gap-4">
        {user ? (
          <div className="dropdown dropdown-hover dropdown-end">
            <label tabIndex="0" className="">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <span className="text-3xl">
                    {account?.company?.slice(0, 1) ||
                      account?.first_name?.slice(0, 1)}
                  </span>
                </div>
              </div>
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52"
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

            <div className="dropdown dropdown-hover dropdown-end">
              <label
                tabIndex="0"
                className="text-xl text-white bg-gradient-to-r from-primary to-secondary py-2 px-4 rounded-md rounded-bl-3xl"
              >
                Register
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52"
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
